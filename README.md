# o4p-sdk
A simple Javascript SDK demo for one4pay API

# Installation
Run  `npm i o4p-sdk`

# Use:
To use this package in your project, import the method below.
```
import one4pay from "o4p-sdk";

let token; //- declare a global variable for the generated user token
let o4p = new one4pay.transaction(); //- instantiate the class
```
## NOTE
All methods are promise based.

# Features:

## Authentication - Login
The login method calls the login endpoint. It takes in a parameter the parameter should be an object containing a user info. A token is generated and returned from the login method.

```
const user = {
    username,
    password
}

one4pay.login(user)
o4p = new one4pay.transaction(token) //- set a new instance of the sdk with the token generated.
```

# Transaction Processing

## Get Available Currencies
This method calls the endpoint to retrieve all available currencies. An array of available of currencies is returned.

```
o4p.getAvailableCurrencies()
```

## Direct Pay
This method calls the endpoint to process an online transaction via direct api. This method takes in an object containing transactional details as a parameter.

```
const payment_info = {
    merchantId, <!-- Your merchant ID -->
    currencyCode, <!-- Transaction currency. Should be one of the available currencies -->
    cardDetails, <!-- Encoded credit card details -->
    reference, <!-- Unique transaction reference -->
    originatingApplicationName, <!-- Application name where the transaction was initiated -->
    amount, <!-- Transaction amount -->
    paymentMethod, <!-- Payment method to be used when processing transaction -->
    apiMethod, <!-- API method for the transaction. Either one4pay or bank -->
    sourceType, <!-- Transaction type -->
    failureUrl, <!-- Failed transaction return url -->
    returnUrl, <!-- Success Transaction return url -->
    saveCard <!-- Whether to save card or not (true / false) -->
}

o4p.directPay(payment_info)
```

## Hosted Checkout
This method calls the endpoint that initiates hosted checkout and returns a checkoutUrl. An object parameter containing the checkout info is passed into the method.

```
const checkout_info = {
    merchantId, <!-- Your merchant ID -->
    currency,  <!-- Transaction currency. Should be one of the available currencies -->
    merchantReference, <!-- Unique transaction reference -->
    amount, <!-- Transaction amount -->
    paymentMethod, <!-- Payment method to be used when processing transaction -->
    returnUrl <!-- Success Transaction return url -->
}

o4p.initiateCheckout(checkout_info)
```

## Tokenization - Tokenize card
This method calls the endpoint to tokenize credit card and returns a card token. It takes in an object parameter containing the card information.

```
const card_info = {
    merchantId, <!-- Your merchant ID -->
    cardDetails <!-- Encoded credit card details -->
}

o4p.tokenizeCard(card_info)
```

## Remove Card
This method calls the endpoint to delete tokenized credit card. It takes in the credit card token as a parameter.

```
o4p.removeCard(CARDTOKEN)
```

# Footnote
This project is a demo SDK for One4Pay, a fintech company.

## Thank you