FROM node:alpine

WORKDIR /app

ADD package.json package-lock.json ./

RUN npm install

ADD public ./public

CMD ["npm", "start"]