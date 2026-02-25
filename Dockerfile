FROM nginx:alpine

# Delete default nginx configuration
RUN rm -rf /usr/share/nginx/html/*

COPY .output/public /usr/share/nginx/html

COPY nginx.conf /etc/nginx/conf.d/default.conf

EXPOSE 3000

CMD ["nginx", "-g", "daemon off;"]