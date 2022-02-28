import one4pay from "../index.js";

let token;

const user = {
    username: 'admin',
    password: 'password'
}

async function auth(user) {
    token = await one4pay.login(user)
    // console.log(token)
    task(token)
}
auth(user)

async function task() {
    const o4p = new one4pay.o4p(token)
    const res = await o4p.getAvailableCurrencies()
    console.log(res)
}


