# a9-db
## About
Storage plugin for node.js. All the data will be stored in folders & files in a folder called `.a9db` in the root in a JSON format.

## Installation

```shell
npm install a9-db
```

## Example
```js
var users = require('a9-db').init('users');

users.set('user7', {data_object:'data'});

users.get('user7', function(obj,err){
    console.log(obj);
});

```

## Usage
```js
var db = require('a9-db').init('users');
//will return the database object
```
```js
db.set(key, value);
//will set value for a key in the database in the db variable
```
```js
db.get(key, callback);
//will read the value from the key and will be returned in the first parameter of the callback function, (data variable in the example)
```
