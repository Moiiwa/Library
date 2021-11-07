export const getBookWithIsbn = () => {
    return fetch(`https://openlibrary.org/isbn/9780140328721`);
}