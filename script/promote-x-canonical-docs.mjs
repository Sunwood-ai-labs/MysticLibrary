#!/usr/bin/env node
import { mkdir, readdir, readFile, rm, stat, writeFile } from 'node:fs/promises';
import path from 'node:path';

const DEFAULT_REVIEW_FILE =
  'raw/twitter-2026-03-16-6b1dc95fdd94290f9647655262ead4d269c8bab92289bd687e0490c25bacce7c/x-category-final-review.jsonl';
const DEFAULT_SOURCE_MANIFEST =
  'raw/twitter-2026-03-16-6b1dc95fdd94290f9647655262ead4d269c8bab92289bd687e0490c25bacce7c/prompt-import-manifest.json';
const DEFAULT_OUTPUT_MANIFEST =
  'raw/twitter-2026-03-16-6b1dc95fdd94290f9647655262ead4d269c8bab92289bd687e0490c25bacce7c/x-category-promotion-manifest.json';
const CURRENT_DATE = '2026-03-19';
const CURRENT_ISO = '2026-03-19T00:00:00+09:00';
const SCREEN_NAME = 'hAru_mAki_ch';
const SECTION_START = '<!-- integrated-catalog:start -->';
const SECTION_END = '<!-- integrated-catalog:end -->';
const LEGACY_SECTION_START = '<!-- x-categorized-imports:start -->';
const LEGACY_SECTION_END = '<!-- x-categorized-imports:end -->';

const STRONG_SUBCATEGORY_RULES = {
  'creative/visual': [
    ['character-styles', 'キャラクタースタイル', /(character|chibi|line-stickers|line emoji|portrait|catfolk|yokai|idol|人物|キャラ|ちび|lineスタンプ|雪女|歌って|歌手|マイク)/i],
    ['brand-assets', 'ブランド素材', /(logo|brand|banner|header|icon|typography|title card|poster|flyer|cover|label|thumbnail|ロゴ|アイコン|バナー)/i],
    ['miniatures-figurines', 'ミニチュアとフィギュア', /(miniature|figurine|figure|diorama|isometric|continent|cross-section|フィギュア|ミニチュア|ジオラマ|アイソメトリック)/i],
    ['image-edits', '画像編集・補正', /(edit-image|outpaint|edit|editing|remove|preserve|crop|id-photo|outfit-swap|background|背景|除去|切り抜き|補正|着せ替え|アウトペイント)/i],
    ['travel-scenes', '旅・位置情報シーン', /(travel|location|aerial|photo-book|cloud-sea|city-weather|位置情報|緯度|経度|旅|上空|観光|秘境)/i],
    ['holiday-cards', '季節カード', /(new-year-card|christmas|holiday card|greeting card|年賀状|クリスマス|干支)/i],
  ],
  'creative/video': [
    ['shot-recipes', 'ショットレシピ', /(fpv|pov|drone|tracking shot|orbit shot|flyover|fly-through|dolly|close-up|camera move|lens|guardrail|rear bumper|ドローン|視点)/i],
    ['sequence-specs', 'シーケンス仕様', /(timeline|scene 1|scene 2|start:|end:|bgm|sfx|sound effect|shot list|yaml|duration|タイムライン)/i],
    ['image-to-video', 'Image to Video', /(image-to-video|start frame|end frame|first frame|last frame|keyframe|cinema studio|video1|image to video)/i],
    ['vehicle-action', '車両アクション', /(car action|drift|cockpit|fighter jet|supercar|race|ae86|toyota|車|レース|ドリフト|コックピット)/i],
    ['character-scenes', 'キャラクターシーン', /(manzai|idol|interview|yuki|woman|character|ギャル|雪女|漫才|女性|人物|キャラ)/i],
    ['travel-scenes', '旅・ロケーション動画', /(travel|location|beach|temple|kyoto|tokyo|kamakura|shichirigahama|観光|寺|神社|海岸|位置情報|旅|ロケーション)/i],
  ],
  'docs/graphic-recording': [
    ['slide-infographics', 'スライドインフォグラフィック', /(notebooklm|slide|slides|instagram|carousel|html infographic|html graphic recording|スライド|カルーセル)/i],
    ['diagram-boards', '図解ボード', /(board|dashboard|profile page|year in review|annual summary|isometric|one-page board|プロフィール|年次まとめ|図解ボード)/i],
    ['isometric-diagrams', 'アイソメトリック図解', /(isometric|pictogram|pict|diagram|アイソメトリック|ピクト図解)/i],
  ],
  'dev/agent-prompts': [
    ['runtime-playbooks', 'ランタイム運用プレイブック', /(multi-agent|subagent|persona|runtime|playbook|orchestration|agent team|onizuka|gyaru|multi agent|サブエージェント)/i],
    ['automation-agents', 'オートメーションエージェント', /(playwright|chrome|browser|slack bot|agent-browser|logged in google chrome|automation|google antigravity|skill|gas|ブラウザ)/i],
  ],
  'dev/templates': [
    ['video-specs', '動画仕様テンプレート', /(timeline|bgm|sfx|yaml|cineburst|video spec|sequence|scene 1|scene 2|shot list|sound effect|タイムライン)/i],
    ['app-scaffolds', 'アプリ雛形', /(html|react|remotion|landing page|homepage|web app|single html|index\.html|app scaffold|portfolio|lp|profile page|dashboard|ホームページ|アプリ)/i],
  ],
};

const KNOWN_TOKENS = [
  [/nano\s*banana\s*pro|nanobanana\s*pro/i, 'nano-banana-pro'],
  [/nano\s*banana|nanobanana/i, 'nano-banana'],
  [/seedream/i, 'seedream'],
  [/higgsfield/i, 'higgsfield'],
  [/veo\s*3\.1/i, 'veo3-1'],
  [/veo\s*3/i, 'veo3'],
  [/sora\s*2/i, 'sora2'],
  [/kling/i, 'kling'],
  [/remotion/i, 'remotion'],
  [/pitchcast/i, 'pitchcast'],
  [/quarkdown/i, 'quarkdown'],
  [/notebooklm/i, 'notebooklm'],
  [/google\s*slides/i, 'google-slides'],
  [/voicevox/i, 'voicevox'],
  [/agentvrm/i, 'agentvrm'],
  [/playwright-interactive/i, 'playwright-interactive'],
  [/three\.js|threejs/i, 'threejs'],
  [/rustdesk/i, 'rustdesk'],
  [/openclaw/i, 'openclaw'],
  [/moonshine/i, 'moonshine'],
  [/onizuka/i, 'onizuka'],
];

const JP_TOKENS = [
  [/フィギュア|人形/i, 'figure'],
  [/ミニチュア/i, 'miniature'],
  [/ジオラマ/i, 'diorama'],
  [/図解/i, 'diagram'],
  [/グラレコ/i, 'graphic-recording'],
  [/カラーマップ/i, 'colormap'],
  [/コミック調|コミック/i, 'comic'],
  [/スライド/i, 'slides'],
  [/プレゼン/i, 'presentation'],
  [/動画|映像/i, 'video'],
  [/背景/i, 'background'],
  [/クリスマス/i, 'christmas'],
  [/コーヒーカップ/i, 'coffee-cup'],
  [/列車|機関車/i, 'train'],
  [/山岳都市/i, 'mountain-city'],
  [/雲海/i, 'cloud-sea'],
  [/古代文明/i, 'ancient-civilization'],
  [/神殿/i, 'temple'],
  [/妖怪/i, 'yokai'],
  [/ドローン/i, 'drone'],
  [/ロゴ/i, 'logo'],
  [/アイコン/i, 'icon'],
  [/プロフィール/i, 'profile'],
  [/名刺/i, 'business-card'],
  [/設定資料集/i, 'character-sheet'],
  [/写真集/i, 'photo-book'],
  [/証明写真/i, 'id-photo'],
  [/位置情報/i, 'location'],
  [/空撮|上空/i, 'aerial'],
  [/旅|トラベル/i, 'travel'],
  [/年賀状/i, 'new-year-card'],
  [/干支/i, 'zodiac'],
  [/着せ替え/i, 'outfit-swap'],
  [/私服|カジュアル/i, 'casual-outfit'],
  [/家事|掃除|料理|洗濯/i, 'housework'],
  [/眼鏡|メガネ/i, 'glasses'],
  [/歌って|歌う|歌唱|シンガー/i, 'singing'],
  [/マイク/i, 'microphone'],
  [/カフェ|喫茶/i, 'cafe'],
  [/古城|城/i, 'castle'],
  [/クリスタル/i, 'crystal'],
  [/漫才/i, 'manzai'],
  [/企業.?cm|cm風|コマーシャル/i, 'commercial'],
  [/街づくり/i, 'city-builder'],
  [/ギャル/i, 'gyaru'],
  [/雪女/i, 'yuki-onna'],
  [/車|カーアクション|自動車/i, 'car'],
  [/ロボット|メカ/i, 'mecha'],
  [/巨大人型/i, 'giant-humanoid'],
  [/ワードローブ/i, 'wardrobe'],
  [/コラージュ/i, 'collage'],
  [/ストリートファッション/i, 'street-fashion'],
  [/雑誌/i, 'editorial'],
  [/群衆|観光客/i, 'crowd'],
  [/除去/i, 'remove'],
  [/キャンバス|紙に書いた風/i, 'canvas-paper'],
  [/サムネイル/i, 'thumbnail'],
  [/LINEスタンプ/i, 'line-stickers'],
  [/LINE絵文字/i, 'line-emoji'],
  [/2頭身|ちび|SD/i, 'chibi'],
  [/キャラクター|キャラ/i, 'character'],
  [/猫人族/i, 'catfolk'],
  [/大賢者/i, 'sage'],
  [/サイバーパンク/i, 'cyberpunk'],
  [/バロック/i, 'baroque'],
  [/ステンドグラス/i, 'stained-glass'],
  [/ゲーム/i, 'game'],
  [/ボクセル/i, 'voxel'],
  [/エージェント/i, 'agent'],
  [/ブラウザ/i, 'browser'],
  [/テンプレート|雛形/i, 'template'],
  [/仕様/i, 'spec'],
];

