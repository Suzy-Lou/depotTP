FROM node:18.20-alpine

WORKDIR /usr/src/app

COPY package*.json ./

RUN npm install

COPY . . 

EXPOSE 4218

CMD ["node","app.js"]



