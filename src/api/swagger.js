import swaggerJsdoc from 'swagger-jsdoc';

const swaggerOptions = {
  definition: {
    openapi: '3.0.0',
    info: {
      title: 'Mystic Library API',
      version: '1.0.0',
      description: 'AIプロンプトを管理・共有するためのAPI',
    },
    servers: [
      {
        url: '/v1',
        description: 'Current server',
      },
    ],
    components: {
      securitySchemes: {
        ApiKeyAuth: {
          type: 'apiKey',
          in: 'header',
          name: 'X-API-Key',
          description: 'APIキーを指定してください',
        },
      },
      schemas: {
        Prompt: {
          type: 'object',
          required: ['title', 'content'],
          properties: {
            title: {
              type: 'string',
              description: 'プロンプトのタイトル',
            },
            content: {
              type: 'string',
              description: 'プロンプトの内容',
            },
            description: {
              type: 'string',
              description: 'プロンプトの説明（任意）',
            },
            category_id: {
              type: 'string',
              description: 'カテゴリーID（任意）',
            },
            tag_ids: {
              type: 'array',
              items: {
                type: 'string',
              },
              description: 'タグIDのリスト（任意）',
            },
            is_published: {
              type: 'boolean',
              description: '公開するかどうか',
              default: true,
            },
          },
        },
      },
    },
    security: [
      {
        ApiKeyAuth: [],
      },
    ],
  },
  apis: ['./src/api/routes/*.js'],
};

export const swaggerSpec = swaggerJsdoc(swaggerOptions);

export const swaggerUiOptions = {
  explorer: true,
  swaggerOptions: {
    persistAuthorization: true,
  },
  customCss: '.swagger-ui .topbar { display: none }',
};