const STOPWORDS = new Set(['about', 'amp', 'and', 'asset', 'assets', 'aspect', 'audio', 'camera', 'change', 'column', 'columns', 'content', 'create', 'default', 'design', 'effect', 'effects', 'example', 'examples', 'format', 'general', 'generate', 'generated', 'guide', 'height', 'high', 'html', 'https', 'image', 'images', 'layout', 'like', 'line', 'look', 'make', 'marker', 'mood', 'note', 'notes', 'only', 'output', 'pack', 'perfect', 'photo', 'please', 'post', 'present', 'prompt', 'prompts', 'px', 'quality', 'ratio', 'recipe', 'render', 'rendered', 'resolution', 'row', 'rows', 'same', 'scene', 'second', 'seconds', 'sec', 'set', 'shot', 'shots', 'simple', 'size', 'square', 'style', 'subject', 'summary', 'task', 'text', 'the', 'this', 'through', 'timeline', 'try', 'type', 'uploaded', 'using', 'variant', 'version', 'visual', 'white', 'width', 'with', 'yaml', 'your']);
const PRIMARY_ID_OVERRIDES = {
  '2003371471146831987': { branchKey: 'creative/visual/miniatures-figurines', stem: 'lost-world-coffee-cup-train' },
  '2003371121522143387': { branchKey: 'creative/visual/miniatures-figurines', stem: 'andes-coffee-cup-cloud-city' },
  '2005656448462917950': { branchKey: 'creative/game', stem: 'hacker-vertical-scroll-game' },
  '2003495658167361781': { branchKey: 'creative/video', stem: 'thank-you-stage-speech' },
  '1995922435338895473': { branchKey: 'creative/video/image-to-video', stem: 'video-style-transfer' },
  '1994810674422452591': { branchKey: 'creative/visual/character-styles', stem: 'dark-transformation-template' },
  '1995573401612943687': { branchKey: 'creative/video', stem: 'kling-template-296588198314293', title: 'Kling Template 296588198314293', description: 'Imported Kling template link 296588198314293 from X.' },
  '1995572739105849531': { branchKey: 'creative/video', stem: 'kling-template-296586889526059', title: 'Kling Template 296586889526059', description: 'Imported Kling template link 296586889526059 from X.' },
  '1973444936818376954': { branchKey: 'creative/video', stem: 'mahjong-edm-ron-scene' },
  '1973405212934369533': { branchKey: 'creative/video/shot-recipes', stem: 'deep-sea-ruins-drone-pov' },
  '1966889180413522138': { branchKey: 'creative/video', stem: 'sketch-progress-video' },
  '2001923722748530893': { branchKey: 'docs/graphic-recording', stem: 'wabon-profile-infographic', title: '和本プロフィール図解', description: '古文書スタイルで人物プロフィールを可視化する和本風インフォグラフィック。' },
  '2001910760885367156': { branchKey: 'docs/graphic-recording', stem: 'magazine-profile-spread', title: '雑誌見開きプロフィール図解', description: '雑誌の表紙と見開きで人物プロフィールを整理するエディトリアル図解。' },
  '2000796135204774009': { branchKey: 'docs/graphic-recording', stem: 'magazine-spread-typesetting', title: '雑誌見開き組版プロンプト', description: '本文を雑誌見開きのエディトリアルレイアウトへ組版するプロンプト。' },
  '1997349048127516919': { branchKey: 'docs/graphic-recording', stem: 'graphic-recorder-thinking-process', title: 'グラフィックレコーダー思考プロセス', description: '入力テキストを図解化するための思考手順まで含めたグラフィックレコーディング用プロンプト。' },
  '1936426098948215212': { branchKey: 'docs/graphic-recording', stem: 'graphic-recording-thumbnail-v4', title: 'グラレコサムネイル v4 涼雅', description: '夏の涼と和の美学を取り入れた高品質なブログ記事サムネイル（16:9）を生成', reuseExisting: true },
  '1936084074042740802': { branchKey: 'docs/graphic-recording', stem: 'graphic-recording-thumbnail-v3', title: 'グラレコサムネ v3 涼雅（簡易版）', description: '涼雅カラーパレットを使用したシンプルなブログ記事サムネイル生成プロンプト（編集機能なし）', reuseExisting: true },
  '1936058461017850360': { branchKey: 'docs/graphic-recording', stem: 'graphic-recording-thumbnail-v2', title: 'グラレコサムネ V2 和モダン', description: '和モダンカラーパレットを使用したブログ記事サムネイル生成プロンプト', reuseExisting: true },
  '1936032997029167410': { branchKey: 'docs/graphic-recording', stem: 'editable-graphic-recording-v3', title: '編集可能グラレコ v3.0 涼雅', description: '夏の涼と和の美学を現代に昇華させた編集可能な日本語インフォグラフィックHTMLを生成するプロンプト', reuseExisting: true },
  '2003325168010371438': { branchKey: 'dev/system-prompts', stem: 'claude-in-chrome-discord-post-instruction', title: 'Claude in Chrome Discord Post Instruction', description: 'Instruction for posting a test message to a Discord channel via Claude in Chrome.' },
  '1995415251248922934': { branchKey: 'dev/system-prompts', stem: 'psp-microwave-apology-copy', title: 'PSP Microwave Apology Copy', description: 'Short apology copy about microwaving a borrowed PSP.' },
};
const WEAK_FAMILY_TOKENS = new Set(['fal', 'gemini', 'grok', 'higgsfield', 'hunyuanimage', 'imagen4', 'nano-banana', 'nano-banana-pro', 'seedream', 'whisk']);
const STRONG_FAMILY_TOKENS = new Set(['agentvrm', 'google-slides', 'kling', 'notebooklm', 'pitchcast', 'playwright-interactive', 'quarkdown', 'remotion', 'sora2', 'threejs', 'veo3', 'veo3-1', 'voicevox']);
const URLISH_TOKENS = new Set(['ai', 'app', 'co', 'com', 'global', 'http', 'https', 'status', 'template', 'templates', 't', 'twitter', 'www', 'x']);
const SPECIAL_STEM_RULES = [
  [/(dark fantasy|ダークファンタジー).*(四天王|four heavenly kings)/i, ['dark-fantasy', 'four-heavenly-kings']],
  [/(年賀状|new year).*(shadow box|paper art|paper cutting|切り絵)/i, ['shadow-box', 'new-year-card']],
  [/(年賀状|new year).*(comic|漫画)/i, ['comic', 'new-year-card']],
  [/(年賀状|new year).*(chibi|ちび|sd)/i, ['chibi', 'new-year-card']],
  [/(christmas|クリスマス).*(background|背景|edit|change|変更)/i, ['christmas', 'background-edit']],
  [/(business card|名刺ケース|名刺)/i, ['business-card']],
  [/(travel influencer|トラベルインフルエンサー)/i, ['travel-influencer']],
  [/(travel photographer|トラベルフォトグラファー)/i, ['travel-photographer']],
  [/(anniversary|アニバーサリー)/i, ['anniversary-photo']],
  [/(newborn|ニューボーン)/i, ['newborn-photo']],
  [/(horror|ホラー).*(thumbnail|サムネ)/i, ['horror-thumbnail']],
  [/(world map|世界地図|cartographer|地図製作者)/i, ['fantasy-world-map']],
  [/(isometric|アイソメトリック).*(diagram|図解|pict)/i, ['isometric-pictogram-diagram']],
  [/(秘境探検|remote expedition)/i, ['remote-expedition']],
  [/(change the background of @?video1)/i, ['video-background-change']],
  [/(私服).*(家事).*(眼鏡|メガネ)/i, ['casual-housework', 'glasses']],
  [/(クリスタル).*(古城|城).*(歌って|歌う)/i, ['crystal-castle', 'singing']],
  [/(カフェ|喫茶).*くつろ/i, ['cafe-relaxing']],
  [/(マイク).*(歌って|歌う)/i, ['microphone', 'singing']],
  [/(line stickers?|lineスタンプ).*(animation|アニメーション)/i, ['line-stickers', 'animation']],
  [/(line stickers?|lineスタンプ).*(表情|ポーズ|セリフ|12種類)/i, ['line-stickers', 'expression-set']],
  [/(4x3).*(line stickers?|lineスタンプ).*(一覧|sheet)/i, ['line-stickers', 'sheet']],
  [/(巨大人型).*(ロボット|メカ)/i, ['giant-humanoid', 'mecha']],
  [/(街づくり).*(ゲーム|trailer|トレーラー)/i, ['city-builder', 'trailer']],
  [/(企業.?cm|cm風).*(車|ドア)/i, ['car', 'commercial']],
  [/(漫才).*(コンビ)/i, ['manzai', 'duo']],
  [/(ギャル).*(雪女)/i, ['gyaru', 'yuki-onna']],
  [/(ワードローブ).*(コラージュ|style profile)/i, ['wardrobe-style', 'collage']],
  [/(位置情報).*(写真集|ファッション誌)/i, ['location', 'photo-book', 'editorial']],
  [/(位置情報).*(動画|video)/i, ['location', 'video']],
  [/(ai-template|klingai\.com)/i, ['kling', 'template-link']],
];

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});

