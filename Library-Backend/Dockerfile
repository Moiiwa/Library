FROM openjdk:8-jdk-alpine
COPY target/Library-Backend-1.0-SNAPSHOT.jar app.jar
EXPOSE 8000/tcp
EXPOSE 8000/udp
ENTRYPOINT ["java","-jar","/app.jar"]
