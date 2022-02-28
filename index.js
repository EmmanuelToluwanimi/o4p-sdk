import { URLs } from "./src/endpoints.js"
import { login, o4p } from "./src/index.js"

// export const login = async (username, password) => {
//     const user = { username, password }
//     // console.log(user);

//     const requestOptions = {
//         method: URLs.auth.method,
//         body: JSON.stringify(user),
//         redirect: 'follow',
//         headers: {
//             'Content-Type': 'application/json'
//         }
//     }

//     try {

//         const res = await fetch(URLs.auth.url, requestOptions)
//         console.log(res.headers)
//     } catch (error) {
//         console.log(error.message)
//         return error.message
//     }
// }

// const getAvailableCurrencies = async () => {

//     const requestOptions = {
//         method: URLs.all_currencies.method,
//         redirect: 'follow'
//     }

//     try {
//         const res = await fetch(URLs.all_currencies.url, requestOptions)

//         return res

//     } catch (error) {
//         console.log(error.message)
//         return error.message
//     }
// }

const pay = async (params) => {

    const {
        merchantId,
        currencyCode,
        cardDetails,
        reference,
        originatingApplicationName,
        amount,
        paymentMethod,
        apiMethod,
        sourceType
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
        !sourceType
    ) {
        return "Enter required fields"
    }

    const raw = { ...params, failureUrl: URLs.failureUrl.url, returnUrl: URLs.returnUrl.url }

    const requestOptions = {
        method: URLs.pay.method,
        body: raw,
        redirect: 'follow'
    }

    try {
        await fetch(URLs.pay.url, requestOptions)

    } catch (error) {
        console.log(error.message)
        return error.message
    }
}

const checkout = async (params) => {
    const {
        merchantId,
        currency,
        merchantReference,
        amount,
        paymentMethod
    } = params

    if (
        !merchantId ||
        !currency ||
        !merchantReference ||
        !amount ||
        !paymentMethod
    ) {
        return "Enter required fields"
    }

    const raw = { ...params, returnUrl: URLs.returnUrl.url }

    const requestOptions = {
        method: URLs.initiate_checkout.method,
        body: raw,
        redirect: 'follow'
    }

    try {

        const res = await fetch(URLs.initiate_checkout.url, requestOptions)

        return res

    } catch (error) {
        console.log(error.message)
        return error.message
    }
}

const tokenize = async (params) => {
    const {
        merchantId,
        cardDetails
    } = params

    if (!merchantId || !cardDetails) {
        return "Enter required fields"
    }

    const raw = { ...params }

    const requestOptions = {
        method: URLs.tokenization.method,
        body: raw,
        redirect: 'follow'
    }

    try {

        const res = await fetch(URLs.tokenization.url, requestOptions)

        return res

    } catch (error) {
        console.log(error.message)
        return error.message
    }

}

const removeCard = async (params) => {
    const {
        CARDTOKEN
    } = params

    if (!CARDTOKEN) {
        return "Enter required fields"
    }

    const raw = { ...params }

    const requestOptions = {
        method: URLs.remove_card.method,
        body: raw,
        redirect: 'follow'
    }

    try {

        const res = await fetch(URLs.remove_card.url, requestOptions)

        return res

    } catch (error) {
        console.log(error.message)
        return error.message
    }
}

const one4pay = { o4p, login }

export default one4pay