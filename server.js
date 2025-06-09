import express from 'express';
import { createServer as createViteServer } from 'vite';

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
        let template = await vite.transformIndexHtml(url, '');
        res.status(200).set({ 'Content-Type': 'text/html' }).end(template);
      } catch (e) {
        next(e);
      }
    });

    app.listen(port, '0.0.0.0', () => {
      console.log(`SPA server is running at http://localhost:${port}`);
      console.log(`API endpoints available at http://localhost:${port}/api/`);
    });
  } catch (error) {
    console.error('Error starting server:', error);
    process.exit(1);
  }
}

startServer();
