import { Router } from 'express';
import { supabase } from '../supabase.js';
import { validateApiKey } from '../middleware/auth.js';

const router = Router();

/**
 * カテゴリーを取得または作成
 */
async function getOrCreateCategory(name) {
  if (!name) return null;

  try {
    // 既存のカテゴリーを検索
    let { data: category } = await supabase
      .from('categories')
      .select('id')
      .eq('name', name)
      .single();

    if (category) {
      return category.id;
    }

    // 新しいカテゴリーを作成
    const { data: newCategory, error } = await supabase
      .from('categories')
      .insert({ name })
      .select('id')
      .single();

    if (error) throw error;
    return newCategory.id;
  } catch (error) {
    console.error('Error in getOrCreateCategory:', error);
    return null;
  }
}

/**
 * タグを取得または作成
 */
async function getOrCreateTags(names) {
  if (!names || names.length === 0) return [];

  try {
    const tagIds = [];
    for (const name of names) {
      // 既存のタグを検索
      let { data: tag } = await supabase
        .from('tags')
        .select('id')
        .eq('name', name)
        .single();

      if (tag) {
        tagIds.push(tag.id);
      } else {
        // 新しいタグを作成
        const { data: newTag, error } = await supabase
          .from('tags')
          .insert({ name })
          .select('id')
          .single();

        if (error) throw error;
        tagIds.push(newTag.id);
      }
    }
    return tagIds;
  } catch (error) {
    console.error('Error in getOrCreateTags:', error);
    return [];
  }
}

/**
 * @swagger
 * /prompts/list:
 *   get:
 *     summary: プロンプト一覧を取得
 *     parameters:
 *       - in: query
 *         name: category_id
 *         schema:
 *           type: string
 *         description: カテゴリーでフィルター
 *       - in: query
 *         name: tag_id
 *         schema:
 *           type: string
 *         description: タグでフィルター
 *       - in: query
 *         name: limit
 *         schema:
 *           type: integer
 *           default: 20
 *         description: 取得件数（最大100）
 *       - in: query
 *         name: offset
 *         schema:
 *           type: integer
 *           default: 0
 *         description: オフセット
 *     responses:
 *       200:
 *         description: プロンプト一覧
 */
router.get('/list', validateApiKey, async (req, res) => {
  try {
    const { category_id, tag_id, limit = 20, offset = 0 } = req.query;
    const actualLimit = Math.min(parseInt(limit), 100);

    let query = supabase
      .from('prompts')
      .select(`
        id,
        title,
        content,
        description,
        views_count,
        likes_count,
        created_at,
        category:categories(id, name),
        tags:prompt_tags(tag:tags(id, name))
      `)
      .eq('is_published', true)
      .order('created_at', { ascending: false })
      .range(parseInt(offset), parseInt(offset) + actualLimit - 1);

    if (category_id) {
      query = query.eq('category_id', category_id);
    }

    if (tag_id) {
      const { data: promptIds } = await supabase
        .from('prompt_tags')
        .select('prompt_id')
        .eq('tag_id', tag_id);

      if (promptIds) {
        query = query.in('id', promptIds.map(p => p.prompt_id));
      }
    }

    const { data: prompts, error, count } = await query;

    if (error) throw error;

    const formattedPrompts = prompts.map(prompt => ({
      ...prompt,
      tags: prompt.tags.map(t => t.tag).filter(Boolean)
    }));

    res.json({
      prompts: formattedPrompts,
      total: count || 0
    });
  } catch (error) {
    console.error('Error in GET /prompts/list:', error);
    res.status(500).json({ error: { code: 'server_error', message: 'サーバーエラーが発生しました' } });
  }
});

// prompts.js の createPrompt エンドポイント修正

