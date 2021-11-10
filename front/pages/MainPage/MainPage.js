import React from 'react'
import Input from '../../components/Input'
import List from '../../components/List/List'
import { getBooks } from '../../api/book'

class MainPage extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            loading: true,
            booksList: null
        };
    }


    getData = async () => {
        await getBooks()
            .then(data => {
                console.log(data[0])
                this.setState({
                    loading: false,
                    booksList: data
                });
            });
    }

    componentWillMount() {
        this.getData();
    }

    render() {
        return (
            <React.Fragment>
                <Input />
                {this.state.loading ?
                    <div>Loading...</div> :
                    <div>
                        <List list={this.state.booksList} />
                    </div>
                }
            </React.Fragment>
        );
    }
}

export default MainPage;