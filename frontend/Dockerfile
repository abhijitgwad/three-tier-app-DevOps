FROM node:18-alpine

# ENV REACT_APP_BASE_URL = http://localhost:8080/

RUN mkdir -p /home/app

WORKDIR /home/app

COPY public/ /home/app/public
COPY src/ /home/app/src
COPY package.json /home/app

RUN npm install


CMD ["npm","start"]