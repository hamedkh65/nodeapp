/* if we want to use ES6 import instead of require we should do 3 step
1. we should ensure that we use the latest version of node
2. use (node --experimental-modules app.js) instead of node app.js
3. add the ("type": "module") property line in our package.json file
** An alternative is to avoid adding the "type": "module" line in your package.json file 
and instead rename your app.js file (or whatever) to app.mjs.  */
import express from 'express';
//var express = require('express');

var app = express();

app.get('/', function(req, res){
    res.send('<h1>Welcome</h1>')
});
app.get('/about/:title', function(req, res){
    res.send('<h1>'+req.params.title+'</h1>')
});

app.listen(3000, function(){
    console.log('server is running..');
});
