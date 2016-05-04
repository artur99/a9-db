# a9-db
Storage plugin for node.js

#Install

`npm install a9-db`

#Example
```
var db = {
    users: require('a9-db').init('users'),
    logs: require('a9-db').init('users'),

};
db.users.put('user7', {data_object:'data'});

db.logs.get('user7', function(obj,err){
    console.log(obj);
})

```
