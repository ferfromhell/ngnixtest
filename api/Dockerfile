FROM node:latest

WORKDIR /api
COPY package*.json ./
RUN npm install
COPY . ./
CMD node server.js
EXPOSE 6767