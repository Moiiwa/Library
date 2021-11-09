import React from 'react'
import { getBookWithIsbn } from '../api/isbn'
import { checkIsbnFormat } from './utils'
import { postBook } from '../api/book'

class Input extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            isbn: '',
            formatMessage: false
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
        this.setState({ isbn: event.target.value });
    }

    handleSubmit = async () => {
        if (checkIsbnFormat(this.state.isbn)) {
            this.setState({ formatMessage: false });
            const data = await getBookWithIsbn(this.state.isbn);
            const res = await postBook(data.title, data.authors[0].key)
            console.log(res)
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
            </div>
        );
    }
}

export default Input;