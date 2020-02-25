var http = require('http');
var fs = require('fs');
var server = http.createServer(function(req, res){
   /*  res.writeHead(200, {'Content-Type': 'text/plain'});
    res.end('hello!'); */
    fs.readFile('index.html', function(err, data){
        res.writeHead(200, {'Content-Type': 'text/html'});
        res.end(data);
    })
});
server.listen(1337, function(){
    console.log('Web Server is Running..');
    
});