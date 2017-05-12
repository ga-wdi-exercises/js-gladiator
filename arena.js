class Arena{
	constructor(name){

		this.name = name
		this.cap(name)
		this.gladiators = []
	}
	cap(name){
			let firstL = name.charAt(0).toUpperCase()
			let rest = name.slice(1)
			this.name = firstL + rest
		}

	addGladiator(fighter){
		this.gladiators.push(fighter)
		if (this.gladiators.length > 2) {
			this.gladiators.shift()
		}
	}
	fight(){

		let fighter1 = this.gladiators[0]
		let fighter2 = this.gladiators[1]

	if (this.gladiators.length === 2) {
		if (fighter1.weapon === fighter2.weapon) {
			console.log("Both fighters were eliminated...")
		}else if (fighter1.weapon === "Spear") {

			if (fighter2.weapon === "Club") {
				this.gladiators.pop()
			}else {
				this.gladiators.shift()
			}
		}else if (fighter1.weapon === "Club") {
			if (fighter2.weapon === "Trident") {
				this.gladiators.pop()
			}else{
				this.gladiators.shift()
			}

		}else if (this.fighter1.weapon === "Trident") {
			if (this.fighter2.weapon === "Spear") {
				this.gladiators.pop()
			}else{
				this.gladiators.shift()
			}
		}else{
			return "error"
		}

	}else{
		console.log(`${this.gladiators[0]} needs an opponet!`)
	}
	}
}

const colli = new Arena("colosseum")