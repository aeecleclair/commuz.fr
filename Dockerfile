FROM node:22-slim AS builder

WORKDIR /app

# Copy package files first for better layer caching
COPY package*.json ./

# Install dependencies
RUN npm install

COPY public ./public

# Copy project files
COPY . .

# Build Nuxt app
RUN npm run build


FROM node:22-slim AS runner

WORKDIR /app

ENV NODE_ENV=production

# Copy Nitro output only
COPY --from=builder /app/.output ./.output

# Expose Nuxt/Nitro port
EXPOSE 3000

# Start server
CMD ["node", ".output/server/index.mjs"]