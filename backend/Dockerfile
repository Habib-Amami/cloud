FROM node:18-alpine

WORKDIR /app

# Copier package.json et installer dépendances
COPY package*.json ./
RUN npm install --production

# Copier le code source
COPY . .

# Exposer le port
EXPOSE 4000

# Démarrer l'application
CMD ["node", "server.js"]