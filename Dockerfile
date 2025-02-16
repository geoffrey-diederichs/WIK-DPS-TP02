FROM node:18-alpine
WORKDIR /app
COPY package*.json ./
RUN npm ci
COPY . .
RUN npm install --no-save typescript
RUN npx tsc
RUN npm prune --production
EXPOSE 3000
CMD ["npm", "start"]
