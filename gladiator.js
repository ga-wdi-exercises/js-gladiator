class Gladiator {
  constructor(name, weapon){
    console.log(name);
    this.name = name;
    this.weapon= weapon;
  }

  sayEntrance(){
    console.log(`I am the great ${this.name}`)
  }
}
let ryan = new Gladiator ("Ryanimax", "Trident")

let max = new Gladiator ("Maximus", "Spear")

let crix = new Gladiator ("Crixus", "Club")
