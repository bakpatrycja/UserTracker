FROM node:16.10.0
RUN npm install -g npm@8.1.3

WORKDIR /frontend
COPY ./Frontend/package*.json ./
COPY ./Frontend/vite.config.js ./
COPY ./Frontend/index.html ./
COPY ./Frontend/public ./public
RUN mkdir ./src
COPY ./Frontend/src ./src
RUN npm install

CMD [ "npm", "start" ]