import React from 'react'
import { Link } from "react-router-dom";
import { updateSharingStatus, updateSellingStatus } from '../../api/book'
class List extends React.Component {

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

    changeSharingStatus = async (index, id) => {
        let data = this.state.books
        let oppStatus = !data[index].rentingStatus
        await updateSharingStatus(oppStatus, id)
        data[index].rentingStatus = oppStatus
        this.setState({ books: data })
    }

    render() {
        return (
            <div id="list">
                {this.state.books ?
                    <table className="table">

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
                                    <input type="checkbox" id='share' checked={el.rentingStatus} onChange={() => this.changeSharingStatus(index, el.id)} />
                                </td>
                            </tr>
                        )}
                    </table>
                    : null
                }
            </div>
        )
    }


}

export default List;