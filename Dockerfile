# Use an official Node.js runtime as a parent image
FROM node:18

# Set the working directory in the container
WORKDIR /app

# Copy package.json and package-lock.json to the working directory
COPY package*.json ./

# Install app dependencies
RUN npm install

# Copy the rest of your application code
COPY . .

# Install PM2 globally
RUN npm install -g pm2

# Expose a port your app will listen on
EXPOSE 4000

# Start your Node.js application using PM2 with your ecosystem.config.js file
CMD ["pm2-runtime", "start", "ecosystem.config.js --env dev"]
