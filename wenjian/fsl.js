//var fs=require("fs")
const fs=require("fs");
//fs=5;
//console.log(fs)
fs.readFile("./t.txt",function(err,data){
	if(err){
		console.log(err)
	}else{
		console.log(data.toString())
	}
})