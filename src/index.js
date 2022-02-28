import { URLs } from "./endpoints.js";

const login = async (user) => {
    try {
        if (!user.username || !user.password) {
            throw {
                message: "Provide required fields"
            }
        }

        const requestOptions = {
            method: URLs.auth.method,
            body: JSON.stringify(user),
            redirect: 'follow',
            headers: {
                'Content-Type': 'application/json'
            }
        }

        const res = await fetch(URLs.auth.url, requestOptions)

        return res.headers.get('x-token')

    } catch (error) {
        return error.message
    }
}

class o4p {
    constructor(token) {
        this.token = token;
    }

    async getAvailableCurrencies() {
        try {
            if (!this.token) {
                throw {
                    message: "Provide bearer token"
                }
            }

            const requestOptions = {
                method: URLs.all_currencies.method,
                redirect: 'follow',
                headers: {
                    'Authorization': 'Bearer ' + this.token,
                }
            }


            const res = await fetch(URLs.all_currencies.url, requestOptions)

            return res.json()

        } catch (error) {
            console.log(error.message)
            return error.message
        }
    }

}

export { o4p, login }