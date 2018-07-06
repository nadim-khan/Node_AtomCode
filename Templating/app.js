var express=require('express');//express module returns a function 
//which is stord by app
var app=express();

app.set('view engine','ejs');/// setting a view as ejs

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
    var data={ age: 25, job:'Software Engineer',hobby:['Coding','Playing','Sleeping']};
    //res.send('You have requested for Id : '+req.params.id);
    //console.log('User Requested for ID : '+req.params.id+' inside profile page ');
    res.render('profile', {person: req.params.id, data:data});
    console.log('User requested for '+req.url+' page');
});
app.listen(3000);

