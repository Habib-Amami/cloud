# Stage 1: Build
FROM node:24-alpine AS builder

WORKDIR /app

# Copier package.json
COPY package*.json ./
RUN npm install

# Copier le code et builder
COPY . .

# Build argument pour l'URL de l'API
ARG VITE_API_URL
ENV VITE_API_URL=$VITE_API_URL

RUN npm run build

# Stage 2: Production
FROM node:24-alpine

WORKDIR /app

# Installer serve
RUN npm install -g serve

# Copier le build depuis le stage précédent
COPY --from=builder /app/dist ./dist

# Exposer le port
EXPOSE 80

# Servir l'application
CMD ["serve", "-s", "dist", "-l", "80"]