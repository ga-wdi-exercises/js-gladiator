class Arena {
	constructor(name){
		//toUpperCase will make every letter a capital, so we have to target just the first letter, then add on the rest
		this.name = name.charAt(0).toUpperCase() + name.slice(1);
	}
}