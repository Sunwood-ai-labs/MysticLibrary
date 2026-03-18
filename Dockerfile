FROM node:20-alpine AS build

WORKDIR /app

COPY package.json package-lock.json ./
RUN npm ci

COPY docs ./docs
RUN npm run docs:build

FROM nginx:1.27-alpine AS runtime

COPY nginx/default.conf /etc/nginx/conf.d/default.conf
COPY --from=build /app/docs/.vitepress/dist /usr/share/nginx/html

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]
