
class Gladiator {
  constructor(name, weapon) {
    this.name = name.charAt(0).toUpperCase() + name.slice(1)
    this.weapon = weapon
  }
}

var marcus = new Gladiator("Marcus", "Spear")
var xerxes = new Gladiator("Xerxes", "Club")
var alexander = new Gladiator("Alexander", "Trident")
