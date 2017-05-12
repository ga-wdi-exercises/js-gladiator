class Arena{
	constructor(name){

		this.name = name
		this.gladiators = []
	}
	cap(name){
			let firstL = name.charAt(0).toUpperCase()
			let rest = name.slice(1)
			this.name = firstL + rest
		}

	addGladiator(fighter){
		this.gladiators.push(fighter)
	}
}