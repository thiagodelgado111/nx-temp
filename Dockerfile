FROM node:alpine AS builder
WORKDIR /app
COPY . .
RUN npm ci
RUN npm run build --prod
RUN npm prune --production


FROM node:alpine as backend
ARG PORT=3000
ENV PORT=$PORT

WORKDIR /app
COPY --from=builder /app/node_modules /app/node_modules
COPY --from=builder /app/dist/apps/backend .
ENTRYPOINT ["node", "main.js"]

FROM nginx:alpine AS frontend
WORKDIR /usr/share/nginx/html
COPY --from=builder /app/dist/apps/frontend .