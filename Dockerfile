FROM node

WORKDIR /app

COPY package.json .

RUN yarn

COPY . /app/

CMD ["node", "src/index.js"]
