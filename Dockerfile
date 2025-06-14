# Ubuntu系（Debianベース）のNode.js公式イメージを使用
FROM node:20

WORKDIR /app

# 依存関係インストールのためにpackageファイルを先にコピー
COPY package.json package-lock.json ./

RUN npm ci

# 全ファイルをコピー
COPY . .

# ビルド
RUN npm run build

# ポート（Vite previewのデフォルト5173）
EXPOSE 5173

# サーバ起動
CMD ["npm", "run", "preview"]