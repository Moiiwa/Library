const checkIsbnFormat = (isbn) => {
    return /^[0-9]{3}-\d-[0-9]{4}-[0-9]{4}-\d$/.test(isbn)
}

export { checkIsbnFormat }