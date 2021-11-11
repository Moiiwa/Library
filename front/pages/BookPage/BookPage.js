import React from 'react'
import { getBook } from '../../api/book'
import InfoField from '../../components/InfoField/InfoField'

import './BookPage.css'
class BookPage extends React.Component {

    constructor(props) {
        super(props);
        this.noCover = "https://lightning.od-cdn.com/static/img/no-cover_en_US.a8920a302274ea37cfaecb7cf318890e.jpg"
        this.state = {
            loading: true,
            bookData: null
        };
    }

    getBook = async () => {
        const id = this.props.match.params.id
        await getBook(id)
            .then(data => {
                this.setState({
                    loading: false,
                    bookData: data
                });
            })
    }

    componentDidMount() {
        this.getBook();
    }

    render() {
        return (
            <div className="book">
                <img className={"book-cover"} src={this.noCover} alt={"Book Cover"} />

                {this.state.loading ?
                    <div>Loading...</div> :
                    <div>
                        <div className="{book-info}">
                            <h1>{this.state.bookData.title}</h1>
                        </div>
                        {this.state.bookData.author !== undefined ?
                            <InfoField label={'Authors:'} value={this.state.bookData.author} />
                            : null}
                        {this.state.bookData.publisher !== undefined ?
                            <InfoField label={'Publisher:'} value={this.state.bookData.publisher} />
                            : null}
                        {this.state.bookData.publishedDate !== undefined ?
                            <InfoField label={'Published date:'} value={this.state.bookData.publishedDate} />
                            : null}
                        {this.state.bookData.description !== undefined ?
                            <InfoField label={'Description:'} value={this.state.bookData.description} />
                            : <InfoField label={'Description:'} value={'no'} />}
                        {this.state.bookData.number_of_pages !== undefined ?
                            <InfoField label={'Pages:'} value={this.state.bookData.number_of_pages} />
                            : null}
                    </div>
                }
            </div>
        )
    }

}

export default BookPage;