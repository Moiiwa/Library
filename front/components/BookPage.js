import React from 'react'
import './BookPage.css'

class BookPage extends React.Component {

    constructor(props) {
        super(props);
        this.noCover = "https://lightning.od-cdn.com/static/img/no-cover_en_US.a8920a302274ea37cfaecb7cf318890e.jpg"
        this.state = {
            shareState: false,
            sellState: false
        }
    }

    flipShare(){
        this.setState({shareState: !this.state.shareState})
    }

    flipSell(){
        this.setState({sellState: !this.state.sellState })
    }

    render() {

        return (
            <div className="book">

                <img className={"book-cover"} src={this.noCover} alt={"Book Cover"}/>

                <div className="{book-info}">
                    <h1>{this.props.data.title}</h1>

                    {this.props.data.authors !== undefined ?
                        <div>
                            <b>Authors: </b>
                            {this.props.data.authors.map(author => <p>{author.key}</p>)}
                        </div>
                        : null}
                    {this.props.data.publisher !== undefined ?
                        <div>
                            <b>Publisher: </b>
                            <p>{this.props.data.publisher}</p>
                        </div>
                        : null}
                    {this.props.data.publishedDate !== undefined ?
                        <div>
                            <b>Published date: </b>
                            <p>{this.props.data.publishedDate}</p>
                        </div>
                        : null}
                    {this.props.data.description !== undefined ?
                        <div>
                            <b>Description: </b>
                            <p className={"description"}>{this.props.description}</p>
                        </div>
                        :
                        <div><b>Description: </b>
                            <p className={"description"}>No description</p>
                        </div>
                    }
                    {this.props.data.categories !== undefined ?
                        <div>
                            <b>Categories: </b>
                            <p>{this.props.data.categories}</p>
                        </div>
                        :
                        <div>
                            <b>Categories: </b>
                            <p className={"description"}>No categories</p>
                        </div>
                    }
                    {this.props.data.number_of_pages !== undefined ?
                        <div>
                            <b>Pages: </b>
                            <p>{this.props.data.number_of_pages}</p>
                        </div>
                        : null}


                    <input
                        id="sell_box"
                        type="checkbox"
                        checked={this.state.sellState}
                        onChange={this.flipSell.bind(this)}/>

                    <label for = "sell_box">Sell</label>

                    <input
                        id="share_box"
                        type="checkbox"
                        checked={this.state.shareState}
                        onChange={this.flipShare.bind(this)}/>

                    <label htmlFor="share_box">Share</label>

                    <button>
                        Add book
                    </button>

                </div>


            </div>
        )
    }

    // 978-5-1710-8287-1

}

export default BookPage;