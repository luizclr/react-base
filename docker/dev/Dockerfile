# pull official base image
FROM node:22.14-alpine

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