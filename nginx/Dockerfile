FROM nginx:alpine

RUN apk add --no-cache openssl

COPY nginx.conf /etc/nginx/nginx.conf
COPY generate-selfsigned-cert.sh /docker-entrypoint.d/generate-selfsigned-cert.sh
RUN chmod +x /docker-entrypoint.d/generate-selfsigned-cert.sh

VOLUME ["/etc/nginx/certs"]