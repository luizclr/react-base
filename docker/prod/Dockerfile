FROM node:18.12-alpine as build
WORKDIR /app
ENV NODE_ENV production
COPY package.json ./
COPY yarn.lock ./
RUN yarn install --frozen-lockfile
COPY . ./
RUN yarn build

FROM nginx:1.25.0-alpine
COPY ./docker/prod/nginx.conf /etc/nginx/conf.d/default.conf
COPY --from=build /app/dist /usr/share/nginx/html 
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
