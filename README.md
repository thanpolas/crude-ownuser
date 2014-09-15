# Crude Ownuser

> A plugin for [Crude][] enforcing own user policy on all routes.

[![Build Status](https://secure.travis-ci.org/thanpolas/crude-ownuser.png?branch=master)](http://travis-ci.org/thanpolas/crude-ownuser)

## Install

Install the module using NPM

```
npm install crude-ownuser --save
```

## Documentation

The Crud Own User package applies policies to all CRUD OPs that ensure only records belonging to the current user are being read, edited or deleted.

### Quick Use

```js
var crude = require('crude');
var crudeOwnUser = require('crude-ownuser');

var userCrude = crude('/user', controller);

crudeOwnUser(userCrude, {
    // Where to expect the User Data Object on the Express Request Object.
    expressUdoAttribute: 'user',

    // The attribute representing the User Id on the Express Request Object.
    expressUdoIdAttribute: 'id',

    // How the user id attribute is named on the model.
    schemaUserId: 'userId',
});

```

The Crude Own User package will enforce the policy by augmenting the incoming query with the user id of the current client. If the client is not authenticated (no express UDO is found) then a Not Authenticated (401) error will be returned to the client.

- **v0.0.1**, *TBD*
    - Big Bang

## License

Copyright (c) 2014 [Thanasis Polychronakis][thanpolas]. Licensed under the MIT license.

[crude]: https://github.com/thanpolas/crude
[thanpolas]: http://thanpol.as
