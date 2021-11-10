const BASE_LINK = 'http://localhost:8000'

const postBook = async (title, author) => {
    return fetch(`${BASE_LINK}/add_book`, {
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            author: author,
            title: title
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

export { postBook }