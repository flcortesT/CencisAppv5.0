# Autor: Flavio Cortés
# Fecha: Nov. 30 2023
# Comandos que permite generar la imagen de cencisapp aplication
FROM node:18.18.2 AS build
WORKDIR /usr/src/app

COPY package*.json ./
RUN npm cache clean --force && npm install --legacy-peer-deps

COPY . .
RUN npm run build --prod --omit=dev

FROM nginx:latest AS ngi
COPY --from=build /usr/src/app/dist/fuse /usr/share/nginx/html
COPY nginx.conf /etc/nginx/conf.d/default.conf
EXPOSE 80
