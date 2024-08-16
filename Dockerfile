From node:18.20
WORKDIR /playlist
COPY package*.json ./
COPY . .
RUN npm install
RUN npm run build
EXPOSE 3000
CMD ["npm","start"]
