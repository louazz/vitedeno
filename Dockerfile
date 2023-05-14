FROM node:20-alpine3.16

WORKDIR /react-vite-app

EXPOSE 3000

COPY package.json package-lock.json ./

RUN npm install --silent --force


COPY . ./

CMD ["npm", "run", "dev" ,"-- --host"]