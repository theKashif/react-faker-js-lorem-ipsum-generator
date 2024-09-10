# Use the official Node.js 18 image from the Alpine Linux distribution
ARG NODE_VERSION=18
FROM node:${NODE_VERSION}-alpine

# Set environment to development by default
ENV NODE_ENV=development

ENV CHOKIDAR_USEPOLLING=true


# Set the working directory for your app code
WORKDIR /usr/src/app

# Copy the package.json and package-lock.json first (to leverage Docker cache)
COPY package*.json ./

# Install dependencies as the root user
RUN npm install

# Copy the rest of the app's source code to the container
COPY . .

# Create node_modules/.cache directory and give ownership to the non-root user (node)
RUN mkdir -p /usr/src/app/node_modules/.cache && \
    chown -R node:node /usr/src/app

# Switch to non-root user 'node'
USER node

# Expose the port that your application will listen on
EXPOSE 3000

# Start the app
CMD ["npm", "run", "start"]
