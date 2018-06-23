///passing array as argument to the function
var array= ['Nadeem','Rahul','Vivek','Vijay'];
var counter=function (array){
  console.log('There are '+array.length+' elementes in Array in 1st file');
}
console.log(counter(['Nadeem','Rahul','Vivek']));
/// 2nd method

//console.log(counter(array));

module.exports=counter;     //the part which you want to made available for require()
