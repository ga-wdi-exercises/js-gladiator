class Gladiator {
  constructor(name, weapon,strength) {
    this.name = name;
    this.weapon = weapon;
    this.strength = strength;

    // console.log("I'm the Captain Now...");
  }

}

var spartan1 = new Gladiator ("Dom", "BattleAxe", 10);
var spartan2 = new Gladiator ("Xerxes", "Sword", 8);
var spartan3 = new Gladiator ("Leonidas", "Scimitar", 6);

console.log(spartan1.name,spartan1.weapon);
console.log(spartan2.name,spartan2.weapon);
console.log(spartan3.name,spartan3.weapon);
