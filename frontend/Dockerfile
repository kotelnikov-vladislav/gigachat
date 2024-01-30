FROM node:alpine
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
RUN npm run build
RUN mv dist/assets public/assets
RUN mv dist/index.html public/index.html
RUN npm install -g serve
CMD ["serve", "public", "-p", "80"]
