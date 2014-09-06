# Crude Ownuser

> A plugin for [Crude][] enforcing own user policy on all routes.

[![Build Status](https://secure.travis-ci.org/thanpolas/crude-ownuser.png?branch=master)](http://travis-ci.org/thanpolas/crude-ownuser)

## Install

~~~Install the module using NPM:~~~

### >>>>>> NOT PUBLISHED YET <<<<<<

```
npm install crude-ownuser --save
```
## <a name='TOC'>Table of Contents</a>

1. [Overview](#overview)
1. [API](#api)

## Overview

The Crude OwnUser package will make sure all incoming CRUD requests are owned by their respective user.

## API

**[[⬆]](#TOC)**

### <a name='using'>Using Crude OwnUser</a>


```js
var crude = require('crude');
var ownuser = require('crude-ownuser');

var userCrude = crude('/user', controller);

userCrude.use(ownUser({
    // The property in the request object that represents the user id.
    requestProperty: 'userId',
    // The schema attribute that represents the user id.
    schemaProperty: 'userId',
}));

```

## Release History

- **v0.0.1**, *TBD*
    - Big Bang

## License

Copyright (c) 2014 [Thanasis Polychronakis][thanpolas]. Licensed under the MIT license.

[crude]: https://github.com/thanpolas/crude
[thanpolas]: http://thanpol.as