async function main() {
  const options = parseArgs(process.argv.slice(2));
  const cwd = process.cwd();
  const reviewFile = path.resolve(cwd, options.reviewFile);
  const sourceManifestFile = path.resolve(cwd, options.sourceManifest);
  const outputManifestFile = path.resolve(cwd, options.outputManifest);
  const previousManifest = await readJsonIfExists(outputManifestFile);
  if (options.write && options.cleanPrevious) {
    await cleanupPreviousOutputs(previousManifest, cwd);
    await cleanupCategoryXBranches(path.resolve(cwd, 'docs/prompt-catalog'));
    await pruneEmptyDirectories(path.resolve(cwd, 'docs/prompt-catalog'));
    await pruneEmptyDirectories(path.resolve(cwd, 'docs/en/prompt-catalog'));
  }

  const reviewDecisions = await loadJsonl(reviewFile);
  const sourceManifest = JSON.parse(await readFile(sourceManifestFile, 'utf8'));
  const archiveRecordMap = new Map((sourceManifest.generated_archive_docs ?? []).map((record) => [record.primary_id, record]));
  const existingStems = await collectExistingStems({ cwd, previousManifest });

  const archiveWrites = [];
  const archiveOnlyEntries = [];
  const rawCandidates = [];

  for (const decision of reviewDecisions) {
    const archiveRecord = archiveRecordMap.get(decision.primary_id);
    if (!archiveRecord) continue;
    const archiveAbsPath = path.resolve(cwd, archiveRecord.doc_path);
    const archiveDoc = await readArchiveDoc(archiveAbsPath);
    if (shouldStayArchiveOnly(decision) || isMeaninglessArchiveDoc(archiveDoc)) {
      const next = removeCategorizedEntrySection(archiveDoc.raw);
      if (next !== archiveDoc.raw) archiveWrites.push({ absPath: archiveAbsPath, content: next });
      archiveOnlyEntries.push(buildArchiveOnlyEntry(decision, archiveRecord));
      continue;
    }
    rawCandidates.push(buildRawCandidate({ archiveDoc, archiveRecord, decision }));
  }

  const mergedCandidates = mergeByPromptBody(rawCandidates);
  const resolved = resolveCanonicalRoutes(mergedCandidates, existingStems);

  const canonicalWrites = [];
  const categorizedEntries = [];
  for (const candidate of resolved) {
    if (!candidate.reuseExisting) {
      canonicalWrites.push({
        absPath: path.resolve(cwd, candidate.docPath),
        content: buildCanonicalPage(candidate, cwd),
      });
    }
    for (const source of candidate.sources) {
      const archiveAbs = path.resolve(cwd, source.archive_doc_path);
      const archiveRaw = await readFile(archiveAbs, 'utf8');
      const relativeLink = ensureDotSlash(normalizeSlash(path.relative(path.dirname(archiveAbs), path.resolve(cwd, candidate.docPath))));
      const next = upsertCategorizedEntrySection(archiveRaw, {
        categoryLabel: candidate.branchKey,
        categoryRelativeLink: relativeLink,
        reviewStatus: source.review_status,
        confidence: source.confidence,
        reviewer: source.reviewer,
      });
      if (next !== archiveRaw) archiveWrites.push({ absPath: archiveAbs, content: next });
      categorizedEntries.push(buildManifestEntry(candidate, source));
    }
  }

  const jpIndexResult = await buildJapaneseIndexWrites({ cwd, resolved });
  const enIndexResult = await buildEnglishIndexWrites({ cwd, resolved });
  const manifest = buildPromotionManifest({
    reviewFile,
    sourceManifestFile,
    sourceManifest,
    reviewDecisions,
    categorizedEntries,
    archiveOnlyEntries,
    canonicalDocs: resolved.filter((candidate) => !candidate.reuseExisting),
    generatedIndexPaths: [...jpIndexResult.generatedIndexPaths, ...enIndexResult.generatedIndexPaths],
    mergedGroups: buildMergedGroups(resolved),
    cwd,
  });

  const writes = dedupeByPath([
    ...archiveWrites,
    ...canonicalWrites,
    ...jpIndexResult.writes,
    ...enIndexResult.writes,
    { absPath: outputManifestFile, content: `${JSON.stringify(manifest, null, 2)}\n` },
  ]);

  let changed = 0;
  if (options.write) {
    for (const item of writes) {
      const previous = await readTextIfExists(item.absPath);
      if (previous === item.content) continue;
      await mkdir(path.dirname(item.absPath), { recursive: true });
      await writeFile(item.absPath, item.content, 'utf8');
      changed += 1;
    }
    await pruneEmptyDirectories(path.resolve(cwd, 'docs/prompt-catalog'));
    await pruneEmptyDirectories(path.resolve(cwd, 'docs/en/prompt-catalog'));
  }

  console.log(`Review decisions: ${reviewDecisions.length}`);
  console.log(`Canonical docs: ${resolved.length}`);
  console.log(`Archive mappings: ${categorizedEntries.length}`);
  console.log(`Archive-only records: ${archiveOnlyEntries.length}`);
  console.log(`Write targets: ${writes.length}`);
  console.log(`Files changed: ${changed}`);
  if (!options.write) console.log('Dry run only. Re-run with --write to persist files.');
}

function parseArgs(argv) {
  const options = {
    reviewFile: DEFAULT_REVIEW_FILE,
    sourceManifest: DEFAULT_SOURCE_MANIFEST,
    outputManifest: DEFAULT_OUTPUT_MANIFEST,
    write: false,
    cleanPrevious: false,
  };
  for (let index = 0; index < argv.length; index += 1) {
    const arg = argv[index];
    if (arg === '--review-file') options.reviewFile = requireValue(argv[++index], '--review-file');
    else if (arg === '--source-manifest') options.sourceManifest = requireValue(argv[++index], '--source-manifest');
    else if (arg === '--output-manifest') options.outputManifest = requireValue(argv[++index], '--output-manifest');
    else if (arg === '--write') options.write = true;
    else if (arg === '--clean-previous') options.cleanPrevious = true;
    else if (arg === '--help' || arg === '-h') printHelp();
    else throw new Error(`Unknown argument: ${arg}`);
  }
  return options;
}

function requireValue(value, flag) {
  if (!value) throw new Error(`${flag} requires a value`);
  return value;
}

function printHelp() {
  console.log('Usage: node script/promote-x-canonical-docs.mjs [--write] [--clean-previous]');
  process.exit(0);
}

async function readJsonIfExists(absPath) {
  const raw = await readTextIfExists(absPath);
  if (!raw) return null;
  try {
    return JSON.parse(raw);
  } catch {
    return null;
  }
}

async function readTextIfExists(absPath) {
  try {
    return await readFile(absPath, 'utf8');
  } catch (error) {
    if (error?.code === 'ENOENT') return null;
    throw error;
  }
}

async function loadJsonl(absPath) {
  const raw = await readFile(absPath, 'utf8');
  return raw.split(/\r?\n/).map((line) => line.trim()).filter(Boolean).map(JSON.parse);
}

async function cleanupPreviousOutputs(previousManifest, cwd) {
  if (!previousManifest) return;
  for (const entry of previousManifest.categorized_docs ?? []) {
    if (entry.generated_doc === false) continue;
    if (entry.categorized_doc_path) await rm(path.resolve(cwd, entry.categorized_doc_path), { force: true });
  }
  for (const file of previousManifest.generated_index_paths ?? []) {
    await rm(path.resolve(cwd, file), { force: true });
  }
}

async function cleanupCategoryXBranches(absRoot) {
  const entries = await readdir(absRoot, { withFileTypes: true });
  for (const entry of entries) {
    if (!entry.isDirectory()) continue;
    const fullPath = path.join(absRoot, entry.name);
    if (entry.name === 'archive') continue;
    if (entry.name === 'x') {
      await rm(fullPath, { recursive: true, force: true });
      continue;
    }
    await cleanupCategoryXBranches(fullPath);
  }
}

