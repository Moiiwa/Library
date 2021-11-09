import React from 'react'
import './BookPage.css'

class BookPage extends React.Component {

    constructor(props) {
        super(props);
        this.book = {
            bookCover: 'https://images-na.ssl-images-amazon.com/images/I/61ZKNw0xixL.jpg',
            bookTitle: 'Book cover design',
            authors: ["John", "Dalb"],
            description: "Lorem Ipsum - это текст-\"рыба\", часто используемый в печати и вэб-дизайне. Lorem Ipsum является стандартной \"рыбой\" для текстов на латинице с начала XVI века. В то время некий безымянный печатник создал большую коллекцию размеров и форм шрифтов, используя Lorem Ipsum для распечатки образцов. Lorem Ipsum не только успешно пережил без заметных изменений пять веков, но и перешагнул в электронный дизайн. Его популяризации в новое время послужили публикация листов Letraset с образцами Lorem Ipsum в 60-х годах и, в более недавнее время, программы электронной вёрстки типа Aldus PageMaker, в шаблонах которых используется Lorem Ipsum."
        }
    }

    render() {
        return (
            <div className="book">

                <img className={"book-cover"} src={this.book.bookCover}  alt={"Book Cover"}/>

                <div className="{book-info}">
                    <h1>{this.book.bookTitle}</h1>
                    <b>Authors: </b>
                    <p>{this.book.authors}</p>
                    <b>Description:</b>
                    <p className={"description"}>{this.book.description}</p>
                </div>
            </div>
        )
    }

}

export default BookPage;