import React from 'react'
import { Link } from "react-router-dom"
import { changeHolder } from '../../api/bookSell'

import './TableWithButtons.css'

class TableWithButtons extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            books: null,
        };
    }

    componentWillMount() {
        this.setState({ books: this.props.books })
    }

    returnBook = async (owner, id) => {
        await changeHolder(owner, id)
            .then(data => {
                console.log(data)
            })
    }

    render() {
        return (
            <table className="listWrapper">

                <tr>
                    <td className="text-center">
                        <strong>Name</strong>
                    </td>
                    <td className="text-center">
                        <strong>{this.props.secondColumnName}</strong>
                    </td>
                    <td className="text-center"></td>
                </tr>

                {this.state.books.map((el, index) =>
                    <tr key={index}>
                        <td className="text-center">
                            <Link to={`/book/${el.id}`}>{el.title}</Link>
                        </td>
                        <td className="text-center">
                            <p>{el.holder}</p>
                        </td>
                        <td className="text-center">
                            <button
                                type="button"
                                className="btn btn-primary"
                                onClick={() => this.returnBook(el.owner, el.id)}>
                                {this.props.buttonText}
                            </button>
                        </td>
                    </tr>
                )}
            </table>

        );
    }
}

export default TableWithButtons;