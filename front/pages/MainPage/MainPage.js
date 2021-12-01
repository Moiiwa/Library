import React from 'react'
import { Link } from "react-router-dom"
import Input from '../../components/Input/Input'
import TableWithoutButtons from '../../components/TableWithoutButtons/TableWithoutButtons'
import TableWithButtons from '../../components/TableWithButtons/TableWithButtons'
import { getBooks } from '../../api/book'
import { getListOfRentedByUser, getListOfRentedByOthers } from '../../api/bookRent'

import './MainPage.css'
class MainPage extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            username: localStorage.getItem('username'),
            booksListLoading: true,
            booksList: null,
            booksRentedByUserLoading: true,
            booksRentedByUser: null,
            booksRentedByOthersLoading: true,
            booksRentedByOthers: null
        };
    }

    getData = async () => {
        await getBooks(this.state.username)
            .then(data => {
                this.setState({
                    booksListLoading: false,
                    booksList: data
                });
            });
        await getListOfRentedByUser(this.state.username)
            .then(data => {
                this.setState({
                    booksRentedByUserLoading: false,
                    booksRentedByUser: data
                });
            });
        await getListOfRentedByOthers(this.state.username)
            .then(data => {
                this.setState({
                    booksRentedByOthersLoading: false,
                    booksRentedByOthers: data
                });
            });
    }

    componentWillMount() {
        this.getData();
    }

    handleLogOut = () => {
        localStorage.removeItem('username');
    }

    render() {
        return (
            <React.Fragment>
                <h1 className="text-center">Library management application</h1>

                <div className="text-center button-wrapper">
                    <Link to="/buy">
                        <button type="button" class="btn btn-primary m-right">
                            Buy book
                        </button>
                    </Link>
                    <Link to="/rent">
                        <button type="button" class="btn btn-primary">
                            Rent book
                        </button>
                    </Link>
                </div>

                <Input />

                {this.state.booksListLoading ?
                    <div>Loading...</div>
                    :
                    this.state.booksList.length > 0 ?
                        <div className="container list">
                            <h3>Your books</h3>
                            <TableWithoutButtons books={this.state.booksList} />
                        </div>
                        : <h3 style={{ color: 'red', marginLeft: '16%' }}>
                            You have no your own books
                          </h3>
                }

                {this.state.booksRentedByUserLoading ?
                    <div>Loading...</div>
                    :
                    this.state.booksRentedByUser.length > 0 ?
                        <div className="container list">
                            <h3>Books you rented</h3>
                            <TableWithButtons
                                books={this.state.booksRentedByUser}
                                secondColumnName={'Owner'}
                                buttonText={'Return book'}
                            />
                        </div>
                        : <h3 style={{ color: 'red', marginLeft: '16%' }}>
                            You did not rent any books
                          </h3>
                }

                {this.state.booksRentedByOthersLoading ?
                    <div>Loading...</div>
                    :
                    this.state.booksRentedByOthers.length > 0 ?
                        <div className="container list">
                            <h3>Books others rented</h3>
                            <TableWithButtons
                                books={this.state.booksRentedByOthers}
                                secondColumnName={'Holder'}
                                buttonText={'Ask to return'}
                            />
                        </div>
                        : <h3 style={{ color: 'red', marginLeft: '16%' }}>
                            No one rented your books
                          </h3>
                }

                <Link to="/" onClick={this.handleLogOut}>
                    Log out, {localStorage.getItem('username')}
                </Link>
            </React.Fragment>
        );
    }
}

export default MainPage;