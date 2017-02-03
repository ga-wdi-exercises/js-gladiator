class Gladiator {
	constructor(name, weapon){
		this.name = name
		this.weapon = weapon

	}

}
var max = new Gladiator('Sam', 'spear')

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
        // fight(){
        // 	this.gladiators[]
}
var bigOne = new Arena("theatreofentertainment")
console.log(bigOne)
bigOne.addGladiator(max)
console.log(bigOne)
// String.prototype.capitalize = function() {
//     return this.
// }
// console.log("hello world".capitalize())
