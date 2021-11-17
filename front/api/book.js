const BASE_LINK = 'http://localhost:8000'

const postBook = async (
    title, 
    author, 
    owner, 
    sellingStatus, 
    holder,
    publisher,
    date,
    description,
    pages
    ) => {
    return fetch(`${BASE_LINK}/add_book`, {
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            author: author,
            title: title,
            owner: owner,
            sellingStatus: sellingStatus,
            holder: holder,
            publisher: publisher,
            publishedDate: date,
            description: description,
            pages: pages
        })
    })
        .then((response) => {
            console.dir(response)
            if (!response.ok) {
                throw Error(response.statusText)
            }
            return response
        })
        .catch((err) => { console.log('Error: ' + err) });
}

const getBooks = async () => {
    return fetch(`${BASE_LINK}/get_books`, {
        method: 'GET',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        }
    })
        .then((response) => {
            if (!response.ok) {
                throw Error(response.statusText)
            }
            return response.json()
        })
        .catch((err) => { console.log('Error: ' + err) });
}

const getBook = async (id) => {
    return fetch(`${BASE_LINK}/get_book?id=${id}`, {
        method: 'GET',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        }
    })
        .then((response) => {
            console.dir(response)
            if (!response.ok) {
                throw Error(response.statusText)
            }
            return response.json()
        })
        .catch((err) => { console.log('Error: ' + err) });
}

export { postBook, getBooks, getBook }