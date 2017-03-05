FROM node:6

# Set environment variables
ENV APIENDPOINT=http://informationcart.eastus2.cloudapp.azure.com:6500/api/

RUN npm install -g gulp
RUN npm install -g typings
RUN npm install -g npm3

# Create app directory
RUN mkdir -p /app


# Bundle app source
COPY . /app
WORKDIR /app

RUN npm install
RUN npm build

EXPOSE 5000
CMD [ "npm", "start" ]
