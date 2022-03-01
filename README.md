## o4p-sdk
A simple Javascript SDK demo for one4pay API

## Installation
Run  `npm i o4p-sdk`

# Use:
To use this package in your project, import the method below.
```
import one4pay from "o4p-sdk";

let token; //- declare a global variable for the generated user token
let o4p = new one4pay.transaction(); //- instantiate the class
```

## Features:

# Authentication - Login
The login method calls the login endpoint. It takes in a parameter the parameter should be an object containing a user info. A token is generated and returned from the login method.

```
const user = {
    username,
    password
}

one4pay.login(user) //NOTE: This is a promised based method.
o4p = new one4pay.transaction(token) //- set a new instance of the sdk with the token generated.
```

# Transaction Processing

# Get Available Currencies
This method calls the endpoint to retrieve all available currencies.