import {history} from "../helpers/history";

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
            console.dir(response)
            if (!response.ok) {
                throw Error(response.statusText)
            }

            history.push("/")

            return response
        })
        .catch((err) => {
            console.log('Error: ' + err)
        });
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
            console.dir(response)
            if (!response.ok) {
                throw Error(response.statusText)
            }

            history.push("/")

            return response
        })
        .catch((err) => {
            console.log('Error: ' + err)
        });
}

export {register, login}