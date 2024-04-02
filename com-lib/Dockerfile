FROM node:18.16.0-alpine

COPY . .

RUN npm install && npm cache clean --force

CMD [ "node", "app.js" ]