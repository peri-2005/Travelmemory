FROM node:25-alpine3.22
#  /app is the destination folder where the image stores, source is where the docker file exists
WORKDIR /app
COPY . .
RUN npm install
#ENV port=3001
#ENV MONGO_URI=""
EXPOSE 3001
CMD [ "node", "index.js" ]