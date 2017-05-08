FROM node:boron

RUN mkdir -p /var/www
WORKDIR /var/www

COPY package.json /var/www/
RUN npm install
COPY . /var/www/
RUN npm run build

EXPOSE 8080
CMD ["npm", "start"]
