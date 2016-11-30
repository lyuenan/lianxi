function timeremain(n){
	console.log(n);
	var timer=setInterval(function(){
		
		process.stdout.write('\033[0f');
		process.stdout.write('\033[2J');

		if(n>0){
			n--;
		}else{
			clearInterval(timer)
		}
		console.log(n);	
		
	},1000);
}
exports.timeremain=timeremain;