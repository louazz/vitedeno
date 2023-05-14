FROM node:20-alpine3.16

WORKDIR /react-vite-app

EXPOSE 3002

COPY package.json package-lock.json ./

RUN npm install --silent --force

RUN npm i -g yarn --force

RUN yarn run build 

COPY . ./

CMD ["npm", "run", "preview"]