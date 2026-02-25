# Build Stage 1

FROM node:25-alpine
WORKDIR /

COPY /.output/ ./

# Change the port and host
ENV PORT=80
ENV HOST=0.0.0.0

EXPOSE 80

CMD ["node", "/server/index.mjs"]
