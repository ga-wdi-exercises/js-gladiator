class Arena {
	constructor(name, gladiators = []){
		this.name = name
		this.gladiators = gladiators

	}
}

String.prototype.capitalize = function() {
    return this.charAt(0).toUpperCase() + this.slice(1);
}
console.log("hello world".capitalize())