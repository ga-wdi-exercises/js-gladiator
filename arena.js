class Arena {
  constructor(name, gladiators) {
    this.name = name.charAt(0).toUpperCase()+name.substr(1).toLowerCase()
    this.gladiators = []
  }
  addGladiator(gladiators) {
    this.gladiators.push(gladiators)
    if (this.gladiators.length > 1) {
      this.gladiators.pop()
    }
  }
  fight() {
    var weapons = ["Trident", "Spear", "Club"]
    var wins = {}
    weapons.forEach(function(weapon, i) {
    wins[weapon] = {}
    wins[weapon][weapon] = "Gladiators kill each other."
    wins[weapon][weapons[(i+1)%3]] = weapons[(i+3)%3] + " wins."
    wins[weapon][weapons[(i+2)%3]] = weapons + " wins."
  })
  function compare(weapon1, weapon2) {
    return (wins[weapon1] || {}[weapon2] || "Invalid choice")
  }
}
}
var max = new Gladiator("Maximus","Trident")
var titus = new Gladiator("Titus","Spear")
var colosseum = new Arena("Colosseum")
colosseum.addGladiator(max)
colosseum.addGladiator(titus)
colosseum.fight()
console.log(colosseum.gladiators)
