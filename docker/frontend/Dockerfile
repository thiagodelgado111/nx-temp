FROM node:alpine AS builder
WORKDIR /app
COPY . .
RUN npm ci
RUN npm run build --prod frontend
RUN npm prune --production

FROM nginx:alpine AS frontend
WORKDIR /usr/share/nginx/html
COPY --from=builder /app/dist/apps/frontend .
