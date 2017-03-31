class Arena {
	constructor(name, gladiators){
		//toUpperCase will make every letter a capital, so we have to target just the first letter, then add on the rest
		this.name = name.charAt(0).toUpperCase() + name.slice(1);
		this.gladiators = [];
	}
	addGladiator(newGladiator){
		if (this.gladiators.length < 2){
			this.gladiators.push(newGladiator);
		}
	}
}