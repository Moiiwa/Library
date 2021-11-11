import React from 'react'
import { Link } from "react-router-dom";

class List extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {

        return (
            <ul id="list">
                {this.props.list ?
                    this.props.list.map((el) => (
                        <li key={el.id}>
                            <Link to={`/book/${el.id}`}>{el.title}</Link>
                        </li>
                    ))
                    :
                    null
                }
            </ul>
        );
    }
}

export default List;