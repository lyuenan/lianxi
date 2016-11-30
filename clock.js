setInterval(function(){
	process.stdout.write('\033[0f');
	process.stdout.write('\033[2J');
	var d=new Date();
	var times=d.getHours()+":"+d.getMinutes()+":"+d.getSeconds();
	console.log(times)
},1000)