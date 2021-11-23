## Product Backlog

#### User stories -> Tasks

User story number | User story | Task | Status
| --- | --- | --- | --- |
[#2](https://github.com/Moiiwa/Library/issues/2) | As a book owner I want to be able to share books | Add to book share status check ability |  |
[#3](https://github.com/Moiiwa/Library/issues/3) | As a book owner I want to be able to add new books | Create the book card | Done |
[#4](https://github.com/Moiiwa/Library/issues/4) | As a book owner I want perform as few steps as possible to add new book | Add ability to identify book with Isbn | Done |
[#5](https://github.com/Moiiwa/Library/issues/5) | As a client I want to be able to borrow books | Create an ability to notify the owner about the borrow wish | |
[#6](https://github.com/Moiiwa/Library/issues/6) | As a client I want to be reminded when I should return book to owner | Create an ability to notify the client about the return day | |
[#7](https://github.com/Moiiwa/Library/issues/7) | As a book owner I want to get feedback about my books from other users | Add an ability to left feedback | |
[#8](https://github.com/Moiiwa/Library/issues/8) | As a book owner I want to be able to sell books | Add to book sell status check ability |  |
[#9](https://github.com/Moiiwa/Library/issues/9) | As a user I want to be able to send and approve friend requests | Add users authentification and authorization modules | |
[#9](https://github.com/Moiiwa/Library/issues/9) | | Add ability to add friends |  |

#### Sprints -> Tasks

Sprints | Tasks |
| --- | --- | 
Sprint 1 |  | 
| | Add ability to identify book with Isbn | 
| | Create the book card| 
Sprint 2 |  | 
| | Add to book share status check ability | 
| | Add to book sell status check ability | 
| | Create the CI |
Sprint 3 |  | 
| | Add users authentification and authorization modules | 
Sprint 4 |  | 
| | Create an ability to notify the owner about the borrow wish | 
| | Add to book sell status check ability |
| | Add to book share status check ability |
Sprint 5 |  | 
| | Add an ability to left feedback |
| | Add ability to add friends | 
| | Create an ability to notify the client about the return day |

#### Sprint 1

Task | Small tasks | Acceptance tests | Status |
| --- | --- | --- | --- |
Sprint 1 |  |  |  |
| Add ability to identify book with Isbn | Create the Isbn search field in frontend | Tests coverage at least 80% | Done |
|  | Connect the scaner with the database of Isbns | It detects 20% of example books |  Done |
| Create the book card | Save information about the book in db | All create/read operations work | Done |
|  | Display info from db on the book page | Title and Author should be filled | Done |

#### Sprint 2

Task | Small tasks | Acceptance tests | Status |
| --- | --- | --- | --- |
Sprint 2 |  |  |  |
| Add to book share status check ability | Connect list of books with get endpoint | All books after isbn search are displayed in the list | Done |
|  | Connect get book api with book page | Display book page after click on book name | Done |
|  | Create share check box on the book page | Check box is clickable | Done |
| Add to book sell status check ability | Create put endpoint for book with sell and share status update | sell status changes in bd | Done |
|  | Create sell check box on the book page | Check box is clickable | Done |
| Create the CI | Dockerize everything | App starts from docker | Done |


#### Sprint 3
Task | Small tasks | Acceptance tests | Status |
| --- | --- | --- | --- |
Sprint 2 |  |  |  |
| Add users authentification and authorization modules | Add users authentification and authorization modules | Backen deffirentiates users and sends the data to frontend | Done |
|  | Add registration page | name, last name, username and password checks | Done |
|  | Add login page | username and password checks | Done |
|  | Create GitHub Actions | build, test and deploy actions | Done |