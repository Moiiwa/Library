/* istanbul ignore file */

const BASE_LINK = 'http://localhost:8000'

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
            if (!response.ok) {
                window.location.href = "/error";
            } else {
                return response
            }
        })
}

const updateRentingStatus = async (state, id) => {
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
            if (!response.ok) {
                window.location.href = "/error";
            } else {
                return response
            }
        })
}

export { updateSellingStatus, updateRentingStatus }