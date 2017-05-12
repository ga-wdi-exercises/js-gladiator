function firstLetterUC(arenaName){
  return this.arenaName = arenaName.replace(/\w\S*/g, function(upperCase){
    return upperCase.charAt(0).toUpperCase() + upperCase.substr(1).toLowerCase();
  });
}
class Arena{
  constructor(arenaName){
    this.arenaName = firstLetterUC(arenaName);
    console.log(this.arenaName);
  }
  addGladiator(name){
    if(gladiatorsInArena.length > 2){
      // gladiatorsInArena.name = this.name;
      // gladiatorsInArena.weapon = this.weapon;
      gladiatorsInArena.push(name)
      console.log(gladiatorsInArena);
    }
    else if(gladiatorsInArena > 2){
      return false;
    }
    else{
      // fight();
      console.log(gladiatorsInArena);
    }
  }
  fight(name, weapon){
    switch(weapon){

    }
  }
}

const colosseum = new Arena("megalopolis");
var max2 = new Gladiator("Maximus","Trident");
var titus2 = new Gladiator("Titus","Sword");
var andronicus2 = new Gladiator("Andronicus","Club");
