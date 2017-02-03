class Gladiator {
    constructor(name, weapon) {
        this.name = name
        this.weapon = weapon

    }

}
// trident > spear
// spear > club
//club > trident
// if have same weapons both die
class Arena {
    constructor(name, gladiators = []) {
        this.name = (name.charAt(0).toUpperCase() + name.slice(1))
        this.gladiators = gladiators

    }
    addGladiator(name) {
        if (this.gladiators.length < 2) {
            this.gladiators.push(name)
        } else {
            alert("to many dudes in this piece")
        }
    }
    fight() {
    	if (this.gladiators.length = 2){
    		let fighterOneWeapon = this.gladiators[0].weapon
    		let fighterTwoWeapon = this.gladiators[1].weapon
    		console.log(fighterOneWeapon)
    	}

    }
    	
}
var max = new Gladiator('Sam', 'spear')
var george = new Gladiator('george','trident')
var bigOne = new Arena("theatreofentertainment")
console.log(bigOne)
bigOne.addGladiator(max)
bigOne.addGladiator(george)
console.log(bigOne.gladiators[0].weapon)
bigOne.fight()

    
