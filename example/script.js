import one4pay from "../index.js"

let o4p = new one4pay()
const btn_login = document.querySelector("#login");
const btn_getCurrencies = document.querySelector("#get_currencies");
const btn_pay = document.querySelector("#make_payment");
const btn_tokenize = document.querySelector("#tokenize_card");
const btn_initiate_checkout = document.querySelector("#checkout_url");
const btn_delete = document.querySelector("#delete_card");

const user = {
    username: "",
    password: ""
}

const payment_params = {
    merchantId: "",
    currencyCode: "",
    cardDetails: "",
    reference: "",
    originatingApplicationName: "",
    amount: 0,
    paymentMethod: "",
    apiMethod: "",
    sourceType: "",
    failureUrl: "",
    returnUrl: "",
    saveCard: false
}

const checkout_info = {
    merchantId: "",
    currencyCode: "",
    merchantReference: "",
    amount: 0,
    paymentMethod: "",
    returnUrl: ""
}

const card_info = {
    merchantId: "",
    cardDetails: ""
}

btn_login.addEventListener("click", () => auth(user))
btn_getCurrencies.addEventListener("click", () => getCurrencies())
btn_pay.addEventListener("click", () => payment())
btn_initiate_checkout.addEventListener("click", () => generateCheckoutUrl())
btn_tokenize.addEventListener("click", () => tokenize())
btn_delete.addEventListener("click", () => deleteCard())

async function auth(user) {
    try {
        let token = await one4pay.login(user)
        o4p = new one4pay(token)
        console.log("login successful")
    } catch (error) {
        console.error(error.message)
    }
}

async function getCurrencies() {
    try {
        const res = await o4p.getAvailableCurrencies()
        console.log(res)
    } catch (error) {
        console.error(error.message)
    }
}

async function payment() {
    try {
        const res = await o4p.directPay(payment_params)
        console.log(res)
    } catch (error) {
        console.error(error.message)
    }
}

async function generateCheckoutUrl() {
    try {
        const res = await o4p.initiateCheckout(checkout_info)
        console.log(res)
    } catch (error) {
        console.error(error.message)
    }
}

async function tokenize() {
    try {
        const res = await o4p.tokenizeCard(card_info)
        console.log(res)
    } catch (error) {
        console.error(error.message)
    }
}

async function deleteCard() {
    const CARDTOKEN = "dummycardtoken"
    try {
        const res = await o4p.removeCard(CARDTOKEN)
        console.log(res)
    } catch (error) {
        console.error(error.message)
    }
}
