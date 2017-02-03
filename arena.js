class Arena {
  constructor(name, spartans) {
    this.name = name.charAt(0).toUpperCase() + name.slice(1);
    console.log(`Welcome to the ${this.name}...${this.spartan1}`);
  }
  addGladiator(spartans) {
    if (spartans < 2) {
    this.spartan.push();
    console.log(`${this.spartan1} added to battle`);
  }
    // console.log(`Spartan has been added to Arena`);
  }
  Fight() {
    if (spartan1 > spartan2) {
      console.log(spartan1 + " defeats " + spartan1 + " with a BattleAxe swing");
    }
    this.fight1 = fight1;
    this.fight2 = fight2;
    this.fight3 = fight3;
    console.log();
  }
}
class Gladiators {
  constructor(spartan1, spartan2, spartan3) {
    this.spartan1 = spartan1;
    this.spartan2 = spartan2;
    this.spartan3 = spartan3;
  }
}

//Inside Arena Battle!

let fight1 = spartan1 + spartan2;
let fight2 = spartan1 + spartan3;
let fight3 = spartan2 + spartan3;


var colosseum = new Arena ("Ancient Ruins");

colosseum.addGladiator(spartan1);

console.log(colosseum.name)
