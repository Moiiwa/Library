import React from 'react'
import getBookWithIsbn from '../api/isbn'

class Input extends React.Component {

    constructor(props) {
        super(props);
        this.state = { isbn: '' };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
        this.setState({ isbn: event.target.value });
    }

    handleSubmit() {
        console.log(this.state.isbn)
    }

    render() {
        return (
            <div>
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