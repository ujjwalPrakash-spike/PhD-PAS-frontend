FROM node:18-alpine

ENV PORT=80

RUN apk add --no-cache bash

WORKDIR /home/ras

COPY package.json package-lock.json ./
RUN npm install

COPY . .
RUN npm run build

EXPOSE 80

CMD ["npm", "start"]


