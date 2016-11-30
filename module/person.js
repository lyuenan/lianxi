function Person(name,age){
	this.name=name;
	this.age=age
}
Person.prototype.info=function(){
	return this.name+","+this.age;
}
exports.Person=Person;