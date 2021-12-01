import React from 'react'
import { Link } from "react-router-dom";
import { updateRentingStatus, updateSellingStatus } from '../../api/bookStatus'

class TableWithoutButtons extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            books: null,
        };
    }

    componentWillMount() {
        this.setState({ books: this.props.books })
    }

    changeSellingStatus = async (index, id) => {
        let data = this.state.books
        let oppStatus = !data[index].sellingStatus
        await updateSellingStatus(oppStatus, id)
        data[index].sellingStatus = oppStatus
        this.setState({ books: data })
    }

    changeRentingStatus = async (index, id) => {
        let data = this.state.books
        let oppStatus = !data[index].rentingStatus
        await updateRentingStatus(oppStatus, id)
        data[index].rentingStatus = oppStatus
        this.setState({ books: data })
    }

    render() {
        return (
            <table id="list" className="table">

                <tr>
                    <td className="text-center">
                        <strong>Name</strong>
                    </td>
                    <td className="text-center">
                        <strong>Allow selling</strong>
                    </td>
                    <td className="text-center">
                        <strong>Allow sharing</strong>
                    </td>
                </tr>

                {this.state.books.map((el, index) =>
                    <tr key={index}>
                        <td className="text-center">
                            <Link to={`/book/${el.id}`}>{el.title}</Link>
                        </td>
                        <td className="text-center">
                            <input type="checkbox" id='sell' checked={el.sellingStatus} onChange={() => this.changeSellingStatus(index, el.id)} />
                        </td>
                        <td className="text-center">
                            <input type="checkbox" id='share' checked={el.rentingStatus} onChange={() => this.changeRentingStatus(index, el.id)} />
                        </td>
                    </tr>
                )}
            </table>
        )
    }

}

export default TableWithoutButtons;