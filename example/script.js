import one4pay from "../index.js";

let token;

const user = {
    username: 'admin',
    password: 'password'
}

token = one4pay.login(user)

const o4p = new one4pay.o4p(token)

o4p.getAvailableCurrencies()