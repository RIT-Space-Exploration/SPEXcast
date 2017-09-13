FROM node:7.8.0

# Create App Directory
RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app

# Install app dependencies
COPY package.json /usr/src/app/
RUN npm install && cd react/ && npm install && npm run build && cd ..
RUN cd ..
# Bundle app source
COPY . /usr/src/app

EXPOSE 8080

CMD ["npm", "start"]
