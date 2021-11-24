import React from 'react'
import Input from '../../components/Input'
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
                <Input />
                {this.state.loading ?
                    <div>Loading...</div> :
                    <div className="container list">
                        <List list={this.state.booksList} />
                    </div>
                }
                <Link to="/" onClick={this.handleLogOut}>Log out</Link>
            </React.Fragment>
        );
    }
}

export default MainPage;