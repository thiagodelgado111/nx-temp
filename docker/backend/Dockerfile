FROM node:alpine AS builder
WORKDIR /app
COPY . .
RUN npm ci
RUN npm run build --prod backend
RUN npm prune --production

FROM node:alpine as backend
ARG PORT=3000
ENV PORT=$PORT

WORKDIR /app
COPY --from=builder /app/node_modules /app/node_modules
COPY --from=builder /app/dist/apps/backend .
ENTRYPOINT ["node", "main.js"]

