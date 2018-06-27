var http=require('http');

var server=http.createServer(function(req,res){  //Server created with request and response objects
  res.writeHead(200,{'Content-Type':'Text/Plain'});  //status and content type for Header
  console.log('Request was madde for page : '+req.url); /// request url
  res.end('Hey There!, server has been started');  //end of response
});


///Setting up port ort settitng up IP and Port
//This is for localhost IP address 127.0.0.1 and port 3000 for acknowledgement

server.listen(3000,'127.0.0.1');
console.log('server is running on port 3000 on localhost');
