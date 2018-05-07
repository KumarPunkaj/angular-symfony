FROM node:9

ADD . /var/www
WORKDIR /var/www

RUN npm install -g @angular/cli

EXPOSE 4200
CMD ["ng", "serve"]
