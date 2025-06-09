import express from 'express';
import { createServer as createViteServer } from 'vite';
import { readFileSync } from 'fs';

const app = express();
const port = 5173;

// Viteサーバーの設定と起動
async function startServer() {
  try {
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: 'spa',
    });

    // Viteのミドルウェア（APIルートの後に配置）
    app.use(vite.middlewares);

    // クライアントサイドルーティング
    app.use('*', async (req, res, next) => {
      const url = req.originalUrl;
      
      // APIルートはスキップ
      if (url.startsWith('/api/')) {
        return next();
      }
      
      try {
        // index.htmlの内容を読み込んでViteに渡す
        let html = readFileSync('index.html', 'utf-8');
        let template = await vite.transformIndexHtml(url, html);
        res.status(200).set({ 'Content-Type': 'text/html' }).end(template);
      } catch (e) {
        next(e);
      }
    });

    app.listen(port, '0.0.0.0', () => {
      console.log(`SPA server is running at http://localhost:${port}/MysticLibrary/`);
      // APIエンドポイントは静的サイト化により廃止済み
    });
  } catch (error) {
    console.error('Error starting server:', error);
    process.exit(1);
  }
}

startServer();
