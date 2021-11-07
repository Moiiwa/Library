const getBookWithIsbn = async (isbn) => {
    return fetch(`https://openlibrary.org/isbn/${isbn}.json`)
        .then((response) => {
            if (!response.ok) {
                throw Error(response.statusText)
            }
            return response.json()
        })
        .catch((err) => { console.log('Error: ' + err) });
}

export { getBookWithIsbn }