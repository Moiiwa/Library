![backend workflow status](https://github.com/Moiiwa/Library/actions/workflows/main.yml/badge.svg)
![frontend workflow status](https://github.com/Moiiwa/Library/actions/workflows/front/badge.svg)
# library

## User documentation

#### Description

This is the library management application whose goal is to make it easier for users to keep and exchange books
 
Features of this web application:

1. User can borrow book
2. User can add book
3. User can sell book
4. User can rate book

#### Web site
To check the web site go to http://34.217.9.107:8080
#### Manual installation

You need to install frontend and backend part to obtain a working project.

Firstly clone this repo

```git clone https://github.com/Moiiwa/library.git```

Frontend is written in React.js

```
cd front  

npm install --legacy-peer-deps 

npm npm start  
```

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

## Process organisation
#### Team
- Daniyar Galimzhanov - frontend
- Anna Gorb - frontend
- Mikhail Gudkov - backend

#### Branching policy
Developer Branch Workflow - all work in progress is in different branches, but then will be merged to main

#### Tools
- Backend - Spring
- Frontend - React
- CI - Docker, AWS