/**
 * @swagger
 * /prompts/create:
 *   post:
 *     summary: 新規プロンプトを作成
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - title
 *               - content
 *             properties:
 *               title:
 *                 type: string
 *                 description: プロンプトのタイトル
 *               content:
 *                 type: string
 *                 description: プロンプトの内容
 *               description:
 *                 type: string
 *                 description: プロンプトの説明（任意）
 *               category:
 *                 type: string
 *                 description: カテゴリー名（存在しない場合は自動作成）
 *               tags:
 *                 type: array
 *                 items:
 *                   type: string
 *                 description: タグ名のリスト（存在しないタグは自動作成）
 *               is_published:
 *                 type: boolean
 *                 description: 公開するかどうか
 *                 default: true
 *               icon_name:
 *                 type: string
 *                 description: アイコン名（空の場合はランダム設定）
 *               gradient_from:
 *                 type: string
 *                 description: グラデーション開始色（空の場合はランダム設定）
 *               gradient_to:
 *                 type: string
 *                 description: グラデーション終了色（空の場合はランダム設定）
 *     responses:
 *       201:
 *         description: プロンプトが作成されました
 */
router.post('/create', validateApiKey, async (req, res) => {
  try {
    const { 
      title, 
      content, 
      description, 
      category, 
      tags, 
      is_published = true,
      icon_name,
      gradient_from,
      gradient_to
    } = req.body;

    // バリデーション
    if (!title || !content) {
      return res.status(400).json({
        error: {
          code: 'validation_error',
          message: 'タイトルと内容は必須です'
        }
      });
    }

    // カテゴリーの取得または作成
    const category_id = category ? await getOrCreateCategory(category) : null;

    // タグの取得または作成
    const tag_ids = tags ? await getOrCreateTags(tags) : [];

    // ランダムアイコン・色の設定
    const finalIconName = icon_name || getRandomIcon();
    const finalGradientFrom = gradient_from || getRandomColor();
    const finalGradientTo = gradient_to || getRandomColor();

    // プロンプトの作成
    const { data: prompt, error: promptError } = await supabase
      .from('prompts')
      .insert({
        title,
        content,
        description,
        category_id,
        user_id: req.userId,
        is_published,
        icon_name: finalIconName,
        gradient_from: finalGradientFrom,
        gradient_to: finalGradientTo
      })
      .select()
      .single();

    if (promptError) throw promptError;

    // タグの関連付け
    if (tag_ids.length > 0) {
      const promptTags = tag_ids.map(tag_id => ({
        prompt_id: prompt.id,
        tag_id
      }));

      const { error: tagError } = await supabase
        .from('prompt_tags')
        .insert(promptTags);

      if (tagError) throw tagError;
    }

    res.status(201).json(prompt);
  } catch (error) {
    console.error('Error in POST /prompts/create:', error);
    res.status(500).json({ error: { code: 'server_error', message: 'サーバーエラーが発生しました' } });
  }
});

// ランダムなアイコンを選択するヘルパー関数
const DEFAULT_ICONS = [
  'Wand', 'Sparkles', 'Brain', 'Star', 'Heart', 'Magic', 'Rocket', 'Zap', 'Crown', 'Flame',
  'Book', 'Pen', 'Pencil', 'Palette', 'Brush', 'Image', 'Camera', 'Music', 'Video', 'Microphone',
  'Code', 'Terminal', 'Bot', 'Target', 'Compass', 'Map', 'Globe', 'Cloud', 'Database', 'Sun'
];

function getRandomIcon() {
  return DEFAULT_ICONS[Math.floor(Math.random() * DEFAULT_ICONS.length)];
}

// ランダムな色を選択するヘルパー関数
const PRESET_COLORS = [
  '#2E578C', '#182D40', '#BF807A', '#592A2A',
  '#4A90E2', '#2ECC71', '#E74C3C', '#F1C40F',
  '#9B59B6', '#34495E', '#1ABC9C', '#E67E22',
  '#7F8C8D', '#16A085', '#8E44AD', '#D35400'
];

function getRandomColor() {
  return PRESET_COLORS[Math.floor(Math.random() * PRESET_COLORS.length)];
}

/**
 * @swagger
 * /prompts/{id}:
 *   get:
 *     summary: プロンプトの詳細を取得
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: プロンプトの詳細
 */
