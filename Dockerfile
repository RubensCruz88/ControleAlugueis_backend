FROM node

WORKDIR /usr/app

COPY package*.json ./

RUN npm i

copy . .

EXPOSE 3333 9229

CMD ["npm","run","dev"]