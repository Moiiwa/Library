/* istanbul ignore file */
const BASE_LINK = "http://localhost:8000"

const register = async (
    username,
    password,
    firstName,
    lastName
) => {
    return fetch(`${BASE_LINK}/register`, {
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            username: username,
            password: password,
            firstName: firstName,
            lastName: lastName
        })
    })
        .then((response) => {
            if (!response.ok) {
                window.location.href = "/error";
            } else {
                return response
            }
        })
}

const login = async (
    username,
    password
) => {
    return fetch(`${BASE_LINK}/login`, {
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            username: username,
            password: password
        })
    })
        .then((response) => {
            if (!response.ok) {
                window.location.href = "/error";
            } else {
                return response
            }
        })
}

export { register, login }