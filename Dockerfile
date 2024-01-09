FROM node:20
WORKDIR /usr/src/plants-psql-api
COPY package*.json ./
RUN npm install
COPY . .
RUN npm run build
EXPOSE 3000
EXPOSE 4000
CMD [ "npm", "start" ]