///passing array as argument to the function
var array= ['Nadeem','Rahul','Vivek','Vijay'];
var counter=function (array){
  console.log('There are '+array.length+' elementes in Array in 1st file');
}
console.log(counter(['Nadeem','Rahul','Vivek']));
/// 2nd method

//console.log(counter(array));

//module.exports=counter;     //the part which you want to made available for require()



var addit= function(a,b){
  return 'addition of the two numbers $a and $b are ${a+b}';
}

var pi =3.142


module.exports.counter=counter;     //the part which you want to made available for require()
module.exports.addit=addit;
module.exports.pi=pi;
