FROM --platform=linux/amd64 node:alpine3.17
WORKDIR /app
COPY . .
RUN apk add --update npm
RUN npm install
ENV PORT 3000
EXPOSE 3000
CMD ["npm","start"]

