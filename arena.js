class Gladiator {
  constructor(name, weapon){
    this.name = name;
    this.weapon = weapon;
  }
}


class Arena {
  constructor(arena) {
    this.arena = arena;
    this.gladiators = [];
  }
  addGladiator(gladiators) {
    if (this.gladiators.length < 2) {
      return this.gladiators.push(gladiators);
    } else alert(`There are two gladiators in the arena right now\nPlease wait`);
  }

  fight() {
    for (var i = 0; i <= this.gladiators.length; i++) {
      if (this.gladiators[i].weapon === "Trident") {
        var trident = this.gladiators[i];
      } else if (this.gladiators[i].weapon === "Club") {
        var club = this.gladiators[i];
      } else if (this.gladiators[i].weapon === "Spear") {
        var spear = this.gladiators[i];
      }
      if (trident && spear) {
        alert(`${trident.name}(Trident) VS ${spear.name}(Spear)`);
        this.gladiators.pop(spear);
        alert(`Winner is ${this.gladiators[0].name}`);
        console.log(colosseum.gladiators);
      } else if (spear && club) {
        alert(`${spear.name}(Spear) VS ${club.name}(Club)`);
        this.gladiators.pop(club);
        alert(`Winner is ${this.gladiators[0].name}`);
        console.log(colosseum.gladiators);
      } else if (club && trident) {
        alert(`${club.name}(Club) VS ${trident.name}(Trident)`);
        this.gladiators.pop(trident);
        alert(`Winner is ${this.gladiators[0].name}`);
        console.log(colosseum.gladiators);
      } else if (this.gladiators[0].weapon === this.gladiators[1].weapon) {
        alert(`${this.gladiators[0].name}(${this.gladiators[0].weapon}) VS ${this.gladiators[1].name}(${this.gladiators[1].weapon})`);
        alert(`both ${this.gladiators[0].name} & ${this.gladiators[1].name} were eliminated `)
        this.gladiators = [];
        console.log(colosseum.gladiators);
      }
    }
  }

}


var max = new Gladiator("Maximus","Trident")
var titus = new Gladiator("Titus","Spear")
var andronicus = new Gladiator("Andronicus","Club")
var colosseum = new Arena("colosseum");
colosseum.addGladiator(max)
colosseum.addGladiator(titus)
