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
    removeGladiator(name) {
            this.gladiators.remove(name)
        }
        // fight() {
        //     if (this.gladiators.length = 2) {
        //         let oneWeap = this.gladiators[0].weapon
        //         let twoWeap = this.gladiators[1].weapon
        //         if (oneWeap == twoWeap) {
        //             this.gladiators = []
        //             console.log('both are dead')
        //         } else if (oneWeap === spear) {
        //             if (twoWeap === trident) {
        //                 console.log('player two wins')
        //                     //remove player 1
        //             }
        //             if (twoWeap === club) {
        //                 console.log('player One Wins')
        //                 //remove player 2
        //             }

    //         } else if (oneWeap === trident) {
    //             if (twoWeap === spear) {
    //                 console.log('player one wins')
    //                     //remove player 2
    //             }
    //             if (twoWeap === club) {
    //                 console.log('player two Wins')
    //                 //remove player 1
    //             }

    //         } else if (oneWeap === club) {
    //             if (twoWeap === trident) {
    //                 console.log('player two wins')
    //                     //remove player 1
    //             }
    //             if (twoWeap === spear) {
    //                 console.log('player One Wins')
    //             }

    //         }

}


var max = new Gladiator('Sam', 'spear')
var george = new Gladiator('george', 'trident')
var bigOne = new Arena("theatreofentertainment")
console.log(bigOne)
bigOne.addGladiator(max)
bigOne.addGladiator(george)
console.log(bigOne.gladiators[0].weapon)
bigOne.removeGladiator(sam)