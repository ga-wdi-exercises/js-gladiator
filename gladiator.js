class Gladiator{
  constructor(name, weapon){
    this.name = name;
    if(weapon.toUpperCase() == 'TRIDENT'|| weapon.toUpperCase() == 'CLUB' || weapon.toUpperCase() == 'SPEAR'){
      this.weapon = weapon;
    }else{
      throw new UserException('Invalid weapon type');
    }//end else
  }//end constructor
}//end Class Gladiator

// var max = new Gladiator("Maximus","Trident");
//
// console.log(max.name) // "Maximus"
// console.log(max.weapon) // "Trident"
