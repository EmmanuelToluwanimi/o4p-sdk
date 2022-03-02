import { URLs } from "./src/endpoints.js"

class one4pay {
    constructor(token) {
        this.token = token
        this.regx = /^\d+$/
    }

    static async login(user) {
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
            console.error(error.message)
        }
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
            console.error(error.message)
        }
    }

    async directPay(params) {
        try {
            if (!params) {
                throw { message: "Provide required parameters" }
            }

            const {
                merchantId,
                currencyCode,
                cardDetails,
                reference,
                originatingApplicationName,
                amount,
                paymentMethod,
                apiMethod,
                sourceType,
                failureUrl,
                returnUrl
            } = params

            if (
                !merchantId ||
                !currencyCode ||
                !cardDetails ||
                !reference ||
                !originatingApplicationName ||
                !amount ||
                !paymentMethod ||
                !apiMethod ||
                !sourceType ||
                !failureUrl ||
                !returnUrl
            ) {
                throw { message: "Enter required fields" }
            }

            if (!this.regx.test(amount)) {
                throw { message: "Provide numeric amount" }
            }

            const raw = { ...params }

            const requestOptions = {
                method: URLs.pay.method,
                body: JSON.stringify(raw),
                redirect: 'follow',
                headers: {
                    'Authorization': 'Bearer ' + this.token,
                    'Content-Type': 'application/json'
                }
            }

            const res = await fetch(URLs.pay.url, requestOptions)

            return res.json()

        } catch (error) {
            console.error(error.message)
            return error.message
        }
    }

    async initiateCheckout(params) {
        try {
            if (!params) {
                throw { message: "Provide required parameters" }
            }

            const {
                merchantId,
                currencyCode,
                merchantReference,
                amount,
                paymentMethod,
                returnUrl
            } = params

            if (
                !merchantId ||
                !currencyCode ||
                !merchantReference ||
                !amount ||
                !paymentMethod ||
                !returnUrl
            ) {
                throw { message: "Enter required fields" }
            }

            if (!this.regx.test(amount)) {
                throw { message: "Provide numeric amount" }
            }

            const raw = { ...params }

            const requestOptions = {
                method: URLs.initiate_checkout.method,
                body: JSON.stringify(raw),
                redirect: 'follow',
                headers: {
                    'Authorization': 'Bearer ' + this.token,
                    'Content-Type': 'application/json'
                }
            }

            const res = await fetch(URLs.initiate_checkout.url, requestOptions)

            return res.json()

        } catch (error) {
            console.log(error.message)
            console.error(error.message)
        }
    }

    async tokenizeCard(params) {
        try {
            if (!params) {
                throw { message: "Provide required parameters" }
            }

            const {
                merchantId,
                cardDetails
            } = params

            if (!merchantId || !cardDetails) {
                throw { message: "Enter required fields" }
            }

            const raw = { ...params }

            const requestOptions = {
                method: URLs.tokenization.method,
                body: JSON.stringify(raw),
                redirect: 'follow',
                headers: {
                    'Authorization': 'Bearer ' + this.token,
                    'Content-Type': 'application/json'
                }
            }

            const res = await fetch(URLs.tokenization.url, requestOptions)

            return res.json()

        } catch (error) {
            console.log(error.message)
            console.error(error.message)
        }

    }

    async removeCard(param) {
        try {
            if (!param) {
                throw { message: "Provide required field" }
            }

            const requestOptions = {
                method: URLs.remove_card.method,
                redirect: 'follow',
                headers: {
                    'Authorization': 'Bearer ' + this.token
                }
            }

            const res = await fetch(URLs.remove_card.url(param), requestOptions)

            return res.json()

        } catch (error) {
            console.log(error.message)
            return error.message
        }
    }

}

export default one4pay