import React from 'react'

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
                            {el.title}
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