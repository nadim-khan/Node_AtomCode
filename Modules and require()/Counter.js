///passing array as argument to the function
//var array= ['Nadeem','Rahul','Vivek','Vijay'];
module.exports.counter = function (array){
  return 'There are '+array.length+' elementes in Array ';
};
//console.log(counter(['Nadeem','Rahul','Vivek']));
/// 2nd method

//console.log(counter(array));

//module.exports=counter;     //the part which you want to made available for require()



module.exports.addit = function(a,b){
  return `addition of the two numbers  are ${a+b }`;
};

module.exports.pi = 3.142;

/*
=counter;     //the part which you want to made available for require()
=addit;
=pi;
*/
