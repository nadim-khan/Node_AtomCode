var express=require('express');//express module returns a function 
//which is stord by app
var app=express();
app.get('/',function(req,res){
    //res.send('This is the Home page');
    res.sendFile(__dirname+'/index.html');
    console.log('User requested for Home page');
});
app.get('/contact',function(req,res){
    //res.send('This is the Contact page');
    res.sendFile(__dirname+'/contact.html');
    console.log('User requested for Contact page');
});
app.get('/profile/:id',function(req,res){
    res.send('You have requested for Id : '+req.params.id);
    console.log('User Requested for ID : '+req.params.id+' inside profile page ');
});
app.listen(3000);
