import one4pay from "../index.js";

let token;
const btn_login = document.querySelector("#login");
const btn_getCurrencies = document.querySelector("#get_currencies")

const user = {
    username: 'o4padmin',
    password: '12304padm!n'
}

btn_login.addEventListener("click", () => auth(user))
btn_getCurrencies.addEventListener("click", () =>task())

async function auth(user) {
    token = await one4pay.login(user)
    console.log(token)
}

async function task() {
    const o4p = new one4pay.o4p(token)
    const res = await o4p.getAvailableCurrencies()
    console.log(res)
}


