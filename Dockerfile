# Build Stage 1

FROM node:25-alpine

WORKDIR /

COPY .output/ ./

# Change the port and host
ENV PORT=3000
ENV HOST=0.0.0.0

EXPOSE 3000

CMD ["node", "/server/index.mjs"]