router.get('/:id', validateApiKey, async (req, res) => {
  try {
    const { id } = req.params;

    const { data: prompt, error } = await supabase
      .from('prompts')
      .select(`
        *,
        category:categories(id, name),
        tags:prompt_tags(tag:tags(id, name))
      `)
      .eq('id', id)
      .single();

    if (error) throw error;
    if (!prompt) {
      return res.status(404).json({
        error: {
          code: 'not_found',
          message: 'プロンプトが見つかりません'
        }
      });
    }

    // タグの整形
    prompt.tags = prompt.tags.map(t => t.tag).filter(Boolean);

    res.json(prompt);
  } catch (error) {
    console.error('Error in GET /prompts/:id:', error);
    res.status(500).json({ error: { code: 'server_error', message: 'サーバーエラーが発生しました' } });
  }
});

/**
 * @swagger
 * /prompts/{id}/update:
 *   put:
 *     summary: プロンプトを更新
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               title:
 *                 type: string
 *                 description: プロンプトのタイトル
 *               content:
 *                 type: string
 *                 description: プロンプトの内容
 *               description:
 *                 type: string
 *                 description: プロンプトの説明
 *               category:
 *                 type: string
 *                 description: カテゴリー名（存在しない場合は自動作成）
 *               tags:
 *                 type: array
 *                 items:
 *                   type: string
 *                 description: タグ名のリスト（存在しないタグは自動作成）
 *               is_published:
 *                 type: boolean
 *                 description: 公開するかどうか
 *               icon_name:
 *                 type: string
 *                 description: アイコン名
 *               gradient_from:
 *                 type: string
 *                 description: グラデーション開始色
 *               gradient_to:
 *                 type: string
 *                 description: グラデーション終了色
 *     responses:
 *       200:
 *         description: プロンプトが更新されました
 */
router.put('/:id/update', validateApiKey, async (req, res) => {
  try {
    const { id } = req.params;
    const { 
      title, 
      content, 
      description, 
      category, 
      tags, 
      is_published,
      icon_name,
      gradient_from,
      gradient_to
    } = req.body;

    // プロンプトの存在確認と所有権チェック
    const { data: existingPrompt, error: checkError } = await supabase
      .from('prompts')
      .select('user_id')
      .eq('id', id)
      .single();

    if (checkError || !existingPrompt) {
      return res.status(404).json({
        error: {
          code: 'not_found',
          message: 'プロンプトが見つかりません'
        }
      });
    }

    if (existingPrompt.user_id !== req.userId) {
      return res.status(403).json({
        error: {
          code: 'forbidden',
          message: 'このプロンプトを更新する権限がありません'
        }
      });
    }

    // カテゴリーの取得または作成
    const category_id = category ? await getOrCreateCategory(category) : undefined;

    // タグの取得または作成
    const tag_ids = tags ? await getOrCreateTags(tags) : undefined;

    // プロンプトの更新
    const updates = {};
    if (title !== undefined) updates.title = title;
    if (content !== undefined) updates.content = content;
    if (description !== undefined) updates.description = description;
    if (category_id !== undefined) updates.category_id = category_id;
    if (is_published !== undefined) updates.is_published = is_published;
    if (icon_name !== undefined) updates.icon_name = icon_name;
    if (gradient_from !== undefined) updates.gradient_from = gradient_from;
    if (gradient_to !== undefined) updates.gradient_to = gradient_to;

    const { data: prompt, error: updateError } = await supabase
      .from('prompts')
      .update(updates)
      .eq('id', id)
      .select()
      .single();

    if (updateError) throw updateError;

    // タグの更新
    if (tag_ids !== undefined) {
      // 既存のタグを削除
      await supabase
        .from('prompt_tags')
        .delete()
        .eq('prompt_id', id);

      // 新しいタグを追加
      if (tag_ids.length > 0) {
        const promptTags = tag_ids.map(tag_id => ({
          prompt_id: id,
          tag_id
        }));

        const { error: tagError } = await supabase
          .from('prompt_tags')
          .insert(promptTags);

        if (tagError) throw tagError;
      }
    }

    res.json(prompt);
  } catch (error) {
    console.error('Error in PUT /prompts/:id/update:', error);
    res.status(500).json({ error: { code: 'server_error', message: 'サーバーエラーが発生しました' } });
  }
});

export default router;
