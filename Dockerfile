# Build Stage

FROM node:alpine AS build-stage

WORKDIR /vue3-app

COPY package*.json ./

RUN npm install

COPY . .

RUN npm run build


# Production Build

FROM nginx:alpine AS production-stage

COPY --from=build-stage /vue3-app/dist /usr/share/nginx/html

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]



