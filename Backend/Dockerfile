FROM node

ENV MONGO_DB_USERNAME=admin \
    MONGO_DB_PWD=password \
    MONGO_URL=mongodb://admin:password@mongodb/admin

RUN mkdir -p /home/app

COPY . /home/app

CMD ["node","/home/app/server.js"]