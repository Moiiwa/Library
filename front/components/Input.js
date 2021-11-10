import React from 'react'
import { getBookWithIsbn } from '../api/isbn'
import { checkIsbnFormat } from './utils'
import BookPage from '../pages/BookPage/BookPage';
import { postBook, getBooks, getBook } from '../api/book'

class Input extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            isbn: '',
            formatMessage: false,
            bookFound: false
        };

        this.data = {}

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
        this.setState({ isbn: event.target.value });
    }

    handleSubmit = async () => {
        if (checkIsbnFormat(this.state.isbn)) {
            // this.setState({ formatMessage: false });
            // const data = await getBookWithIsbn(this.state.isbn);
            // this.data = data
            // this.setState({ bookFound: true })
            // const res = await postBook(data.title, data.authors[0].key)

            const listOfBooks = await getBooks()
            console.log(listOfBooks)
        } else {
            this.setState({ formatMessage: true });
        }
    }

    render() {
        return (
            <div>
                {this.state.formatMessage ?
                    <div style={{ color: 'red' }}>Isbn should be in 111-1-1111-1111-1 format</div> :
                    null
                }
                <input
                    type='text'
                    placeholder='111-1-1111-1111-1'
                    required={true}
                    value={this.state.isbn}
                    onChange={this.handleChange}
                />
                <button onClick={this.handleSubmit}>Find book</button>

                {this.state.bookFound ? <BookPage data={this.data} /> : null}

            </div>
        );
    }
}

export default Input;