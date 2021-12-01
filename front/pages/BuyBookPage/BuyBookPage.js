import React from 'react'
import { getBooksForSell, buyBook } from '../../api/book'

import './BuyBookPage.css'

class BuyBookPage extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            loading: true,
            booksList: null,
            user: localStorage.getItem('username')
        };
    }

    getData = async () => {
        await getBooksForSell()
            .then(data => {
                this.setState({
                    loading: false,
                    booksList: data
                });
            });
    }

    buyBook = async (id) => {
        await buyBook(this.state.user, id)
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
                        <h1 className="header">Books available for sale: </h1>
                        <table className="listWrapper">
                            {this.state.booksList.map((el, index) =>
                                <tr key={index} >
                                    <td>{index + 1}</td>
                                    <td>{el.title}</td>
                                    <td>{el.author}</td>
                                    <td>
                                        {el.holder === this.state.user ||
                                            el.owner === this.state.user ?
                                            <p style={{ color: 'red' }}>
                                                It's your book
                                            </p>
                                            :
                                            <button
                                                type="button"
                                                className="btn btn-primary"
                                                onClick={() => this.buyBook(el.id)}>
                                                Buy book
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

export default BuyBookPage;


{/* <div>
    {this.state.booksList.map((el) =>
        <div className="listWrapper">
            <div className="book">{el.title}</div>
            <button type="button" style={{ display: 'inline' }} className="btn btn-primary">
                Buy book
                                </button>
        </div>
    )}
</div> */}