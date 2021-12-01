/* istanbul ignore file */
const getBookWithIsbn = async (isbn) => {
    return fetch(`https://openlibrary.org/isbn/${isbn}.json`)
        .then((response) => {
            if (!response.ok) {
                window.location.href = "/error";
            } else {
                return response.json()
            }
        })
}

export { getBookWithIsbn }