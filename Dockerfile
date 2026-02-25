# Build Stage 1

FROM node:25-alpine AS build
WORKDIR /

# Copy package.json and your lockfile, here we add pnpm-lock.yaml for illustration
COPY package.json package-lock.json ./

# Install dependencies
RUN npm install

# Copy the entire project
COPY . ./

# Build the project
RUN npm run build

# Build Stage 2

FROM node:25-alpine
WORKDIR /

# Only `.output` folder is needed from the build stage
COPY --from=build /.output/ ./

# Change the port and host
ENV PORT=80
ENV HOST=0.0.0.0

EXPOSE 80

CMD ["node", "/server/index.mjs"]
