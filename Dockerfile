FROM node:latest

WORKDIR /app

COPY package.json yarn.lock ./

RUN yarn install

COPY next.config.js ./next.config.js

COPY jsconfig.json ./jsconfig.json

COPY src ./src

CMD ["yarn", "dev"]