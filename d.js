var dd="lyuenan";
function fun(){
	console.log("this is b  name="+dd)
}
//global.fun=fun;
module.exports.fun=fun;
module.exports.dd=dd;