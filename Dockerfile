FROM node

# Set the working directory to /app
RUN mkdir /app
WORKDIR /app

# Copy the current directory contents into the container at /app
COPY package.json /app/
COPY package-lock.json /app
RUN npm install

#Install any needed packages specified in requirements.txt
RUN npm i @angular/cli
COPY . /app
    
EXPOSE 4200

CMD ["npm", "start"]
# CMD ng serve --host 0.0.0.0
