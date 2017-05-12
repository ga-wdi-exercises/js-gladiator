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
			if (this.gladiators[0].name==="Maximus"||this.gladiators[1].name==="Maximus") {

				console.log(`Maximus has won!`)
				if (this.gladiators[0].name === "Maximus") {
					this.gladiators.pop()
				}else{
					this.gladiators.shift()
				}
				return

			}else if (fighter1.weapon === fighter2.weapon) {
				console.log("Both fighters were eliminated...")
				this.gladiators = []

			}else if (fighter1.weapon === "Spear") {

				if (fighter2.weapon === "Club") {
					this.gladiators.pop()
					console.log(`${this.gladiators[0].name} has won!`)
				}else {
					this.gladiators.shift()
					console.log(`${this.gladiators[0].name} has won!`)
				}
			}else if (fighter1.weapon === "Club") {
				if (fighter2.weapon === "Trident") {
					this.gladiators.pop()
					console.log(`${this.gladiators[0].name} has won!`)
				}else{
					this.gladiators.shift()
					console.log(`${this.gladiators[0].name} has won!`)
				}

			}else if (fighter1.weapon === "Trident") {
				if (fighter2.weapon === "Spear") {
					this.gladiators.pop()
					console.log(`${this.gladiators[0].name} has won!`)
				}else{
					this.gladiators.shift()
					console.log(`${this.gladiators[0].name} has won!`)
				}
			} /*else{
				return "error"
			}*/

		}else{
			console.log(`${this.gladiators[0]} needs an opponet!`)
		}
	}
}

const colli = new Arena("colosseum")