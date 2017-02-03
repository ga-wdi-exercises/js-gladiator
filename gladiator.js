class Gladiator {
  constructor(name, weapon) {
    if (weapon == "Trident" || weapon == "Spear" || weapon == "Club") {
    this.name = name
    this.weapon = weapon
  } else {
    throw "Only tridents, spears and clubs are allowed!"
  }
  }
}
// var spar = new Gladiator("Spartacus", "Trident")
// console.log(spar.name)
// console.log(spar.weapon)
