FROM node:13.12.0-alpine
WORKDIR /app

COPY ./package.json /app/package.json
RUN npm install

COPY . /app

EXPOSE 8080
CMD ["npm", "start"]