class Gladiator {
  constructor(name,weapon){
  this.name=name;
  this.weapon=weapon;
  }
}
var max= new Gladiator ("Maximus","Spear")
console.log=(max.name)
console.log=(max.weapon)


var Adonis = new Gladiator ("Adonis","Sword")
console.log=(max.name)
console.log=(max.weapon)

var Claudius = new Gladiator ("Claudius","Sword")
console.log=(max.name)
console.log=(max.weapon)

var max = new Gladiator("Maximus","spear");
var colosseum = new Arena("Megalopolis");
colosseum.addGladiator(max);
console.log(colosseum.gladiators);

var Adonis = new Gladiator ("Adonis","Sword")
var colosseum = new Arena("Megalopolis");
colosseum.addGladiator(max);
console.log(colosseum.gladiators);


var Claudius = new Gladiator ("Adonis","Sword")
var colosseum = new Arena("Megalopolis");
colosseum.addGladiator(max);
console.log(colosseum.gladiators);


var max = new Gladiator("Maximus","spear");
var adonis = new Gladiator("Adonis","Sword");
var claudius = new Gladiator("Claudius","Sword");
var colosseum = new Arena("Colosseum");
colosseum.addGladiator(max);
colosseum.addGladiator(Adonis);
colosseum.addGladiator(Claudius);
console.log(colosseum.gladiators.length);
