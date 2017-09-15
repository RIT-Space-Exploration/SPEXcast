FROM node:7.8.0

# Create App Directory
RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app

# Bundle app source
COPY . /usr/src/app

RUN npm install \
    && cd react/ \
    && npm install \
    && npm run build \
    && cd .. 


EXPOSE 8080

CMD ["npm", "start"]
