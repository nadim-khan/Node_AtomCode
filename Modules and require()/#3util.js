var events = require('events');
var util = require('util'); //to inherit properties or emits

var person = function(name){
  this.name = name;
};


//inherits the person
util.inherits(person, events.EventEmitter)

var Nadim = new person('Nadim');
var Vivek = new person('Vivek');
var Avi = new person('Avi');
var people = [Nadim,Vivek,Avi]; ///Array

//Looping and calling objects of the array
people.forEach(function(person){
  person.on('speak', function(msg){
    console.log(person.name +' said '+msg);
  });  //attaching some events or Listeners(attaching custom events)
});

Nadim.emit('speak','Howdy!!');
Vivek.emit('speak','Sab Badhiya!');
Avi.emit('speak','Tumhara hi sahi hai :) ');
