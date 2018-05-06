FROM php:7.2-fpm

ADD . /var/www
WORKDIR /var/www

RUN usermod -u 1000 www-data
RUN mkdir -p /var/www/var/cache
RUN mkdir -p /var/www/var/logs
RUN chmod -R 777 /var/www/var/cache
RUN chmod -R 777 /var/www/var/logs

RUN apt-get update

## composer install
RUN apt-get install -y --no-install-recommends \
        git \
        zip \
        unzip \
    && curl --silent --show-error https://getcomposer.org/installer | php \
    && mv composer.phar /usr/local/bin

RUN apt-get install -y --no-install-recommends \
        libfreetype6-dev \
        libjpeg62-turbo-dev \
        libmcrypt-dev \
        libpng-dev \
        mcrypt \
    && pecl install mcrypt-1.0.1 \
    && docker-php-ext-enable mcrypt \
    && docker-php-ext-install -j$(nproc) iconv zip gd pdo_mysql \
    && docker-php-ext-configure gd --with-freetype-dir=/usr/include/ --with-jpeg-dir=/usr/include/

EXPOSE 9000
CMD ["php-fpm"]
