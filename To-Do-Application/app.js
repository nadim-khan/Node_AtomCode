var express=require('express');
var todoController=require('./controllers/todoController');
var app=express();

//set up template engine
app.set('view engine','ejs');

//Static files
app.use(express.static('./public'));

//Fire Controller
todoController(app);

///listen port
app.listen(3000);
console.log('Listening to port 3000');