class Arena {
  constructor(name) {
    this.name = capitalize(name);
    this.gladiators = [];
  }
  addGladiator(glad) {
    if (this.gladiators.length < 2) {
      this.gladiators.push(glad);
    }
    this.fight();
  }
  capitalize(name) {
    let nameArray = name.split(' ');
    let newName = '';
    for (let i = 0; i < nameArray.length; i++) {
      newName += (nameArray[i].charAt(0).toUpperCase() + nameArray[i].slice(1));
      if (i != (nameArray.length - 1)) {
        newName += " ";
      }
    }
    return newName;
    // basic version found here http://alvinalexander.com/javascript/how-to-capitalize-each-word-javascript-string
  }
  fight() {
    let g1 = this.gladiators[0];
    if (this.gladiators.length === 2) {
      let g2 = this.gladiators[1];
      console.log(`${g1.name} and ${g2.name} step into the arena...`);
      this.compare(g1, g2);
    } else {
      console.log(`${g1.name} is ready for a fight.`);
    }
  }
  compare(g1, g2) {
    var weapons = {};
    weapons[g1.weapon] = g1;
    weapons[g2.weapon] = g2;
    let hasSpear = Object.keys(weapons).includes("spear");
    let hasTrident = Object.keys(weapons).includes("trident");
    let hasClub = Object.keys(weapons).includes("club");
    let hasFists = Object.keys(weapons).includes("fists");

    if (g1.weapon == g2.weapon) {
      this.bothLose();
    } else if (hasFists) {
      let fister = weapons.fists;
      delete weapons.fists;
      // now that fists isn't in the object anymore, I can pass in the remaining gladiator using the line below.
      this.announceWin( weapons[Object.keys(weapons)[0]], fister)
    } else if (hasSpear && hasClub) {
      this.announceWin(weapons.spear, weapons.club);
    } else if (hasClub && hasTrident) {
      this.announceWin(weapons.club, weapons.trident);
    } else if (hasTrident && hasSpear) {
      this.announceWin(weapons.trident, weapons.spear);
    }
  }
  announceWin(winner, loser) {
    console.log(`${winner.name} WINS! ${loser.name} has left the arena in shame`);
    this.gladiators.splice(this.gladiators.indexOf(loser), 1);
    winner.wins++;
    return true;
  }
  bothLose() {
    console.log(`A stalemate! Both contestants leave ${this.name} in shame`);
    this.gladiators = [];
    return false;
  }
}

const tim = new Gladiator("TIMHOTHEP", "trident");
const rob1 = new Gladiator("FightBot 3000", "spear");
const rob2 = new Gladiator("cyber spartacus", "club");
const ryan = new Gladiator('ryan')
const battleDome = new Arena("the battle dome");
battleDome.addGladiator(tim);
battleDome.addGladiator(ryan);
