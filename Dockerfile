# FROM ubuntu:latest
# WORKDIR /app
# COPY . .
# RUN apt update
# RUN apt install nodejs -y
# RUN apt install npm -y
# RUN npm install
# ENV PORT 8000
# EXPOSE 8000
# CMD ["npm","start"]


FROM --platform=linux/amd64 node:alpine3.17
WORKDIR /app
COPY . .
RUN apk add --update npm
RUN npm install
ENV PORT 8000
EXPOSE 8000
CMD ["npm","start"]

