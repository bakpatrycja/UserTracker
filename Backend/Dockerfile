FROM node:14.15-alpine

WORKDIR /app
COPY package*.json ./
RUN npm install

RUN mkdir ./src
COPY ./src ./src

CMD [ "npm", "prestart" ]
CMD [ "npm", "start" ]