async function pruneEmptyDirectories(absRoot, isRoot = true) {
  let entries;
  try {
    entries = await readdir(absRoot, { withFileTypes: true });
  } catch {
    return false;
  }

  let hasContent = false;
  for (const entry of entries) {
    const fullPath = path.join(absRoot, entry.name);
    if (entry.isDirectory()) {
      const childHasContent = await pruneEmptyDirectories(fullPath, false);
      if (childHasContent) hasContent = true;
      continue;
    }
    if (entry.isFile()) hasContent = true;
  }

  if (!isRoot && !hasContent) {
    await rm(absRoot, { recursive: true, force: true });
    return false;
  }

  return true;
}

async function collectExistingStems({ cwd, previousManifest }) {
  const ignore = new Set(
    (previousManifest?.categorized_docs ?? [])
      .filter((entry) => entry.generated_doc !== false)
      .map((entry) => normalizeSlash(String(entry.categorized_doc_path ?? ''))),
  );
  const byDir = new Map();
  const stack = [path.resolve(cwd, 'docs/prompt-catalog')];
  while (stack.length > 0) {
    const current = stack.pop();
    const entries = await readdir(current, { withFileTypes: true });
    for (const entry of entries) {
      if (entry.name.startsWith('.')) continue;
      const fullPath = path.join(current, entry.name);
      const relative = normalizeSlash(path.relative(cwd, fullPath));
      if (entry.isDirectory()) {
        if (relative.includes('/archive/')) continue;
        if (relative.split('/').includes('x')) continue;
        stack.push(fullPath);
        continue;
      }
      if (!entry.isFile() || entry.name === 'index.md' || !entry.name.endsWith('.md') || ignore.has(relative)) continue;
      const dirKey = normalizeSlash(path.dirname(relative));
      if (!byDir.has(dirKey)) byDir.set(dirKey, new Set());
      byDir.get(dirKey).add(path.basename(entry.name, '.md'));
    }
  }
  return byDir;
}

async function readArchiveDoc(absPath) {
  const raw = await readFile(absPath, 'utf8');
  const frontmatter = parseFrontmatter(raw);
  const textBlocks = [...raw.matchAll(/```text\n([\s\S]*?)\n```/g)].map((match) => match[1].trim());
  const sourceNotes = textBlocks.length > 1 ? textBlocks[0] : '';
  return {
    raw,
    title: frontmatter.title ?? extractHeading(raw),
    summary: extractSummary(raw),
    promptBody: textBlocks.at(-1) ?? '',
    sourceNotes,
    sourceNoteTitle: firstInformativeLine(sourceNotes),
    sourceUrl: frontmatter.source_url ?? '',
    sourcePublishedAt: frontmatter.source_published_at ?? '',
  };
}

function parseFrontmatter(raw) {
  const match = raw.match(/^---\n([\s\S]*?)\n---/);
  if (!match) return {};
  const out = {};
  for (const line of match[1].split('\n')) {
    const separator = line.indexOf(':');
    if (separator <= 0) continue;
    out[line.slice(0, separator).trim()] = stripQuotes(line.slice(separator + 1).trim());
  }
  return out;
}

