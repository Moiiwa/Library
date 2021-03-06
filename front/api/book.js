/* istanbul ignore file */

const BASE_LINK = 'http://localhost:8000'

// get all books except rented and in rent
const getBooks = async (owner) => {
    return fetch(`${BASE_LINK}/get_books?owner=${owner}`, {
        method: 'GET',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        }
    })
        .then((response) => {
            if (!response.ok) {
                window.location.href = "/error";
            } else {
                return response.json()
            }
        })
}

// get details of one book
const getBook = async (id) => {
    return fetch(`${BASE_LINK}/get_book?id=${id}`, {
        method: 'GET',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        }
    })
        .then((response) => {
            if (!response.ok) {
                window.location.href = "/error";
            } else {
                return response.json()
            }
        })
}

const postBook = async (
    author,
    title,
    owner,
    sellingStatus,
    rentingStatus,
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
            rentingStatus: rentingStatus,
            holder: holder,
            publisher: publisher,
            publishedDate: date,
            description: description,
            pages: pages
        })
    })
        .then((response) => {
            if (!response.ok) {
                window.location.href = "/error";
            } else {
                window.location.reload();
                return response
            }
        })
}

export { getBooks, getBook, postBook }