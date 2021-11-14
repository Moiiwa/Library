# Library

### User documentation

#### Description

This is the Library management application whose goal is to make it easier for users to keep and exchange books
 
#### Installation

You need to install frontend and backend part to obtain a working project.

Frontend is written in React.js

```
cd front  

npm install  

npm npm start  
```

#### User manual

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