function extractHeading(raw) {
  return raw.match(/^#\s+(.+)$/m)?.[1]?.trim() ?? 'Imported X Prompt';
}

function extractSummary(raw) {
  return raw.match(/^- summary: (.+)$/m)?.[1]?.trim() ?? '';
}

function selectPreferredTitle(archiveDoc) {
  const candidates = uniqueStrings([
    archiveDoc.sourceNoteTitle,
    archiveDoc.title,
    ...informativePromptLines(archiveDoc.promptBody, 8),
  ].map((line) => normalizeTitleCandidate(line)).filter(Boolean));
  return candidates.sort((a, b) => scoreTitleCandidate(b) - scoreTitleCandidate(a))[0]
    ?? normalizeTitleCandidate(archiveDoc.title)
    ?? 'Imported X Prompt';
}

function scoreTitleCandidate(value) {
  const text = normalizeTitleCandidate(value);
  if (!text) return -100;
  let score = 0;
  if (!isGenericPromptLine(text)) score += 40;
  if (!looksUrlLike(text)) score += 15;
  if (!looksCoordinateOnly(text)) score += 15;
  if (!looksPromotionalSeriesTitle(text)) score += 12;
  if (text.length >= 8 && text.length <= 52) score += 18;
  if (text.length > 52 && text.length <= 90) score += 8;
  if (/[「『"]/u.test(text) || /[❶❷❸❹❺❻❼❽❾❿]/u.test(text)) score += 6;
  if (/^[-*]\s+/.test(text)) score -= 36;
  if (/^\d+\.\s+/.test(text)) score -= 24;
  if (/^[A-Z0-9 .:&/-]+$/.test(text)) score -= 8;
  if (/^a \d+-second video\.?$/i.test(text)) score -= 40;
  if (text.length > 120) score -= 24;
  return score;
}

function shouldStayArchiveOnly(decision) {
  return String(decision.review_status ?? '').trim() !== 'classified' || String(decision.final_decision ?? '').trim() === 'archive_only';
}

function isMeaninglessArchiveDoc(archiveDoc) {
  const values = [archiveDoc.title, archiveDoc.summary, archiveDoc.promptBody].map((item) => String(item ?? '').trim());
  return values.every((value) => !value || /^\.{3}$/.test(value));
}

function buildArchiveOnlyEntry(decision, archiveRecord) {
  return {
    primary_id: decision.primary_id,
    archive_doc_path: archiveRecord.doc_path,
    reviewer: decision.reviewer ?? '',
    reason: decision.rationale ?? 'archive_only',
  };
}

function buildRawCandidate({ archiveDoc, archiveRecord, decision }) {
  const baseCategoryPath = decideBaseCategoryPath(decision);
  const preferredTitle = selectPreferredTitle(archiveDoc);
  return {
    baseCategoryPath,
    title: preferredTitle,
    summary: archiveDoc.summary,
    promptBody: archiveDoc.promptBody,
    sourceNotes: archiveDoc.sourceNotes,
    sources: [{
      primary_id: decision.primary_id,
      archive_doc_path: archiveRecord.doc_path,
      archive_bucket: archiveRecord.archive_bucket,
      source_url: archiveDoc.sourceUrl || decision.source_url || '',
      source_published_at: archiveDoc.sourcePublishedAt || archiveRecord.created_at_iso,
      source_note_ids: archiveRecord.note_ids ?? [],
      review_status: decision.review_status,
      confidence: decision.confidence,
      reviewer: decision.reviewer ?? '',
      rationale: decision.rationale ?? '',
      source_title: preferredTitle,
    }],
  };
}

function decideBaseCategoryPath(decision) {
  return [
    String(decision.final_decision ?? '').trim() === 'categorize_new' ? decision.new_category_path : '',
    decision.final_category_path,
    buildCategoryPath(decision.final_top_category, decision.final_subpath),
    buildCategoryPath(decision.proposed_top_category, decision.proposed_subpath),
  ].map((value) => normalizeCategoryPath(value)).find(Boolean) ?? 'meta';
}

function buildCategoryPath(topCategory, subpath) {
  const top = String(topCategory ?? '').trim();
  if (!top) return '';
  const tail = normalizeCategoryPath(subpath);
  return tail ? `${top}/${tail}` : top;
}

function normalizeCategoryPath(value) {
  return String(value ?? '').replace(/\\/g, '/').replace(/^\/+|\/+$/g, '').replace(/^docs\/prompt-catalog\//, '').replace(/\/x$/, '');
}

function mergeByPromptBody(candidates) {
  const grouped = groupBy(candidates, (candidate) => `${candidate.baseCategoryPath}::${normalizePromptBody(candidate.promptBody)}`);
  return [...grouped.values()].map((group) => ({
    ...group[0],
    title: group.map((item) => item.title).sort((a, b) => scoreTitleCandidate(b) - scoreTitleCandidate(a))[0],
    summary: group.map((item) => item.summary).filter(Boolean).sort((a, b) => b.length - a.length)[0] ?? group[0].summary,
    sources: group.flatMap((item) => item.sources).sort((a, b) => String(a.source_published_at).localeCompare(String(b.source_published_at))),
  }));
}

function resolveCanonicalRoutes(candidates, existingStems) {
  const reserved = new Map();
  return candidates.map((candidate) => {
    const override = PRIMARY_ID_OVERRIDES[pickPrimarySource(candidate.sources).primary_id];
    const branchKey = override?.branchKey ?? extendBranch(candidate);
    const dirPath = normalizeSlash(path.join('docs/prompt-catalog', branchKey));
    const stemCandidates = override?.stem ? [override.stem] : buildStemVariants(candidate);
    const stem = override?.reuseExisting
      ? cleanupStemArtifacts(override.stem)
      : ensureUniqueStem(stemCandidates, candidate, dirPath, existingStems, reserved);
    const primarySource = pickPrimarySource(candidate.sources);
    const canonicalTitle = normalizeTitleCandidate(override?.title ?? candidate.title) || humanizeDocSlug(stem);
    const descriptionSource = override?.description ?? buildCandidateDescription({ ...candidate, title: canonicalTitle });
    return {
      ...candidate,
      title: canonicalTitle,
      branchKey,
      docPath: `${dirPath}/${stem}.md`,
      canonicalId: `${branchKey}/${stem}`,
      slug: stem,
      primarySource,
      relatedPostIds: uniqueStrings(candidate.sources.filter((item) => item.primary_id !== primarySource.primary_id).map((item) => item.primary_id)),
      relatedArchivePaths: uniqueStrings(candidate.sources.filter((item) => item.primary_id !== primarySource.primary_id).map((item) => item.archive_doc_path)),
      description: truncateText(descriptionSource, 110),
      catalogLabel: buildCatalogLabel(canonicalTitle, stem),
      catalogLabelEn: buildCatalogLabelEn(stem),
      promptSource: `prompts/docs-first/${branchKey}/${stem}_JP.md`,
      reuseExisting: Boolean(override?.reuseExisting),
    };
  });
}

function extendBranch(candidate) {
  const text = normalizeForMatching([candidate.title, candidate.summary, candidate.sourceNotes, candidate.promptBody].join(' '));
  for (const [slug, _label, matcher] of STRONG_SUBCATEGORY_RULES[candidate.baseCategoryPath] ?? []) {
    if (matcher.test(text)) return `${candidate.baseCategoryPath}/${slug}`;
  }
  return candidate.baseCategoryPath;
}

function buildStemTokens(candidate) {
  const titleText = [candidate.title, ...candidate.sources.map((item) => item.source_title)].join(' ');
  const seed = [titleText, candidate.summary, firstPromptChunk(candidate.promptBody), candidate.sourceNotes].join(' ');
  return refineStemTokens(uniqueTokens([
    ...SPECIAL_STEM_RULES.filter(([pattern]) => pattern.test(seed)).flatMap(([, parts]) => parts),
    ...KNOWN_TOKENS.filter(([pattern]) => pattern.test(seed)).map(([, token]) => token),
    ...JP_TOKENS.filter(([pattern]) => pattern.test(seed)).map(([, token]) => token),
    ...extractTemplateIdTokens(seed),
    ...extractAsciiTokens(seed),
    extractPartToken(titleText),
    extractVersionToken(titleText),
  ]), candidate).filter((token) => !STOPWORDS.has(token));
}

function buildStemVariants(candidate) {
  const tokens = buildStemTokens(candidate);
  const variants = [];
  for (const size of candidateStemSliceSizes(tokens.length)) {
    const stem = cleanupStemArtifacts(tokens.slice(0, size).join('-'));
    if (stem) variants.push(stem);
  }
  return uniqueStrings(variants.filter(Boolean));
}

function candidateStemSliceSizes(length) {
  const sizes = [];
  for (const size of [4, 5, 6, 7, 8, 9]) {
    if (length >= size) sizes.push(size);
  }
  if (sizes.length === 0 && length > 0) sizes.push(length);
  return sizes;
}

function ensureUniqueStem(stemCandidates, candidate, dirPath, existingStems, reserved) {
  if (!reserved.has(dirPath)) reserved.set(dirPath, new Set());
  const used = existingStems.get(dirPath) ?? new Set();
  const held = reserved.get(dirPath);
  const claim = (stem) => {
    const normalized = cleanupStemArtifacts(stem);
    if (!normalized || used.has(normalized) || held.has(normalized)) return '';
    held.add(normalized);
    return normalized;
  };
  for (const stem of uniqueStrings(stemCandidates ?? [])) {
    const claimed = claim(stem);
    if (claimed) return claimed;
  }
  const base = cleanupStemArtifacts(stemCandidates.at(-1) ?? fallbackStem(candidate.baseCategoryPath, pickPrimarySource(candidate.sources).primary_id));
  const disambiguator = extractPrimaryDisambiguator(candidate);
  if (disambiguator) {
    const claimed = claim(`${base}-${disambiguator}`);
    if (claimed) return claimed;
  }
  const postTail = String(pickPrimarySource(candidate.sources).primary_id ?? '').slice(-6);
  if (postTail) {
    const claimed = claim(`${base}-post-${postTail}`);
    if (claimed) return claimed;
  }
  for (let attempt = 2; attempt < 1000; attempt += 1) {
    const claimed = claim(`${base}-part-${attempt}`);
    if (claimed) return claimed;
  }
  throw new Error(`Unable to allocate unique stem for ${dirPath}`);
}

function extractPrimaryDisambiguator(candidate) {
  const titleText = [candidate.title, ...candidate.sources.map((item) => item.source_title)].join(' ');
  const primarySource = pickPrimarySource(candidate.sources);
  return extractPartToken(titleText)
    || extractVersionToken(titleText)
    || extractTemplateIdTokens(`${primarySource.source_url || ''} ${titleText}`).find(Boolean)
    || formatCompactDate(primarySource.source_published_at)
    || '';
}

function pickPrimarySource(sources) {
  return [...sources].sort((a, b) => confidenceRank(b.confidence) - confidenceRank(a.confidence) || String(b.source_title ?? '').length - String(a.source_title ?? '').length || String(b.source_published_at ?? '').localeCompare(String(a.source_published_at ?? '')))[0];
}

function buildCanonicalPage(candidate, cwd) {
  const archiveRelative = ensureDotSlash(normalizeSlash(path.relative(path.dirname(path.resolve(cwd, candidate.docPath)), path.resolve(cwd, candidate.primarySource.archive_doc_path))));
  const category = normalizeCategoryPath(candidate.baseCategoryPath).split('/')[0] || 'meta';
  const tags = uniqueStrings([...normalizeCategoryPath(candidate.branchKey).split('/'), ...candidate.slug.split('-').slice(0, 3)]);
  const lines = [
    '---',
    `title: ${yamlScalar(candidate.title)}`,
    `description: ${yamlScalar(candidate.description)}`,
    `category: ${yamlScalar(category)}`,
    `intent: ${yamlScalar(defaultIntent(candidate.baseCategoryPath))}`,
    'audience:',
    '  - 利用者',
    'input_requirements:',
    '  - 依頼内容',
    'tags:',
    ...tags.map((tag) => `  - ${tag}`),
    'status: stable',
    'owner: prompt-catalog-team',
    `last_reviewed: ${CURRENT_DATE}`,
    `canonical_id: ${yamlScalar(candidate.canonicalId)}`,
    `prompt_source: ${yamlScalar(candidate.promptSource)}`,
    'source_platform: x',
    `source_author: ${yamlScalar(SCREEN_NAME)}`,
    `source_post_id: ${yamlScalar(candidate.primarySource.primary_id)}`,
    `source_url: ${yamlScalar(candidate.primarySource.source_url || '')}`,
    `source_published_at: ${yamlScalar(candidate.primarySource.source_published_at)}`,
    `source_archive_path: ${yamlScalar(candidate.primarySource.archive_doc_path)}`,
    ...(candidate.primarySource.source_note_ids.length > 0 ? ['source_note_ids:', ...candidate.primarySource.source_note_ids.map((id) => `  - ${id}`)] : []),
    ...(candidate.relatedPostIds.length > 0 ? ['source_related_post_ids:', ...candidate.relatedPostIds.map((id) => `  - ${id}`)] : []),
    ...(candidate.relatedArchivePaths.length > 0 ? ['source_related_archive_paths:', ...candidate.relatedArchivePaths.map((item) => `  - ${yamlScalar(item)}`)] : []),
    '---',
    '',
    `# ${escapeDisplayText(candidate.title)}`,
    '',
    escapeDisplayText(candidate.description),
    '',
    '## プロンプト本文',
    buildTextFence(candidate.promptBody || '[Prompt text was empty after extraction]'),
    '',
    '## ソース文脈',
    ...(candidate.primarySource.source_url ? ['<ClientOnly>', `  <XPostEmbed url="${candidate.primarySource.source_url}" />`, '</ClientOnly>'] : ['- note-only record without a tweet embed.']),
    '',
    ...(candidate.sourceNotes ? ['### 投稿メモ', buildTextFence(candidate.sourceNotes), ''] : []),
    '## 出典',
    `- primary post: ${candidate.primarySource.source_url ? `[${candidate.primarySource.primary_id}](${candidate.primarySource.source_url})` : candidate.primarySource.primary_id}`,
    `- published at: ${formatJst(candidate.primarySource.source_published_at)}`,
    `- archive doc: [${candidate.primarySource.primary_id}](${archiveRelative})`,
    ...(candidate.relatedPostIds.length > 0 ? [`- related posts: ${candidate.relatedPostIds.join(', ')}`] : []),
    '',
  ];
  return `${lines.join('\n').trimEnd()}\n`;
}

function buildManifestEntry(candidate, source) {
  return {
    primary_id: source.primary_id,
    archive_doc_path: source.archive_doc_path,
    categorized_doc_path: candidate.docPath,
    generated_doc: !candidate.reuseExisting,
    top_category: normalizeCategoryPath(candidate.baseCategoryPath).split('/')[0],
    subpath: normalizeCategoryPath(candidate.branchKey).split('/').slice(1).join('/'),
    category_path: candidate.branchKey,
    title: candidate.title,
    summary: candidate.description,
    review_status: source.review_status,
    confidence: source.confidence,
    reviewer: source.reviewer,
    source_url: source.source_url,
    source_published_at: source.source_published_at,
    archive_bucket: source.archive_bucket,
    canonical_id: candidate.canonicalId,
    slug: candidate.slug,
  };
}

async function buildJapaneseIndexWrites({ cwd, resolved }) {
  return buildLocalizedIndexWrites({ cwd, resolved, locale: 'ja' });
}

async function buildEnglishIndexWrites({ cwd, resolved }) {
  return buildLocalizedIndexWrites({ cwd, resolved, locale: 'en' });
}

async function buildLocalizedIndexWrites({ cwd, resolved, locale }) {
  const writes = [];
  const generatedIndexPaths = [];
  const directories = buildDirectorySummaries(resolved);
  const docsRoot = locale === 'ja' ? 'docs/prompt-catalog' : 'docs/en/prompt-catalog';
  for (const summary of directories.values()) {
    const absPath = path.resolve(cwd, docsRoot, summary.dirKey, 'index.md');
    const previous = await readTextIfExists(absPath);
    const content = summary.isGeneratedOnly
      ? buildGeneratedDirectoryIndex(summary, { cwd, locale, absPath })
      : upsertCatalogSection(previous, buildCatalogSection(summary, { cwd, locale, absPath }));
    if (previous === null) generatedIndexPaths.push(normalizeSlash(path.relative(cwd, absPath)));
    if (previous !== content) writes.push({ absPath, content });
  }
  return { writes, generatedIndexPaths };
}

function buildDirectorySummaries(resolved) {
  const byDir = new Map();
  for (const doc of resolved.filter((candidate) => !candidate.reuseExisting)) {
    const dirs = collectDirs(doc.baseCategoryPath, doc.branchKey);
    for (const dirKey of dirs) {
      if (!byDir.has(dirKey)) byDir.set(dirKey, { dirKey, rootKey: doc.baseCategoryPath, childDirs: new Set(), directDocs: [], allDocs: [], isGeneratedOnly: dirKey !== doc.baseCategoryPath });
      byDir.get(dirKey).allDocs.push(doc);
    }
    byDir.get(doc.branchKey).directDocs.push(doc);
    for (let index = 0; index < dirs.length - 1; index += 1) byDir.get(dirs[index]).childDirs.add(dirs[index + 1]);
  }
  return byDir;
}

function collectDirs(rootKey, branchKey) {
  const rootLen = normalizeCategoryPath(rootKey).split('/').length;
  const parts = normalizeCategoryPath(branchKey).split('/');
  const dirs = [];
  for (let index = rootLen; index <= parts.length; index += 1) dirs.push(parts.slice(0, index).join('/'));
  return dirs;
}

function buildCatalogSection(summary, { cwd, locale, absPath }) {
  const lines = locale === 'ja'
    ? ['## 追加プロンプト', '', 'このカテゴリに追加された正規プロンプトです。', '', `- 総件数: ${summary.allDocs.length}`]
    : ['## Additional Prompts', '', 'These canonical prompt pages are maintained on the Japanese source-of-truth route until English translations are available.', '', `- total items: ${summary.allDocs.length}`];
  if (summary.childDirs.size > 0) {
    lines.push('', locale === 'ja' ? '### 下位カテゴリ' : '### Subcategories', '');
    for (const childKey of [...summary.childDirs].sort((a, b) => a.localeCompare(b, 'en'))) {
      lines.push(`- [${labelForDir(childKey, locale)}](./${path.posix.basename(childKey)}/)`);
    }
  }
  if (summary.directDocs.length > 0) {
    lines.push('', locale === 'ja' ? '### 収録プロンプト' : '### Canonical Prompt Pages', '');
    for (const doc of summary.directDocs.sort((a, b) => String(b.primarySource.source_published_at).localeCompare(String(a.primarySource.source_published_at)))) {
      const relativeLink = locale === 'ja'
        ? `./${doc.slug}.md`
        : ensureDotSlash(normalizeSlash(path.relative(path.dirname(absPath), path.resolve(cwd, doc.docPath))));
      lines.push(`- [${escapeDisplayText(locale === 'ja' ? doc.catalogLabel : doc.catalogLabelEn)}](${relativeLink}) - ${escapeDisplayText(doc.description)}`);
    }
  }
  lines.push('');
  return lines.join('\n');
}

function buildGeneratedDirectoryIndex(summary, { cwd, locale, absPath }) {
  const title = labelForDir(summary.dirKey, locale);
  const description = locale === 'ja'
    ? `${title} の正規プロンプト一覧`
    : `Canonical prompt pages for ${title}. Japanese pages are the current source of truth.`;
  const lines = [
    '---',
    `title: ${yamlScalar(title)}`,
    `description: ${yamlScalar(description)}`,
    `category: ${yamlScalar(normalizeCategoryPath(summary.rootKey).split('/')[0] || 'meta')}`,
    '---',
    '',
    `# ${escapeDisplayText(title)}`,
    '',
    locale === 'ja'
      ? `- 総件数: ${summary.allDocs.length}`
      : `- total items: ${summary.allDocs.length}`,
    '',
  ];
  if (summary.childDirs.size > 0) {
    lines.push(locale === 'ja' ? '## 下位カテゴリ' : '## Subcategories', '');
    for (const childKey of [...summary.childDirs].sort((a, b) => a.localeCompare(b, 'en'))) {
      lines.push(`- [${labelForDir(childKey, locale)}](./${path.posix.basename(childKey)}/)`);
    }
    lines.push('');
  }
  if (summary.directDocs.length > 0) {
    lines.push(locale === 'ja' ? '## 収録プロンプト' : '## Canonical Prompt Pages', '');
    for (const doc of summary.directDocs.sort((a, b) => String(b.primarySource.source_published_at).localeCompare(String(a.primarySource.source_published_at)))) {
      const relativeLink = locale === 'ja'
        ? `./${doc.slug}.md`
        : ensureDotSlash(normalizeSlash(path.relative(path.dirname(absPath), path.resolve(cwd, doc.docPath))));
      lines.push(`- [${escapeDisplayText(locale === 'ja' ? doc.catalogLabel : doc.catalogLabelEn)}](${relativeLink}) - ${escapeDisplayText(doc.description)}`);
    }
    lines.push('');
  }
  return `${lines.join('\n').trimEnd()}\n`;
}

function labelForDir(dirKey, locale = 'ja') {
  const branch = normalizeCategoryPath(dirKey);
  for (const [rootKey, rules] of Object.entries(STRONG_SUBCATEGORY_RULES)) {
    for (const [slug, label] of rules) {
      if (branch === `${rootKey}/${slug}`) return locale === 'ja' ? label : humanizeDirName(slug);
    }
  }
  return humanizeDirName(path.posix.basename(branch));
}

function upsertCatalogSection(previous, section) {
  return `${removeCatalogSection(previous).trimEnd()}\n\n${SECTION_START}\n${section.trimEnd()}\n${SECTION_END}\n`;
}

function removeCatalogSection(previous) {
  return String(previous ?? '')
    .replace(new RegExp(`${escapeRegExp(SECTION_START)}[\\s\\S]*?${escapeRegExp(SECTION_END)}\\n?`, 'g'), '')
    .replace(new RegExp(`${escapeRegExp(LEGACY_SECTION_START)}[\\s\\S]*?${escapeRegExp(LEGACY_SECTION_END)}\\n?`, 'g'), '')
    .replace(/\n{3,}/g, '\n\n')
    .trimEnd() + '\n';
}

function upsertCategorizedEntrySection(previous, { categoryLabel, categoryRelativeLink, reviewStatus, confidence, reviewer }) {
  const section = ['## Categorized Entry', `- canonical doc: [${categoryLabel}](${categoryRelativeLink})`, `- review status: ${reviewStatus}`, `- confidence: ${confidence}`, `- reviewer: ${reviewer || 'unknown'}`, ''].join('\n');
  const cleaned = removeCategorizedEntrySection(previous).trimEnd();
  const insertionPoint = cleaned.indexOf('## Source Post');
  if (insertionPoint < 0) return `${cleaned}\n\n${section}`;
  return `${cleaned.slice(0, insertionPoint).trimEnd()}\n\n${section}${cleaned.slice(insertionPoint)}`.replace(/\n{3,}/g, '\n\n');
}

function removeCategorizedEntrySection(previous) {
  return String(previous ?? '').replace(/## Categorized Entry[\s\S]*?(?=\n##\s|\n<ClientOnly>|$)/, '').replace(/\n{3,}/g, '\n\n').trimEnd() + '\n';
}

function buildPromotionManifest({ reviewFile, sourceManifestFile, sourceManifest, reviewDecisions, categorizedEntries, archiveOnlyEntries, canonicalDocs, generatedIndexPaths, mergedGroups, cwd }) {
  return {
    generated_at: CURRENT_ISO,
    review_file: normalizeSlash(path.relative(cwd, reviewFile)),
    source_manifest: normalizeSlash(path.relative(cwd, sourceManifestFile)),
    summary: {
      canonical_record_count: sourceManifest.generated_archive_docs?.length ?? 0,
      review_decisions: reviewDecisions.length,
      canonical_docs: canonicalDocs.length,
      categorized_docs: categorizedEntries.length,
      archive_only_records: archiveOnlyEntries.length,
      merged_groups: mergedGroups.length,
    },
    categorized_docs: categorizedEntries,
    archive_only_records: archiveOnlyEntries,
    merged_groups: mergedGroups,
    generated_index_paths: generatedIndexPaths,
  };
}

function buildMergedGroups(resolved) {
  return resolved
    .filter((candidate) => candidate.sources.length > 1)
    .map((candidate) => ({
      canonical_id: candidate.canonicalId,
      categorized_doc_path: candidate.docPath,
      merged_post_ids: candidate.sources.map((source) => source.primary_id),
      merged_archive_paths: candidate.sources.map((source) => source.archive_doc_path),
    }));
}

function buildCandidateDescription(candidate) {
  const choices = uniqueStrings([
    candidate.summary,
    firstInformativeLine(candidate.sourceNotes),
    firstInformativeLine(candidate.promptBody),
    candidate.title,
  ]);
  const picked = choices.find((line) => !isGenericPromptLine(line) && line !== candidate.title) ?? choices[0] ?? candidate.title;
  return picked || candidate.title;
}

function buildCatalogLabel(title, slug) {
  const clean = normalizeTitleCandidate(title);
  if (!clean || isGenericPromptLine(clean) || looksPromotionalSeriesTitle(clean) || looksUrlLike(clean) || clean.length > 72) {
    return humanizeDocSlug(slug);
  }
  return escapeDisplayText(clean);
}

function buildCatalogLabelEn(slug) {
  return humanizeDocSlug(slug);
}

function humanizeDocSlug(slug) {
  return String(slug ?? '')
    .split('-')
    .filter(Boolean)
    .map((part) => (/^v\d/.test(part) ? part.toUpperCase() : part.charAt(0).toUpperCase() + part.slice(1)))
    .join(' ');
}

function refineStemTokens(tokens, candidate) {
  const cleaned = [];
  for (const original of tokens) {
    const token = canonicalizeStemToken(original);
    if (!token || STOPWORDS.has(token) || URLISH_TOKENS.has(token)) continue;
    if (looksNumericArtifact(token) || looksUrlArtifact(token) || looksCoordinateToken(token) || looksDimensionToken(token)) continue;
    cleaned.push(token);
  }
  const standaloneFamilyKeys = new Set(cleaned.filter((token) => isStandaloneFamilyToken(token)).map((token) => familyKeyForToken(token)).filter(Boolean));
  const normalized = cleaned.map((token) => stripEmbeddedFamilies(token, standaloneFamilyKeys)).filter(Boolean);
  const deduped = dedupeMeaningfulTokens(normalized);
  const informational = deduped.filter((token) => !WEAK_FAMILY_TOKENS.has(token) && !STRONG_FAMILY_TOKENS.has(token));
  const families = deduped.filter((token) => STRONG_FAMILY_TOKENS.has(token) || (WEAK_FAMILY_TOKENS.has(token) && informational.length < 3));
  const versionTokens = dedupeVersionTokens(deduped.filter((token) => /^v\d+(?:-\d+)*$/.test(token)));
  const partTokens = deduped.filter((token) => /^part-\d+$/.test(token));
  const semantic = deduped.filter((token) => !families.includes(token) && !versionTokens.includes(token) && !partTokens.includes(token));
  const preferred = [...semantic, ...families.slice(0, semantic.length >= 3 ? 1 : 2), ...partTokens.slice(0, 1), ...versionTokens.slice(0, 1)];
  return preferred.length > 0 ? preferred : [fallbackStem(candidate.baseCategoryPath, candidate.sources[0]?.primary_id)];
}

function canonicalizeStemToken(token) {
  let next = String(token ?? '').trim().toLowerCase();
  if (!next) return '';
  next = next
    .replace(/nanobananapro/g, 'nano-banana-pro')
    .replace(/nanobanana/g, 'nano-banana')
    .replace(/higgsfieldsora2/g, 'higgsfield-sora2')
    .replace(/higgsfieldsora/g, 'higgsfield-sora')
    .replace(/unlmited/g, 'unlimited')
    .replace(/goolge/g, 'google')
    .replace(/gork/g, 'grok')
    .replace(/video1/g, 'video')
    .replace(/seedream4/g, 'seedream-v4')
    .replace(/gemini-2-5-flash-image-preview/g, 'gemini-flash-image-preview')
    .replace(/templates-\d+$/, 'templates')
    .replace(/^-+|-+$/g, '');
  if (next === 'nano-banana' || next === 'nano-banana-pro') return next;
  if (/^v\d+(?:\.\d+)+$/i.test(next)) return next.replace(/\./g, '-');
  if (/^\d+(?:-\d+)+$/.test(next)) return '';
  return next;
}

function dedupeMeaningfulTokens(tokens) {
  const kept = [];
  for (const token of tokens) {
    if (!token) continue;
    const familyKey = familyKeyForToken(token);
    const existingIndex = familyKey ? kept.findIndex((item) => familyKeyForToken(item) === familyKey) : -1;
    if (existingIndex >= 0) {
      const existing = kept[existingIndex];
      if (familySpecificity(token) > familySpecificity(existing)) kept[existingIndex] = token;
      continue;
    }
    if (kept.includes(token)) continue;
    if (token === 'veo3' && kept.includes('veo3-1')) continue;
    if (kept.some((existing) => existing.includes(token) && (WEAK_FAMILY_TOKENS.has(token) || STRONG_FAMILY_TOKENS.has(token)))) continue;
    kept.push(token);
  }
  return kept;
}

function familyKeyForToken(token) {
  const value = String(token ?? '');
  if (!value) return '';
  if (value.includes('nano-banana')) return 'nano-banana';
  if (value.includes('higgsfield')) return 'higgsfield';
  if (value.includes('sora2')) return 'sora2';
  if (value.includes('seedream')) return 'seedream';
  if (value.includes('gemini')) return 'gemini';
  if (value.includes('whisk')) return 'whisk';
  if (value.includes('hunyuanimage')) return 'hunyuanimage';
  if (value.includes('imagen4')) return 'imagen4';
  if (value.includes('veo3')) return 'veo3';
  return '';
}

function familySpecificity(token) {
  const value = String(token ?? '');
  let score = value.length;
  if (value.includes('pro')) score += 6;
  if (value.includes('slides') || value.includes('flash-image-preview')) score += 4;
  return score;
}

function isStandaloneFamilyToken(token) {
  return WEAK_FAMILY_TOKENS.has(token)
    || STRONG_FAMILY_TOKENS.has(token)
    || /^nano-banana(?:-pro)?$/.test(token)
    || /^higgsfield(?:-sora2)?$/.test(token)
    || /^seedream(?:-v\d+)?$/.test(token)
    || /^gemini(?:-flash-image-preview)?$/.test(token);
}

function stripEmbeddedFamilies(token, standaloneFamilyKeys) {
  let next = String(token ?? '');
  if (!next || standaloneFamilyKeys.size === 0) return next;
  for (const key of standaloneFamilyKeys) {
    for (const pattern of familyRegexSources(key)) {
      next = next
        .replace(new RegExp(`^${pattern}-`), '')
        .replace(new RegExp(`-${pattern}$`), '')
        .replace(new RegExp(`-${pattern}-`, 'g'), '-');
    }
  }
  return next.replace(/-+/g, '-').replace(/^-|-$/g, '');
}

function familyRegexSources(key) {
  if (key === 'nano-banana') return ['nano-banana(?:-pro)?'];
  if (key === 'higgsfield') return ['higgsfield'];
  if (key === 'sora2') return ['sora2'];
  if (key === 'seedream') return ['seedream(?:-v\\d+)?'];
  if (key === 'gemini') return ['gemini(?:-flash-image-preview)?'];
  if (key === 'veo3') return ['veo3(?:-1)?'];
  return [escapeRegExp(key)];
}

function cleanupStemArtifacts(stem) {
  let next = String(stem ?? '').trim();
  if (!next) return '';
  next = next.replace(/(^|-)pro-nano-banana(?=-|$)/g, '$1nano-banana-pro');
  if (next.includes('nano-banana-pro')) {
    next = next.replace(/-nano-banana-pro(?=-|$)/g, '').replace(/-nano-banana(?=-|$)/g, '');
  } else if (next.includes('nano-banana')) {
    next = next.replace(/-nano-banana-pro(?=-|$)/g, '').replace(/-nano-banana(?=-|$)/g, '');
  }
  if (next.includes('higgsfield')) next = next.replace(/-higgsfield(?=-|$)/g, '');
  if (next.includes('sora2')) next = next.replace(/-sora2(?=-|$)/g, '');
  if (next.includes('seedream')) next = next.replace(/-seedream(?:-v\d+)?(?=-|$)/g, '');
  if (next.includes('gemini')) next = next.replace(/-gemini(?:-flash-image-preview)?(?=-|$)/g, '');
  return next.replace(/-+/g, '-').replace(/^-|-$/g, '');
}

function dedupeVersionTokens(tokens) {
  const seen = new Set();
  const out = [];
  for (const token of tokens) {
    const key = token.replace(/^v/, '');
    if (seen.has(key)) continue;
    seen.add(key);
    out.push(token.startsWith('v') ? token : `v${key}`);
  }
  return out;
}

function normalizeCandidateLine(value) {
  return String(value ?? '')
    .replace(/\r?\n/g, ' ')
    .replace(/^\d+[.)]\s*/u, '')
    .replace(/^[-*•>]+\s*/u, '')
    .replace(/^#+\s*/, '')
    .replace(/\*\*/g, '')
    .replace(/`+/g, '')
    .replace(/\s+/g, ' ')
    .trim();
}

function normalizeTitleCandidate(value) {
  return normalizeCandidateLine(value)
    .replace(/^[\p{Extended_Pictographic}\p{Emoji_Presentation}\s]+/gu, '')
    .replace(/^[［[](.+)[\]］]$/u, '$1')
    .replace(/^["'「『【]+/u, '')
    .replace(/["'」』】]+$/u, '')
    .trim();
}

function looksPromotionalSeriesTitle(value) {
  const text = String(value ?? '').trim();
  return /(お試し|やってみた|使ってみた|爆誕|参戦|エグイ|チャレンジ)/i.test(text);
}

function informativePromptLines(value, limit = 6) {
  const out = [];
  for (const rawLine of String(value ?? '').split(/\r?\n/)) {
    const line = normalizeTitleCandidate(rawLine);
    if (!line || isGenericPromptLine(line)) continue;
    out.push(line);
    if (out.length >= limit) break;
  }
  return out;
}

function firstInformativeLine(value) {
  return informativePromptLines(value, 1)[0] ?? '';
}

function isGenericPromptLine(value) {
  const text = normalizeTitleCandidate(value).toLowerCase();
  const familyToken = canonicalizeStemToken(text);
  return !text
    || /^task:?$/.test(text)
    || /^general style\b/.test(text)
    || /^1prompt:?$/.test(text)
    || /^prompt:?$/.test(text)
    || /^summary unavailable/.test(text)
    || /^change the background of @?video1$/.test(text)
    || /^version\s*[:=]?/i.test(text)
    || /^subject\b/i.test(text)
    || /^a \d+-second video\.?$/.test(text)
    || /^[{}[\]]$/.test(text)
    || /^https?:\/\//i.test(text)
    || /^画像のアスペクト比/i.test(text)
    || /^image(?:s)? aspect ratio/i.test(text)
    || /^(?:higgsfieldsora2|sora2|kling|grok|seedance|nanobanana|nano-banana(?:-pro)?)$/i.test(familyToken)
    || /^#[\w-]+$/i.test(String(value ?? '').trim());
}

function looksUrlLike(value) {
  return /^[^\p{L}\p{N}]*https?:\/\//iu.test(String(value ?? '').trim());
}

function looksCoordinateOnly(value) {
  return /(緯度|経度|latitude|longitude)/i.test(String(value ?? '').trim());
}

function looksNumericArtifact(token) {
  return /^\d{5,}$/.test(token) || /^\d{2,}(?:-\d{2,}){2,}$/.test(token);
}

function looksUrlArtifact(token) {
  return /^(?:t-co|x-com|https?|www)(?:-|$)/.test(token) || /(?:status-\d{5,})/.test(token);
}

function looksCoordinateToken(token) {
  return /^-?\d{2,}(?:-\d{2,}){2,}$/.test(token);
}

function looksDimensionToken(token) {
  return /^(?:width|height|aspect|ratio|resolution|size|type|px)$/.test(token) || /^\d{3,4}px$/.test(token) || /^\d+x\d+$/i.test(token);
}

function firstPromptChunk(value) { return informativePromptLines(value, 6).join(' '); }
function firstNonEmptyLine(value) { return String(value ?? '').split(/\r?\n/).map((line) => line.trim()).find(Boolean) ?? ''; }
function normalizePromptBody(value) { return String(value ?? '').replace(/\r/g, '').replace(/[ \t]+/g, ' ').replace(/\n{2,}/g, '\n').trim().toLowerCase(); }
function normalizeForMatching(value) { return String(value ?? '').normalize('NFKC').toLowerCase().replace(/[“”"']/g, ' ').replace(/[。、，！!？?：:；;（）()\[\]{}<>「」『』【】]/g, ' ').replace(/\s+/g, ' ').trim(); }
function extractAsciiTokens(value) { return (normalizeForMatching(value).match(/[a-z0-9][a-z0-9.+/-]*/g) ?? []).map((token) => token.replace(/\.js$/g, 'js').replace(/\//g, '-').replace(/\./g, '-').replace(/\+/g, '').replace(/^-+|-+$/g, '')).filter((token) => token.length >= 3 && !STOPWORDS.has(token) && !looksDimensionToken(token)); }
function extractTemplateIdTokens(value) { return uniqueStrings([...(String(value ?? '').matchAll(/(?:ai-template\/ai-template\/|ai-template\/)(\d{6,})/gi))].map((match) => `template-${match[1]}`)); }
function extractVersionToken(value) { const match = normalizeForMatching(value).match(/\bv(?:er)?\s*([0-9]+(?:\.[0-9]+)?)\b/); return match ? `v${match[1]}` : ''; }
function extractPartToken(value) { const match = normalizeForMatching(value).match(/(?:part|episode|ep)\s*([0-9]+)/); if (match) return `part-${match[1]}`; const circled = String(value).match(/[❶❷❸❹❺❻❼❽❾❿]/); if (circled) return `part-${'❶❷❸❹❺❻❼❽❾❿'.indexOf(circled[0]) + 1}`; return ''; }
function scoreTitle(value) { const text = String(value ?? ''); return text.length + (/[.…]{1,3}$/.test(text) ? -20 : 0); }
function confidenceRank(value) { if (String(value).toLowerCase() === 'high') return 3; if (String(value).toLowerCase() === 'medium') return 2; if (String(value).toLowerCase() === 'low') return 1; return Number(value) || 0; }
function defaultIntent(categoryPath) { const root = normalizeCategoryPath(categoryPath).split('/')[0]; return ({ creative: 'creative-prompt', dev: 'developer-prompt', docs: 'documentation-prompt', methodology: 'workflow-prompt', presentation: 'presentation-design', writing: 'writing-assistance' })[root] ?? 'prompt-catalog-entry'; }
function fallbackStem(categoryPath, primaryId) { return `${path.posix.basename(normalizeCategoryPath(categoryPath))}-${String(primaryId ?? '').slice(-6)}`; }
function truncateText(value, maxLength) { const text = String(value ?? '').trim(); return text.length <= maxLength ? text : `${text.slice(0, maxLength - 1).trimEnd()}…`; }
function uniqueTokens(values) { return [...new Set(values.map((item) => String(item ?? '').trim().replace(/[^a-z0-9-]+/g, '-').replace(/-+/g, '-').replace(/^-|-$/g, '')).filter(Boolean))]; }
function uniqueStrings(values) { return [...new Set(values.filter(Boolean).map((item) => String(item).trim()).filter(Boolean))]; }
function groupBy(items, getKey) { const map = new Map(); for (const item of items) { const key = getKey(item); if (!map.has(key)) map.set(key, []); map.get(key).push(item); } return map; }
function dedupeByPath(items) { const map = new Map(); for (const item of items) map.set(item.absPath, item); return [...map.values()]; }
function yamlScalar(value) { return JSON.stringify(String(value ?? '')); }
function normalizeSlash(value) { return value.replace(/\\/g, '/'); }
function stripQuotes(value) { const trimmed = String(value ?? '').trim(); return (trimmed.startsWith('"') && trimmed.endsWith('"')) || (trimmed.startsWith("'") && trimmed.endsWith("'")) ? trimmed.slice(1, -1) : trimmed; }
function ensureDotSlash(value) { return !value ? './' : value.startsWith('.') ? value : `./${value}`; }
function buildTextFence(text) {
  const body = String(text ?? '').trim();
  if (body.includes('~~~')) return `\`\`\`\`text\n${body}\n\`\`\`\``;
  return `~~~text\n${body}\n~~~`;
}
function escapeDisplayText(value) {
  return String(value ?? '')
    .replace(/\r?\n/g, ' ')
    .replace(/\{/g, '&#123;')
    .replace(/\}/g, '&#125;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .trim();
}
function humanizeDirName(name) { return String(name ?? '').split('-').filter(Boolean).map((part) => part.charAt(0).toUpperCase() + part.slice(1)).join(' '); }
function escapeRegExp(value) { return value.replace(/[.*+?^${}()|[\]\\]/g, '\\$&'); }
function formatCompactDate(value) { if (!value) return ''; return new Intl.DateTimeFormat('en-CA', { timeZone: 'Asia/Tokyo', year: 'numeric', month: '2-digit', day: '2-digit' }).format(new Date(value)).replace(/-/g, ''); }
function formatJst(value) { if (!value) return 'unknown'; return new Intl.DateTimeFormat('ja-JP', { timeZone: 'Asia/Tokyo', year: 'numeric', month: '2-digit', day: '2-digit', hour: '2-digit', minute: '2-digit', second: '2-digit', hour12: false }).format(new Date(value)).replace(/\//g, '-').replace(',', '') + ' JST'; }
