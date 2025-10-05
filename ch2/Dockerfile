# Stage 1: Build react app
FROM --platform=$BUILDPLATFORM node:20 AS build
WORKDIR /app
COPY package*.json  ./
RUN npm install
COPY . .
RUN npm run build

# Stage 2: Serve app with nginx
FROM nginx:alpine AS final
COPY --from=build /app/dist /usr/share/nginx/html
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]