FROM node:18-alpine

RUN mkdir -p /home/app

WORKDIR /home/app

COPY public/ /home/app/public
COPY src/ /home/app/src
COPY package.json /home/app

RUN npm install


CMD ["npm","start"]