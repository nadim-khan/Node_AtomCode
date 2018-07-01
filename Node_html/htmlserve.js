var http = require('http');
var fs=require('fs');//Module for Files

var server=http.createServer(function(req,res){
    console.log('Request made for :'+req.url);
    res.writeHead(200,{'Content-Type':'Text/Html'});    
    var myRead=fs.createReadStream(__dirname+'/node.html','utf8');//to read file
    //var myWrite=fs.createWriteStream(__dirname+'/writeMe.txt');
    myRead.pipe(res);//Sending read files as the 
    //console.log(x);
    //res.end('Ending Response cycle For server');
});
server.listen(3000,'127.0.0.1');
console.log('Server created as localhost ');
console.log('Now Listening to port 3000 ');
//console.log('Request made for :'+req.url);


