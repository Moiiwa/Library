![backend workflow status](https://github.com/Moiiwa/Library/actions/workflows/main.yml/badge.svg)
![frontend workflow status](https://github.com/Moiiwa/Library/actions/workflows/front.yml/badge.svg)
# Library management app

#### Description

This is the library management application whose goal is to make it easier for users to keep and exchange books
 
Features of this web application:

1. User can borrow book
2. User can add book
3. User can sell book
4. User can rate book

#### Web site
To check the web site go to http://34.217.9.107:8080
#### User manual

First page which you will see is registration page. You need to fill each field to register.

<img src="front/screens/reg.png" width="500"/>

In case of empty field you will have an error notification.

<img src="front/screens/reg_error.png" width="500"/>

If you already have an account, you can switch to login page by clicking on Cancel button at the bottom of the registration page.

<img src="front/screens/login.png" width="500"/>

If on the login page you will enter credentional which do not exist in the database, you will get the error like on the picture above.

<img src="front/screens/login_error.png" width="500"/>

After successful login or registration you will see the main page.

<img src="front/screens/main.png" width="500"/>

You can write the book's isbn with numbers and dashes and click find button to find the book. If you already have some books in your library, you will see the list of them.

<img src="front/screens/list.png" width="500"/>

By clicking on the book name from the list you will get the book page with detailed information

<img src="front/screens/screen_manual_book_page.png" width="500"/>

On this page you can set up the selling and sharing status to allow other user to borrow or buy your book. Also you can use the same checkboxes from the main page.

To log out from the app click log out button on the main page

## Manual installation

for manual installation check [here](https://github.com/Moiiwa/Library/blob/front_ci/documentation/manual-instalation.md)

## Application architecture

for application architecture check [here](https://github.com/Moiiwa/Library/blob/front_ci/documentation/architecture.md)

## Process organisation

for process organisation check [here](https://github.com/Moiiwa/Library/blob/front_ci/documentation/process-organisation.md)

## Product Backlog

for product backlog check [here](https://github.com/Moiiwa/Library/blob/front_ci/documentation/product-backlog.md)