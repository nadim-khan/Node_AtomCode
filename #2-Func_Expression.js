///Normal function
function sayHello(){
  console.log(' Hello friends!! ');
}

///Calling sayHello function
sayHello();



///function Expression
//Function without name is anonymous Function
var sayBbye= function(){
  console.log ('Bbye Friends !!');
}

/// Calling Function Expression
sayBbye();


//// Calling one function from other function
function callOther(fun){
  console.log('Calling Bbye function from other function');
  fun();
}
callOther(sayBbye);
