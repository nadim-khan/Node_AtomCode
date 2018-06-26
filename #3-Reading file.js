var fs=require('fs');

var readMe= fs.readFileSync('app1.txt','utf-8');
//the above method uses two parameters
//first- path, file
//second - charecter encoding , as each file is treated as Binary files

console.log(readMe);
fs.writeFileSync('writeMe.txt',readMe);


///Asynchronous Method
console.log('Asynchronous method');

var xyz= fs.readFileSync('app1.txt','utf-8',function(err, data){   //The 3rd parameter is for acknowledgement.
  console.log(data);
  fs.writefile('writeMe2.txt',data);
});
console.log(xyz);
