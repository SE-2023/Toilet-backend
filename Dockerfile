FROM node:18.19.0-alpine

WORKDIR /app

COPY package.json ./
COPY tsconfig.json ./
COPY ./src ./src

RUN npm install 

RUN npm run build

COPY .env .

EXPOSE 3000

CMD node ./dist/app.js