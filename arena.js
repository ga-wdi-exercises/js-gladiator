class Arena {
  constructor(name){
    this.name = name;
    this.gladiator = [];
  }

  addGladiator(Gladiator) {
    this.gladiator.push(Gladiator);
    console.log(Gladiator)

  }


}
var colosseum = new Arena ("Colosseum");
// colosseum.addGladiator(max);
