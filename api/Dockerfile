FROM node:13.12.0-alpine

WORKDIR /user/src/app

COPY package*.json ./

RUN npm install

COPY . .

EXPOSE 3555

CMD ["node", "run start"]