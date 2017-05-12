class Arena{
	constructor(name){
		this.name = name.charAt(0).toUpperCase() + name.substr(1)
		this.gladiators = []
	}

	addGladiator(gladiator){
		if (this.gladiators.length < 2){
			this.gladiators.push(gladiator)
		}
	}

	fight(){
		if (this.gladiators.length == 2){

			let weaponOne = this.gladiators[0].weapon
			let weaponTwo = this.gladiators[1].weapon

			if (weaponOne == weaponTwo){
				this.gladiators = []
			}
			else if (weaponOne == "Trident" && weaponTwo == "Spear"){
				this.gladiators.pop()
			} 
			else if (weaponOne == "Spear" && weaponTwo == "Club"){
				this.gladiators.pop()
			}
			else if (weaponOne == "Club" && weaponTwo == "Trident"){
				this.gladiators.pop()
			}
			else {
				this.gladiators.shift()
			}
		}
	}

}
			//results in the elimination of one of the gladiators from the arena
// 			console.log("two gladiators!")
// 			console.log(this.gladiators[0].weapon, this.gladiators[1].weapon)
// .pop()
// .shift()

			//console.log(gladiators)
			// Winning conditions:
    		// * Trident beats Spear
    		// * Spear beats Club
    		// * Club beats Trident
    		// * If the two gladiators have the same weapon, they are both eliminated.
//this.gladiators.slice(0,3)