FROM node:12-alpine
WORKDIR /usr/app
COPY . .
RUN yarn
EXPOSE 3000
CMD ["yarn", "start"]