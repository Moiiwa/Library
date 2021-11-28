import React from 'react'
import Input from '../../components/Input/Input'
import List from '../../components/List/List'
import { getBooks } from '../../api/book'
import { Link } from "react-router-dom";

import './MainPage.css'
class MainPage extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            loading: true,
            booksList: null
        };
    }

    getData = async () => {
        await getBooks(localStorage.getItem('username'))
            .then(data => {
                this.setState({
                    loading: false,
                    booksList: data
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
                {this.state.loading ?
                    <div>Loading...</div> :
                    <div className="container list">
                        <List books={this.state.booksList} />
                    </div>
                }
                <Link to="/" onClick={this.handleLogOut}>Log out</Link>
            </React.Fragment>
        );
    }
}

export default MainPage;