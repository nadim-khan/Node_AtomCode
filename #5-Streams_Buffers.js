var http=require('http');
var fs=require('fs');//Module for Files

var myRead=fs.createReadStream(__dirname+'/readMe.txt','utf8');//to read file

var myWrite=fs.createWriteStream(__dirname+'/writeMe.txt');

myRead.on('data',function(chunk){     // Data - will receive first chunk of data and pass it on...
  console.log('New Chunk Received : ');
  console.log(chunk);
  console.log('Storing data to writeMe.txt file');
  myWrite.write(chunk);

});
//unlink(writeMe.txt);
