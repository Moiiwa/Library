import React from 'react'
import { getBooksForRent, rentBook } from '../../api/bookRent'

import './RentBookPage.css'

class RentBookPage extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            loading: true,
            booksList: null,
            user: localStorage.getItem('username')
        };
    }

    getData = async () => {
        await getBooksForRent()
            .then(data => {
                this.setState({
                    loading: false,
                    booksList: data
                });
            });
    }

    rentBook = async (id) => {
        await rentBook(this.state.user, id)
    }

    componentWillMount() {
        this.getData();
    }

    render() {
        return (
            <React.Fragment>
                {this.state.loading ?
                    <div>Loading...</div> :
                    <div>
                        <h1 className="header">Books available for rent: </h1>
                        <table className="listWrapper">
                            {this.state.booksList.map((el, index) =>
                                <tr key={index} >
                                    <td>{index + 1}</td>
                                    <td>{el.title}</td>
                                    <td>{el.author}</td>
                                    <td>{el.owner}</td>
                                    <td>
                                        {el.owner === this.state.user ?
                                            <p style={{ color: 'red' }}>
                                                It's your book
                                            </p>
                                            :
                                            <button
                                                type="button"
                                                className="btn btn-primary"
                                                onClick={() => this.rentBook(el.id)}>
                                                Rent book
                                            </button>
                                        }
                                    </td>
                                </tr>
                            )}
                        </table>
                    </div>
                }
            </React.Fragment>
        );
    }
}

export default RentBookPage;