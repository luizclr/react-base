# pull official base image
FROM node:18.12-alpine

# set working directory
WORKDIR /app

# install app dependencies
COPY package.json ./
COPY yarn.lock ./
RUN yarn install

# add app
COPY . ./

# start app
CMD ["yarn", "dev"]    