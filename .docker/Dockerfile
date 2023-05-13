ARG ARCH=""

FROM ${ARCH}httpd:2.4

COPY src /usr/local/apache2/htdocs/

COPY .docker/httpd.conf /root/httpd.conf
RUN cat /root/httpd.conf >> /usr/local/apache2/conf/httpd.conf

STOPSIGNAL SIGINT

HEALTHCHECK --interval=30s --timeout=30s --start-period=5s \
    --retries=3 CMD [ "curl" , "-f", "localhost:80", "||", "exit", "1"]