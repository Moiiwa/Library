/* istanbul ignore file */

const BASE_LINK = 'http://localhost:8000'

const rentBook = async (user, id) => {
    return fetch(`${BASE_LINK}/rent_book`, {
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            id: id,
            holder: user,
            sellingStatus: false,
            rentingStatus: false
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

// list of all books available for rent
const getBooksForRent = async () => {
    return fetch(`${BASE_LINK}/all_rentable_books`, {
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

// all books which user rented (user=holder & holder != owner)
const getListOfRentedByUser = async (user) => {
    return fetch(`${BASE_LINK}/all_rentable_books_of?username=${user}`, {
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

// all books which are rented by other people (user=owner & owner != holder)
const getListOfRentedByOthers = async (user) => {
    return fetch(`${BASE_LINK}/all_rented_books_of?username=${user}`, {
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

export { rentBook, getBooksForRent, getListOfRentedByUser, getListOfRentedByOthers }
