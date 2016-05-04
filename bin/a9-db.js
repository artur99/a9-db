const fs = require('fs');
const a9_dbfoldername = '.a9db';
module.exports = {
    init: function(dbnm){
        dbnm = a9_filter_name(dbnm);
        a9_main_init(dbnm);
        return a9_get_all(dbnm);
    }
}

function a9_main_init(foldername){
    try {
        fs.mkdirSync(a9_dbfoldername);
    } catch(e) {
        if ( e.code != 'EEXIST' ){
            console.log("[Error: a9-db] Cannot create main database folder!");
            throw e;
        }
    }
    try {
        fs.mkdirSync(a9_dbfoldername+'/'+foldername);
    } catch(e) {
        if ( e.code != 'EEXIST' ){
            console.log("[Error: a9-db] Cannot create database folder!");
            throw e;
        }
    }
}
function a9_filter_name(name){
    if(typeof name == 'undefined') return 'main';
    var tofilter = '\\ / : * ? " < > |'.split(' ');
    name = name.toString();
    for(var i in tofilter)
        name = name.replace(tofilter[i], '-');
    return name;
}
function a9_get_all(dbname){
    var functions_object = {
        dbn: function(){
            return dbname;
        },
        set: function(filename, data){
            var filn = a9_filter_name(filename);
            if(typeof data != 'string') data = JSON.stringify(data);
            fs.writeFile(a9_dbfoldername+'/'+dbname+'/'+filn+'.data', data, 'utf8');
        },
        get: function(filename, cb){
            var filn = a9_filter_name(filename);
            fs.readFile(a9_dbfoldername+'/'+dbname+'/'+filn+'.data', 'utf8', function (err,data) {
                if(err) data=null;
                try{
                    data = JSON.parse(data);
                }catch(e){}
                cb(data, err);
            });
        }
    }
    return functions_object;
}
