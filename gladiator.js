class Gladiator {
  constructor (name, weapon){
    this.name = name
    this.weapon = weapon
    if (this.weapon !== ('Spear' || 'Trident' || 'Club')) {
      throw'ERROR, INVALID WEAPON TYPE'

  }
}}

class Arena {
  constructor (name) {
    this.name = name.charAt(0).toUpperCase() + name.slice(1);
    gladiators = []
  }
  addGladiator(newGlad){
    if (this.gladiators.length < 2) {
  this.gladiator.push(newGlad) }
}
fight() {
  if (this.gladiators[0].weapon == this.gladiators[1].weapon){
    this.gladiators.splice(0,1)
    this.gladiators.splice(0,1)
} else if ((this.gladiators[0].weapon == "Trident" && this.gladiators[1] == "Spear") || (this.gladiators[0].weapon == "Spear" && this.gladiators[1] == "Club") || (this.gladiators[0].weapon == "Club" && this.gladiators[1] == "Trident")){
  this.gladiators.splice(1,1)
} else {
  this.gladiators.splice(0,1)
    }
  }

}
