FROM node:20-alpine
WORKDIR /app
COPY .output /app/.output
EXPOSE 3000
CMD ["node", ".output/server/index.mjs"]
