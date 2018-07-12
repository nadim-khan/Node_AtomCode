var bodyParser= require('body-parser');
//mongo db
//Step1
var mongoose=require('mongoose');

//Step 2:-connect to database Mlab
mongoose.connect('mongodb://Aleena:143Aleena@ds235711.mlab.com:35711/todo1',{ useNewUrlParser: true });

//Step 3:-create a Schema-- this is like a blueprint
var todoSchema=new mongoose.Schema({
  item: String
});
//Step 4:-build a model for todo schema
var Todo=mongoose.model('Todo',todoSchema);
//var data=[{item:'Goto Office'},{item:'Ready for Gym'},{item:'Kick some coding ass!!'}];
//Step 5:-pushing object into DB, it return a object with save method on it
//var itemOne=Todo({item:'Buy Flowers'}).save(function(err){// this functin i a callback function
//  if(err) throw err;
//  cosole.log('Item saved to the Database');
//});
var urlencodedParser = bodyParser.urlencoded({ extended: false });//Middleware to handle POST Requests
// this is to control or manipulate the data(C of MVC architecture)
module.exports= function(app) {

  app.get('/todo', function(req,res){
    console.log('Get method called inside todoController');
    // Extracting data from Mongo DB/schema from database and pass it to the view
    Todo.find({},function(err,data){//empty{}-from Todo model data ,,find will take place to find all items or perticular item from the collection
      if (err) throw err;
      res.render('todo',{todos: data});
    });
    //Todo.find({item:'Buy Flower'})//it will find perticular item from DB.if it exist
    //and has a callback function
  });

  app.post('/todo', urlencodedParser, function(req,res){
    console.log('POST method called inside todoController ');
    //get data from  the view and add it to the view
    var newTodo=Todo(req.body).save(function(err,data){
      if (err) throw err;
      res.json(data);
    })
      //res.render('contactSuccess',{data: req.body});//route to success page on submit
});

  app.delete('/todo/:item', function(req,res){
    console.log('xx---Delete method called inside todoController---xx');
    //Delete the request from mongo db
    Todo.find({item:req.params.item.replace(/\-/g, " ")}).remove(function(err,data){
      if (err) throw err;
      res.json(data);
    });
  });
}