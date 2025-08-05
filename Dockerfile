FROM node:20-alpine

# Set working directory to /app
WORKDIR /app

# Copy backend package files
COPY backend/package*.json ./

# Install dependencies
RUN npm install

# Copy backend source code
COPY backend/ ./

# Expose port
EXPOSE 5000

# Start the application directly with node
CMD ["node", "index.js"] 