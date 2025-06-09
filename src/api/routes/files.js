import { Router } from 'express';
import { execSync } from 'child_process';
import path from 'path';

const router = Router();

/**
 * @swagger
 * /files/git-info:
 *   get:
 *     summary: ファイルのGit情報を取得
 *     parameters:
 *       - in: query
 *         name: path
 *         required: true
 *         schema:
 *           type: string
 *         description: ファイルパス
 *     responses:
 *       200:
 *         description: Git情報
 */
router.get('/git-info', async (req, res) => {
  try {
    const { path: filePath } = req.query;
    
    if (!filePath) {
      return res.status(400).json({ 
        error: { code: 'missing_path', message: 'ファイルパスが必要です' } 
      });
    }

    // プロジェクトのルートディレクトリを取得
    const projectRoot = process.cwd();
    
    // ファイルパスを正規化
    const normalizedPath = filePath.startsWith('/') ? filePath.slice(1) : filePath;
    const fullPath = path.join(projectRoot, normalizedPath);
    
    try {
      // gitコマンドでファイルの最終更新日時を取得
      const gitCommand = `git log -1 --format="%ci" -- "${normalizedPath}"`;
      const lastModified = execSync(gitCommand, { 
        cwd: projectRoot, 
        encoding: 'utf8' 
      }).trim();
      
      if (lastModified) {
        res.json({ 
          lastModified: new Date(lastModified).toISOString(),
          source: 'git'
        });
      } else {
        // gitログがない場合はファイルの作成日時を取得
        const fs = await import('fs');
        const stats = fs.statSync(fullPath);
        res.json({ 
          lastModified: stats.mtime.toISOString(),
          source: 'filesystem'
        });
      }
    } catch (gitError) {
      console.warn(`Git command failed for ${normalizedPath}:`, gitError.message);
      
      // gitコマンドが失敗した場合はファイルシステムから取得
      try {
        const fs = await import('fs');
        const stats = fs.statSync(fullPath);
        res.json({ 
          lastModified: stats.mtime.toISOString(),
          source: 'filesystem'
        });
      } catch (fsError) {
        console.error(`Filesystem access failed for ${fullPath}:`, fsError.message);
        res.status(404).json({ 
          error: { code: 'file_not_found', message: 'ファイルが見つかりません' } 
        });
      }
    }
  } catch (error) {
    console.error('Error in GET /files/git-info:', error);
    res.status(500).json({ 
      error: { code: 'server_error', message: 'サーバーエラーが発生しました' } 
    });
  }
});

/**
 * @swagger
 * /files/batch-git-info:
 *   post:
 *     summary: 複数ファイルのGit情報を一括取得
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - paths
 *             properties:
 *               paths:
 *                 type: array
 *                 items:
 *                   type: string
 *                 description: ファイルパスの配列
 *     responses:
 *       200:
 *         description: 複数ファイルのGit情報
 */
router.post('/batch-git-info', async (req, res) => {
  try {
    const { paths } = req.body;
    
    if (!paths || !Array.isArray(paths)) {
      return res.status(400).json({ 
        error: { code: 'invalid_paths', message: 'パスの配列が必要です' } 
      });
    }

    const projectRoot = process.cwd();
    const results = {};
    
    for (const filePath of paths) {
      try {
        const normalizedPath = filePath.startsWith('/') ? filePath.slice(1) : filePath;
        
        // gitコマンドでファイルの最終更新日時を取得
        const gitCommand = `git log -1 --format="%ci" -- "${normalizedPath}"`;
        const lastModified = execSync(gitCommand, { 
          cwd: projectRoot, 
          encoding: 'utf8' 
        }).trim();
        
        if (lastModified) {
          results[filePath] = {
            lastModified: new Date(lastModified).toISOString(),
            source: 'git'
          };
        } else {
          // gitログがない場合はファイルシステムから取得
          const fs = await import('fs');
          const fullPath = path.join(projectRoot, normalizedPath);
          const stats = fs.statSync(fullPath);
          results[filePath] = {
            lastModified: stats.mtime.toISOString(),
            source: 'filesystem'
          };
        }
      } catch (error) {
        console.warn(`Failed to get git info for ${filePath}:`, error.message);
        results[filePath] = {
          error: error.message,
          lastModified: new Date().toISOString(), // フォールバック
          source: 'fallback'
        };
      }
    }
    
    res.json(results);
  } catch (error) {
    console.error('Error in POST /files/batch-git-info:', error);
    res.status(500).json({ 
      error: { code: 'server_error', message: 'サーバーエラーが発生しました' } 
    });
  }
});

export default router;
