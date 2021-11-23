## Manual installation

#### Frontend

You need to install frontend and backend part to obtain a working project.

Firstly clone this repo

```git clone https://github.com/Moiiwa/library.git```

Frontend is written in React.js

```
cd front  

npm install --legacy-peer-deps 

npm start  
```

In case you want to run frontend in Docker, you have to use the next commands

```
cd frontend

docker build -t lib-front .

docker run -p 8000:8000 lib-front:latest                
```
#### Backend

Backend is written with Spring

```
cd library-Backend 

mvn clean install packages  

cd target 

java -jar <JAR_NAME> 
```
In case you want to run backend in Docker, you have to use the next commands

```
cd library-Backend 

mvn clean install package -DskipTests 

docker build -t moiwa/library_server .

docker-compose up                     
```