
class Gladiator {
    constructor(name,weapon){
        this.name = name
        if (weapon == "Spear" || weapon == "Trident" || weapon == "Club") {
            this.weapon = weapon
        } else {
            throw new Error("That weapon is now allowed in this arena.")
        }
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
 
    fight(gladiatorOne, gladiatorTwo){
        if (gladiatorOne.weapon == "Trident" && gladiatorTwo.weapon == "Spear"){
            console.log( gladiatorOne.name + " used the " + gladiatorOne.weapon + " to win!")
        }
        else if (gladiatorOne.weapon == "Spear" && gladiatorTwo.weapon == "Club") {
            console.log( gladiatorOne.name + " used the " + gladiatorOne.weapon + " to win!")
        } 
        else if (gladiatorOne.weapon == "Club" && gladiatorTwo.weapon == "Trident") {
            console.log( gladiatorOne.name + " used the " + gladiatorOne.weapon + " to win!")
        }
        else {
            console.log( gladiatorTwo.name + " wins!")
        }
    }
}

var max = new Gladiator("Maximus","Trident")
var titus = new Gladiator("Titus","Spear")
var andronicus = new Gladiator("Andronicus","Club")
var colosseum = new Arena("Colosseum")

// Test cases
// colosseum.addGladiator(max)
// colosseum.addGladiator(titus)

// colosseum.addGladiator(titus)
// colosseum.addGladiator(andronicus)

// colosseum.addGladiator(andronicus)
// colosseum.addGladiator(max)




