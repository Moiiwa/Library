/* istanbul ignore file */
const BASE_LINK = 'http://localhost:8000'

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
            console.dir(response)
            if (!response.ok) {
                throw Error(response.statusText)
            }

            window.location.reload();

            return response
        })
        .catch((err) => { console.log('Error: ' + err) });
}

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

const updateSellingStatus = async (state, id) => {
    return fetch(`${BASE_LINK}/sell_status`, {
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            id: id,
            sellStatus: state,
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

const updateSharingStatus = async (state, id) => {
    return fetch(`${BASE_LINK}/rent_status`, {
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            id: id,
            rentStatus: state,
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

export { postBook, getBooks, getBook, updateSharingStatus, updateSellingStatus }