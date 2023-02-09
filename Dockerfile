FROM node:16
WORKDIR /usr/app 
COPY ./ /usr/app
RUN npm install 
RUN npm install sass

EXPOSE 3010 
CMD ["node", "index.js"]