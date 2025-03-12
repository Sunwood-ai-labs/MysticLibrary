import express from 'express';
import cors from 'cors';
import { fileURLToPath } from 'url';
import { dirname } from 'path';
import { createServer as createViteServer } from 'vite';
import swaggerUi from 'swagger-ui-express';
import { swaggerSpec, swaggerUiOptions } from './src/api/swagger.js';

// Routes
import promptsRouter from './src/api/routes/prompts.js';
import categoriesRouter from './src/api/routes/categories.js';
import tagsRouter from './src/api/routes/tags.js';

const app = express();
const port = 5173;

// Get __dirname equivalent in ES modules
const __dirname = dirname(fileURLToPath(import.meta.url));

// ミドルウェアの設定
app.use(cors());
app.use(express.json());

// APIルートの設定
app.use('/v1/prompts', promptsRouter);
app.use('/v1/categories', categoriesRouter);
app.use('/v1/tags', tagsRouter);

// Viteサーバーの設定と起動
async function startServer() {
  try {
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: 'spa',
    });

    // Swagger UIのセットアップ
    app.use(['/docs', '/v1/docs'], swaggerUi.serve);
    app.get(['/docs', '/v1/docs'], swaggerUi.setup(swaggerSpec, swaggerUiOptions));

    // Use Vite's connect instance as middleware
    app.use(vite.middlewares);

    // Handle client-side routing
    app.use('*', async (req, res, next) => {
      const url = req.originalUrl;
      try {
        // Always send index.html for any unmatched routes
        let template = await vite.transformIndexHtml(url, '');
        res.status(200).set({ 'Content-Type': 'text/html' }).end(template);
      } catch (e) {
        next(e);
      }
    });

    app.listen(port, '0.0.0.0', () => {
      console.log(`Server is running at http://localhost:${port}`);
      console.log('API documentation: http://localhost:5173/v1/docs');
      console.log('API endpoints:');
      console.log('  - GET /v1/prompts/list');
      console.log('  - POST /v1/prompts/create');
      console.log('  - GET /v1/prompts/:id');
      console.log('  - PUT /v1/prompts/:id/update');
      console.log('  - GET /v1/categories');
      console.log('  - GET /v1/tags');
    });
  } catch (error) {
    console.error('Error starting server:', error);
    process.exit(1);
  }
}

startServer();