import one4pay from "../index.js";

let token;
let o4p = new one4pay.o4p();
const btn_login = document.querySelector("#login");
const btn_getCurrencies = document.querySelector("#get_currencies");
const btn_pay = document.querySelector("#make_payment");
const btn_tokenize = document.querySelector("#tokenize_card");

const user = {
    username: 'o4padmin',
    password: '12304padm!n'
}

const payment_params = {
    merchantId: "dummyID",
    currencyCode: "USD",
    cardDetails: "XcfY4bvcYSA/6eVv6oveFu3gMH8UJYs86/PRB9DCd1qQvlL2KOfk+0oFhp6zmD3ItsRO/q+4JAkjaDfLokpQi6x2MSM/0vZD4L7DXhUW7XdQLylnVlT6IoDpXHQG64e2QWk0yh+T9pWqs/a6MjFB/pASa4wEWfJoSKdEFZQu9Pk=",
    reference: "IUY5835",
    originatingApplicationName: "Online Shop",
    amount: 15,
    paymentMethod: "CARD",
    apiMethod: "paypal",
    sourceType: "sale",
    failureUrl: "www.one4pay.com",
    returnUrl: "www.mvp-apps.ae",
    saveCard: false
}

const card_info = {
    merchantId: "dummyID",
    cardDetails: "SQ8/OE4KJ9M+04BxOYF08ltlhuDYg0RqFsB9RlMiMcpIc/tEjifeYQyGZSxzXDMCd+HoSlW2vXzIm30Gkjc4oO77Cxmi1Oh4FSmrRqZRoNafDX1O9GZCXg3KNdjuJk3BNKI/X92HLO9r8q0j0cgNWPurwoVgCxNFiqh6dd37evg="
}

btn_login.addEventListener("click", () => auth(user))
btn_getCurrencies.addEventListener("click", () => task())
btn_pay.addEventListener("click", () => payment())
btn_tokenize.addEventListener("click", () => tokenize())

const guard = () => {
    if (!o4p || !token) throw { message: "Login to proceed" }
}

async function auth(user) {
    try {
        token = await one4pay.login(user)
        o4p = new one4pay.o4p(token)
        console.log("Login successful")
    } catch (error) {
        console.error(error.message)
    }
}

async function task() {
    // const o4p = new one4pay.o4p(token)
    try {
        guard()
        const res = await o4p.getAvailableCurrencies()
        console.log(res)
    } catch (error) {
        console.error(error.message)
    }
}

async function payment() {
    try {
        guard()
        const res = await o4p.directPay(payment_params)
        console.log(res)
    } catch (error) {
        console.error(error.message)
    }
}

async function tokenize() {
    try {
        guard()
        const res = await o4p.tokenizeCard(card_info)
        console.log(res)
    } catch (error) {
        console.error(error.message)
    }
}


