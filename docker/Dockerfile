FROM node:18

WORKDIR /BACKEND


ENV MONGO_DB_USERNAME=admin \
    MONGO_DB_PWD=qwerty


COPY package*.json ./
RUN npm install

COPY . .

CMD ["node", "index.js"] 