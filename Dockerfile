FROM node:25-alpine AS build
WORKDIR /

COPY package*.json .
RUN npm install

COPY . .

# Compiler l'application
RUN npm run generate

# Étape 2 : Serveur Nginx pour héberger l'app
FROM nginx:alpine

# Delete default nginx configuration
RUN rm -rf /usr/share/nginx/html/*

COPY --from=build .output/public /usr/share/nginx/html

COPY nginx.conf /etc/nginx/conf.d/default.conf

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]