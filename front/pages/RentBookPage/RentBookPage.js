import React from 'react'

class RentBookPage extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            loading: true,
            booksList: null
        };
    }

    render() {
        return (
            <React.Fragment>
                <h1 className="text-center">nothing here</h1>
            </React.Fragment>
        );
    }
}

export default RentBookPage;