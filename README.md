﻿# o4p
A Javascript SDK and NPM package for one4pay(fintech) API

# Installation
Run  
```
npm i o4p
```

# Use:
To use this package in your project, import the method below.
```
import one4pay from "o4p";

let o4p = new one4pay(); //- instantiate the class
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

one4pay.login(user).then((res) => console.log(res));
o4p = new one4pay(token) //- set a new instance of the sdk with the token generated.
```

# Transaction Processing

## Get Available Currencies
This method calls the endpoint to retrieve all available currencies. An array of available of currencies is returned.

```
o4p.getAvailableCurrencies().then((res) => console.log(res));
```

## Direct Pay
This method calls the endpoint to process an online transaction via direct api. This method takes in an object containing transactional details as a parameter.

```
const payment_info = {
    merchantId, //- Your merchant ID 
    currencyCode, //- Transaction currency. Should be one of the available currencies 
    cardDetails, //- Encoded credit card details 
    reference, //- Unique transaction reference 
    originatingApplicationName, //- Application name where the transaction was initiated 
    amount, //- Transaction amount 
    paymentMethod, //- Payment method to be used when processing transaction 
    apiMethod, //- API method for the transaction. Either one4pay or bank 
    sourceType, //- Transaction type 
    failureUrl, //- Failed transaction return url 
    returnUrl, //- Success Transaction return url 
    saveCard //- Whether to save card or not (true / false) 
}

o4p.directPay(payment_info).then((res) => console.log(res));
```

## Hosted Checkout
This method calls the endpoint that initiates hosted checkout and returns a checkoutUrl. An object parameter containing the checkout info is passed into the method.

```
const checkout_info = {
    merchantId, //- Your merchant ID 
    currency,  //- Transaction currency. Should be one of the available currencies 
    merchantReference, //- Unique transaction reference 
    amount, //- Transaction amount 
    paymentMethod, //- Payment method to be used when processing transaction 
    returnUrl //- Success Transaction return url 
}

o4p.initiateCheckout(checkout_info).then((res) => console.log(res));
```

## Tokenization - Tokenize card
This method calls the endpoint to tokenize credit card and returns a card token. It takes in an object parameter containing the card information.

```
const card_info = {
    merchantId, //- Your merchant ID 
    cardDetails //- Encoded credit card details 
}

o4p.tokenizeCard(card_info).then((res) => console.log(res));
```

## Remove Card
This method calls the endpoint to delete tokenized credit card. It takes in the credit card token as a parameter.

```
o4p.removeCard(CARDTOKEN).then((res) => console.log(res));
```

## Footnote
This project is a demo SDK for One4Pay, a fintech company.

## Thank you
