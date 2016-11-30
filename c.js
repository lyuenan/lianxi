/*var dd="lyuenan";
function fun(){
	console.log("this is b  name="+dd)
}
//global.fun=fun;
module.exports.fun=fun;
module.exports.dd=dd;*/
var Person=require("./module/person.js");
var time1=require("./module/time.js")
var p=new Person.Person("刘越男",24);
//console.log(p.info()); 
time1.timeremain(10)