function capitalize(name) {
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

class Gladiator {
  constructor(name, weapon = "fists", arena) {
    let weapons = ["trident", "spear", "club", "fists"];
    if (weapons.indexOf(weapon) !== -1) {
      this.weapon = weapon;
    } else {
      console.log("That's not a real weapon. Looks like you're using your fists");
      this.weapon = "fists";
    }
    this.name = capitalize(name);
  }
}

class Arena {
  constructor(name) {
    this.name = capitalize(name);
    this.gladiators = [];
  }
  addGladiator(glad) {
    if (this.gladiators.length < 2) {
      this.gladiators.push(glad);
    } else {
      console.log("You've already got enough gladiators. Time for a fight!");
    }
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
    let g2 = this.gladiators[1];
    console.log(g1, g2);
    this.compare(g1, g2);
  }
  compare(g1, g2) {
    var weapons = {};
    weapons[g1.weapon] = g1;
    weapons[g2.weapon] = g2;
    let hasSpear = Object.keys(weapons).includes("spear");
    let hasTrident = Object.keys(weapons).includes("trident");
    let hasClub = Object.keys(weapons).includes("club");

    if (hasSpear && hasClub) {
      this.announceWin(weapons.spear, weapons.club);
    } else if (hasClub && hasTrident) {
      this.announceWin(weapons.club, weapons.trident);
    } else if (hasTrident && hasSpear) {
      this.announceWin(weapons.trident, weapons.spear);
    }
  }
  announceWin(winner, loser) {
    console.log(`${winner.name} WINS! ${loser.name} has left the arena in shame`);
    return true;
  }
  bothLose() {
    console.log(`A stalemate! Both contestants leave ${this.name}in shame`);
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
battleDome.addGladiator(rob2);
