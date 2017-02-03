class Arena {
  constructor(name){
    this.name = name.charAt(0).toUpperCase() + name.slice(1);
    this.gladiators = [];
  }//end constructor

  addGladiator(gladiator){
    if(this.gladiators.length < 2){
      this.gladiators.push(gladiator);
    }
  }//end add gladiators

  fight(){
    let weaponOne = this.gladiators[0].weapon.toUpperCase();
    let weaponTwo = this.gladiators[1].weapon.toUpperCase();
    let gladiatorOne = this.gladiators[0].name;
    let gladiatorTwo = this.gladiator[1].name;
    if(weaponOne == 'TRIDENT' && weaponTwo == 'SPEAR'){
      console.log(`${gladiatorOne} Wins!`);
    }else if(weaponOne == 'SPEAR' && weaponTwo == 'CLUB'){
            console.log(`${gladiatorOne } Wins!`);
    }else if(weaponeOne == 'CLUB' && weaponTwo == 'TRIDENT'){
          console.log(`${gladiatorOne } Wins!`);
    }else if(weaponeOne == weaponTwo){
      console.log(`${gladiatorOne} AND ${gladiatorTwo} Both Died`);
    }else{
      console.log(`${gladiatorTwo } Wins!`);
    }
  }//end fight

}//end class Arena

var max = new Gladiator("Maximus","Trident")
var titus = new Gladiator("Titus","Spear")
var andronicus = new Gladiator("Andronicus","Club")
var colosseum = new Arena("Colosseum")
colosseum.addGladiator(max)
colosseum.addGladiator(titus)
colosseum.addGladiator(andronicus)
console.log(colosseum.gladiators);
console.log(colosseum.gladiators.length) // => 2
