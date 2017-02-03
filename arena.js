class Arena {
  constructor(name) {
    this._name = name.toLowerCase().charAt(0).toUpperCase() + name.slice(1).toLowerCase();
    this._gladiators = [];
  }

  addGladiator(Gladiator) {
    if(this._gladiators.length >= 2){
      this._gladiators.pop();
    }
    this._gladiators.unshift(Gladiator);
  }

  fight() {
    console.log(`${this._gladiators[0]._name}, equipped with a ${this._gladiators[0]._weapon}, and ${this._gladiators[1]._name}, equipped with a ${this._gladiators[1]._weapon} enter the arena.`);
    let weapons = [this._gladiators[0]._weapon, this._gladiators[1]._weapon];
    let names = [this._gladiators[0]._name, this._gladiators[1]._name];

    if(names.indexOf("Maximus") !== -1) {
      console.log(`Maximus wins! Surprise surprise...`);
      let loser = this._gladiators.find(gladiator => gladiator._name !== "Maximus");
      let userDecision = prompt(`Put your thumbs up or down to allow ${loser._name} to remain or have them eliminated. [UP/DOWN]`);
      if (userDecision.toLowerCase() === "up") {
        console.log(`${loser._name} remains to fight another round.`);
      } else if (userDecision.toLowerCase() === "down") {
        console.log(`Very well. ${loser._name}, please exit the arena.`);
        this.remove(loser._name);
      }
      return;
    }

    if (weapons[0] === weapons[1]) {
      console.log(`They are both eliminated, as they are both equipped with a ${weapons[0]}.`);
      this.remove(names[0]);
      this.remove(names[1]);
    } else if ((weapons[0] === "Trident" && weapons[1] === "Spear") || (weapons[0] === "Spear" && weapons[1] === "Trident")) {
      let winner = this._gladiators.find(gladiator => gladiator._weapon === "Trident");
      let loser = this._gladiators.find(gladiator => gladiator._weapon === "Spear");
      console.log(`${winner._name}, with their ${winner._weapon}, wins! What a fight.`);
      let userDecision = prompt(`Put your thumbs up or down to allow ${loser._name} to remain or have them eliminated. [UP/DOWN]`);
      if (userDecision.toLowerCase() === "up") {
        console.log(`${loser._name} remains to fight another round.`);
      } else if (userDecision.toLowerCase() === "down") {
        console.log(`Very well. ${loser._name}, please exit the arena.`);
        this.remove(loser._name);
      }
    } else if ((weapons[0] === "Spear" && weapons[1] === "Club") || (weapons[0] === "Club" && weapons[1] === "Spear")) {
      let winner = this._gladiators.find(gladiator => gladiator._weapon === "Spear");
      let loser = this._gladiators.find(gladiator => gladiator._weapon === "Club");
      console.log(`${winner._name}, with their ${winner._weapon}, wins! What a fight.`);
      let userDecision = prompt(`Put your thumbs up or down to allow ${loser._name} to remain or have them eliminated. [UP/DOWN]`);
      if (userDecision.toLowerCase() === "up") {
        console.log(`${loser._name} remains to fight another round.`);
      } else if (userDecision.toLowerCase() === "down") {
        console.log(`Very well. ${loser._name}, please exit the arena.`);
        this.remove(loser._name);
      }
    } else if ((weapons[0] === "Club" && weapons[1] === "Trident") || (weapons[0] === "Trident" && weapons[1] === "Club")) {
      let winner = this._gladiators.find(gladiator => gladiator._weapon === "Club");
      let loser = this._gladiators.find(gladiator => gladiator._weapon === "Trident");
      console.log(`${winner._name}, with their ${winner._weapon}, wins! What a fight.`);
      let userDecision = prompt(`Put your thumbs up or down to allow ${loser._name} to remain or have them eliminated. [UP/DOWN]`);
      if (userDecision.toLowerCase() === "up") {
        console.log(`${loser._name} remains to fight another round.`);
      } else if (userDecision.toLowerCase() === "down") {
        console.log(`Very well. ${loser._name}, please exit the arena.`);
        this.remove(loser._name);
      }
    } else if (weapons.indexOf("Rubber Chicken") !== -1) {
      let winner = this._gladiators.find(gladiator => gladiator._weapon === "Rubber Chicken");
      let loser = this._gladiators.find(gladiator => gladiator._weapon !== "Rubber Chicken");
      console.log(`Against all odds, ${winner} has won with a Rubber Chicken!`);
      let userDecision = prompt(`Put your thumbs up or down to allow ${loser._name} to remain or have them eliminated. [UP/DOWN]`);
      if (userDecision.toLowerCase() === "up") {
        console.log(`${loser._name} remains to fight another round.`);
      } else if (userDecision.toLowerCase() === "down") {
        console.log(`Very well. ${loser._name}, please exit the arena.`);
        this.remove(loser._name);
      }
    }
  }

  remove(name) {
    let nombre = name.toLowerCase().charAt(0).toUpperCase() + name.slice(1).toLowerCase();
    let gladiator = this._gladiators.find(gladiator => gladiator._name === nombre);
    this._gladiators.splice(this._gladiators.indexOf(gladiator), 1);
    console.log(`${gladiator._name} has left the arena.`);
  }

  entertained() {
    let names = [this._gladiators[0]._name, this._gladiators[1]._name];
    if(names.indexOf("Maximus") !== -1){
      console.log(`Maximus faces the crowd and yells, "ARE YOU NOT ENTERTAINED?"`);
      console.log(`The crowd roars. They are entertained.`);
    } else {
      console.log(`The crowd seems mildly interested in the fight. But they are more focused on eating and socializing, waiting for the mighty Maximus to enter the arena.`);
    }
  }

}

var colosseum = new Arena("Colosseum")
var max = new Gladiator("Maximus","Trident")
var titus = new Gladiator("Titus","Spear")
var andronicus = new Gladiator("Andronicus","Trident")
var colosseum = new Arena("Colosseum")
colosseum.addGladiator(max)
colosseum.addGladiator(titus)
colosseum.addGladiator(andronicus)

console.log(colosseum._gladiators.length)
