class Gladiator {
  constructor (name, weapon){
    this.name = name;
    this.weapon = weapon;
  }
}

let max = new Gladiator ("Maximus", "Trident");
let titus = new Gladiator ("Titus", "Spear");
let andronicus = new Gladiator ("Andronicus", "Sword");

console.log(max.name);
console.log(max.weapon);
