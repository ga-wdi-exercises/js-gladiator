class Gladiator {
    constructor(name,weapon){
        this.name = name
        if (weapon == "Spear" || weapon == "Trident" || weapon == "Club") {
            this.weapon = weapon
        } else {
            throw new Error("That weapon is now allowed in this arena.")
        }
        // if (["Spear", "Trident", "Club"].includes(weapon)){
        //     this.weapon = weapon
        // }
    }
}

class Arena {
    constructor(name, gladiators) {
        this.name = name.charAt(0).toUpperCase() + name.slice(1)
        this.gladiators = []
    }
    addGladiator(name){
        if (this.gladiators.length < 2) {
            this.gladiators.push(name)
        } else {
            throw new Error("There can be only two.")
        }
    }
}

var max = new Gladiator("Maximus","Trident")
var titus = new Gladiator("Titus","Spear")
var andronicus = new Gladiator("Andronicus","Club")
var colosseum = new Arena("Colosseum")
