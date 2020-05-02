FROM node:12

WORKDIR /usr/src/app

COPY package.json .

COPY tsconfig.json .

COPY yarn.lock .

RUN yarn install

RUN yarn global add nodemon

RUN yarn global add typescript

COPY . .

EXPOSE 4000