FROM node:14-alpine

WORKDIR /usr/src/app

COPY package.json .

COPY yarn.lock .

RUN yarn install

RUN yarn global add nodemon

RUN yarn global add concurrently

RUN yarn global add typescript

COPY . .

EXPOSE 4000