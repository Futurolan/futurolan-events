FROM node:alpine

EXPOSE 5000

WORKDIR /usr/src/client
COPY . .
RUN npm install
RUN npm run-script build
RUN npm install -g serve


CMD serve -s build
