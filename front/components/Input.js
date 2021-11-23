import React from 'react'
import { getBookWithIsbn } from '../api/isbn'
import { postBook, getBooks } from '../api/book'

class Input extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            isbn: '',
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
        this.setState({ isbn: event.target.value });
    }

    handleSubmit = async () => {
        const data = await getBookWithIsbn(this.state.isbn);
        if (data) {
            await postBook(
                data.authors ? data.authors[0].key : 'no authors',
                data.title ? data.title : 'no title',
                'owner',
                false,
                false,
                'holder',
                data.publishers ? data.publishers[0] : 'no publishers',
                new Date('December 17, 1995 03:24:00'),
                data.description ? data.description.value : 'no description',
                data.number_of_pages ? data.number_of_pages : 0
            )
        }
    }

    render() {
        return (
            <div className="container">
                <input
                    className="form-control"
                    type='text'
                    placeholder='111-1-1111-1111-1'
                    required={true}
                    value={this.state.isbn}
                    onChange={this.handleChange}
                />
                <button className="btn btn-primary" onClick={this.handleSubmit}>Find book</button>
            </div>
        );
    }
}

export default Input;