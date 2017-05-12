class Arena {
  constructor(name) {
    this.name = name
    this.gladiators = []
  }

 // created addGladiator method to get gladiators into the Arena's gladiators array.
  addGladiator(gladiator) {
 // pushed gladiator
    this.gladiators.push(gladiator)
  }

  fight() {
 // stored arena's gladiators into an array.
    const [gladiator1, gladiator2] = this.gladiators

    const [weapon1, weapon2] = [gladiator1.weapon, gladiator2.weapon]

    if (weapon1 === "Trident" && weapon2 === "Spear") {
      this.gladiators.pop();
    }
  }
}




 // new Gladiator class which has a name "Maximus" and weapon "Trident"
    var max = new Gladiator("Maximus","Trident")

    var titus = new Gladiator("Titus","Spear")

// new arena name called Colosseum
    var arena = new Arena("Colosseum")
      console.log(arena.name);

// adding gladiators to the this.gladiators
    arena.addGladiator(max)
    arena.addGladiator(titus)

    console.log(arena.gladiators)

    // this.fight



// // new arena name called megalapolis
// var megalapolis = new Arena("megalopolis")
// console.log(megalapolis.name)
