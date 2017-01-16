# a9-db
Storage plugin for node.js

#Install

```
npm install a9-db
```

#Example
```js
var db_users = require('a9-db').init('users');
var db_logs = require('a9-db').init('logs');

db_users.set('user7', {data_object:'data'});

db_users.get('user7', function(obj,err){
    console.log(obj);
})

```

#API
```
var db = require('a9-db').init('users');
//will return the database object
```
```
db.set(key, value);
//will set value for a key in the database in the db variable
```
```
db.get(key, callback);
//will read the value from the key and will be returned in the first parameter of the callback function, (data variable in the example)
```
