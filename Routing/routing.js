var http = require('http');
var fs=require('fs');//Module for Files

var server=http.createServer(function(req,res){
    console.log('Current Request made for :'+req.url);
    if(req.url==="/"||req.url==="/home"){
        //cosole.log(Presenting (req.url));
        res.writeHead(200,{'Content-Type':'text/html'});
        fs.createReadStream(__dirname+'/index.html').pipe(res);
    }
    else if(req.url==="/contact"){
        //cosole.log(Presenting (req.url));
        res.writeHead(200,{'Content-Type':'text/html'});
        fs.createReadStream(__dirname+'/contact.html').pipe(res);
    }
    else{
        res.writeHead(404,{'Content-Type':'text/html'});
        fs.createReadStream(__dirname+'/thanks.html').pipe(res);
    }
});
server.listen(3000,'127.0.0.1');
console.log('Server created as localhost ');
console.log('Now Listening to port 3000 ');
//console.log('Request made for :'+req.url);


