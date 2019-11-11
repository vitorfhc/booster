FROM node

WORKDIR /app

COPY package*.json .

RUN yarn install --dev

COPY . .

EXPOSE 3000

CMD ["yarn", "dev"]
