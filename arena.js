class Arena {
  constructor (name) {
    this.name = name.charAt(0).toUpperCase() + name.slice(1);
    this.gladiators = []
  }
  addGladiator (name) {
    if (this.gladiators.length < 2) {
      this.gladiators.push(name)
    }
  }
  removeGladiator (name) {
    this.gladiators.remove(name)
  }
  fight() {
    if (this.gladiators.length === 2) {
      let first = this.gladiators[0].weapon
      let second = this.gladiators[1].weapon
      if (first == second) {
        this.gladiators.pop();
        console.log("both are eliminated");
      } else if (first == "Trident" && second == "Spear") {
        this.gladiators.pop();
      } else if (first == "Spear" && second == "Sword") {
        this.gladiators.pop();
      } else if (first == "Sword" && second == "Trident") {
        this.gladiators.pop();
      } else if (first == "Spear" && second == "Trident") {
        this.gladiators.pop();
      } else if (first == "Sword" && second == "Spear") {
        this.gladiators.pop();
      } else if (first == "Sword" && second == "Trident") {
        this.gladiators.pop();
      } else {
        console.log("No one get eliminated");
      }
    }
  }
}

var max = new Gladiator("Maximus","Trident")
var titus = new Gladiator("Titus","Spear")
var colosseum = new Arena("Colosseum")
console.log(colosseum.name);
colosseum.addGladiator(max)
colosseum.addGladiator(titus)
colosseum.addGladiator(andronicus);
colosseum.fight()
console.log(colosseum.gladiators)


// Winning conditions:
// Trident beats Spear
// Spear beats Club
// Club beats Trident
// If the two gladiators have the same weapon, they are both eliminated.
