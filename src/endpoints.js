const base_url = "https://api.one4pay.com/"

export const URLs = {
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
    // remove_card: {
    //     url: base_url + "tokenization/remove-card/" + (CARDTOKEN || ""),
    //     method: "DELETE",
    // },
}