/* istanbul ignore file */

const BASE_LINK = 'http://localhost:8000'

const buyBook = async (user, id) => {
    return fetch(`${BASE_LINK}/buy_book`, {
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            id: id,
            holder: user,
            owner: user,
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

// list of all books available for sell
const getBooksForSell = async () => {
    return fetch(`${BASE_LINK}/all_sellable_books`, {
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

const changeHolder = async (owner, id) => {
    return fetch(`${BASE_LINK}/change_holder`, {
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            id: id,
            holder: owner,
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

export { buyBook, getBooksForSell, changeHolder }