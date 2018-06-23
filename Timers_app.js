console.log("Hello friends !! chai pii lo !");
//windows.console.log("hello");
setTimeout(function(){
  console.log('3 sec have passed , Chai pii lo fir se');
},3000);

var time=0;
var timer=setInterval(function(){

  time+=2;

  console.log('you have had Chai at every '+time+' seconds ');
  if(time>10){
  console.log('Dinbhar piina hai kya !');
  clearInterval(timer);
}
  },2000);
