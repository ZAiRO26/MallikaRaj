FROM node:20-alpine

# Set working directory
WORKDIR /app

# Copy package files first for better caching
COPY backend/package*.json ./

# Install dependencies
RUN npm install

# Copy all backend files
COPY backend/ ./

# Expose port
EXPOSE 5000

# Start the application
CMD ["npm", "start"] 