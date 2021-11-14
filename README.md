# Library

### User documentation

#### Description

This is the Library management application whose goal is to make it easier for users to keep and exchange books
 
Features of this web application:

1. User can borrow book
2. User can add book
3. User can sell book
4. User can rate book


#### Installation

You need to install frontend and backend part to obtain a working project.

Firstly clone this repo

```git clone https://github.com/Moiiwa/Library.git```

Frontend is written in React.js

```
cd front  

npm install --legacy-peer-deps 

npm npm start  
```

Backend is written with Spring

```
cd Library-Backend 

mvn clean install packages  

cd target 

java -jar <JAR_NAME> 
```

#### User manual

You need to write the book's isbn in 111-1-1111-1111-1 format and click find button  

![book input](front/screens/screen_manual_input_book.png)

If the format of isbn is correct and such book is found you will get following page

![book_input](front/screens/screen_manual_book_page.png)

In case of the following message please check that your isbn is written in the correct format

![input error](front/screens/screen_manual_error_input.png)


## Team
- Daniyar Galimzhanov
- Anna Gorb
- Mikhail Gudkov

## Branching policy
Developer Branch Workflow - all work in progress is in different branches, buts then will be merged to main

## Tools
- Backend - Spring
- Frontend - React
- CI - Docker, GitHub Actions, AWS

## Product Backlog

### User stories -> Tasks

User story number | User story | Task |
| --- | --- | --- | 
[#2](https://github.com/Moiiwa/Library/issues/2) | As a book owner I want to be able to share books | Add to book share status check ability | 
[#3](https://github.com/Moiiwa/Library/issues/3) | As a book owner I want to be able to add new books | Create the book card | 
[#4](https://github.com/Moiiwa/Library/issues/4) | As a book owner I want perform as few steps as possible to add new book | Add ability to identify book with Isbn | 
[#5](https://github.com/Moiiwa/Library/issues/5) | As a client I want to be able to borrow books | Create an ability to notify the owner about the borrow wish | 
[#6](https://github.com/Moiiwa/Library/issues/6) | As a client I want to be reminded when I should return book to owner | Create an ability to notify the client about the return day | 
[#7](https://github.com/Moiiwa/Library/issues/7) | As a book owner I want to get feedback about my books from other users | Add an ability to left feedback | 
[#8](https://github.com/Moiiwa/Library/issues/8) | As a book owner I want to be able to sell books | Add to book sell status check ability | 
[#9](https://github.com/Moiiwa/Library/issues/9) | As a user I want to be able to send and approve friend requests | Add users authentification and authorization modules | 
[#9](https://github.com/Moiiwa/Library/issues/9) | | Add ability to add friends | 

### Sprints -> Tasks

Sprints | Tasks |
| --- | --- | 
Sprint 1 |  | 
| | Add ability to identify book with Isbn | 
| | Create the book card| 
Sprint 2 |  | 
| | Add to book share status check ability | 
| | Add to book sell status check ability | 
Sprint 3 |  | 
| | Add users authentification and authorization modules | 
Sprint 4 |  | 
| | Create an ability to notify the owner about the borrow wish | 
| | Create an ability to notify the client about the return day |
| | Add an ability to left feedback |
Sprint 5 |  | 
| | Add ability to add friends | 

### Sprint 1

Task | Small tasks | Acceptance tests |
| --- | --- | --- |
Sprint 1 |  |  |
| Add ability to identify book with Isbn | Create the Isbn search field in frontend | Tests coverage at least 80% |
|  | Connect the scaner with the database of Isbns | It detects 20% of example books | 
| Create the book card | Save information about the book in db | All CRD operations work |
|  | Display info from db on the book page | Title and Author should be filled |
