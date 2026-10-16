# Etapa 1: Compilación de React
FROM node:20-alpine AS build
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
RUN npm run build

# Etapa 2: Servidor de producción con Nginx
FROM nginx:1.27-alpine
COPY --from=build /app/dist /usr/share/nginx/html
# Copia tu foto de perfil al directorio del servidor Nginx
COPY --from=build /app/public/images /usr/share/nginx/html/images

# Modificar la configuración interna de Nginx para cambiar del puerto 80 al puerto 3000 exigido
RUN sed -i 's/listen       80;/listen       3000;/g' /etc/nginx/conf.d/default.conf

EXPOSE 3000
CMD ["nginx", "-g", "daemon off;"]
