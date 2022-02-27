const base_url = "https://api.one4pay.com/"

const URLs = {
    auth: {
        url: base_url + "profile/authenticate",
        method: "POST",
    },
    all_currencies: {
        url: base_url + "currency/all_currencies",
        method: "GET",
    },
    pay: {
        url: base_url + "transaction/pay",
        method: "POST",
    },
    initiate_checkout: {
        url: base_url + "transaction/initiate-checkout",
        method: "POST",
    },
    tokenization: {
        url: base_url + "tokenization/tokenize-card",
        method: "POST",
    },
    remove_card: {
        url: base_url + "tokenization/remove-card/" + CARDTOKEN,
        method: "DELETE",
    },
    failureUrl: { url: "www.one4pay.com" },
    returnUrl: { url: "www.mvp-apps.ae" },

}

const login = async (username, password) => {
    const user = { username, password }

    const requestOptions = {
        method: URLs.auth.method,
        body: user,
        redirect: 'follow'
    }

    try {

        await fetch(URLs.auth.url, requestOptions)

    } catch (error) {
        console.log(error.message)
        return error.message
    }
}

const getAvailableCurrencies = async () => {

    const requestOptions = {
        method: URLs.all_currencies.method,
        redirect: 'follow'
    }

    try {
        const res= await fetch(URLs.all_currencies.url, requestOptions)

        return res

    } catch (error) {
        console.log(error.message)
        return error.message
    }
}

const pay = async (details) => {

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
    } = details

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

    const raw = {...details, failureUrl: URLs.failureUrl.url, returnUrl: URLs.returnUrl.url}

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