class Gladiator {
  constructor (name, weapon)
  {
    this.name = name
    weapon = weapon.toLowerCase();
    if (weapon == "trident" || "spear" || "club")
    {
    this.weapon = weapon;
    }
    else
    {
      weapon = "trident";
    }
  }
}

class Arena {
  constructor (name)
  {
    this.name = name;
    this.gladiators = [];
  }
  addGladiator(gladiator){
    if (this.gladiators.length == 2) {
      this.gladiators.pop();
      this.gladiators.unshift(gladiator)
    }
    else{
    this.gladiators.push(gladiator);
    }
  }
  fight(){
    var weaponArray = [this.gladiators[0].weapon,this.gladiators[1].weapon];
    weaponArray.sort();
    var weaponToRemove;
    if (this.gladiators.length == 2) {
      if(weaponArray[0] == weaponArray[1]) {
          this.gladiators = [];
      }
      else
      {
        if (weaponArray[0] == "spear") {
        weaponToRemove = weaponArray[0];
        }
        if(weaponArray[0] == "club" && weaponArray[1] == "trident") {
        weaponToRemove = weaponArray[1];
        }
        else{
        weaponToRemove = weaponArray[0];
        }
          if (this.gladiators[0].weapon==weaponToRemove){
          this.gladiators.shift();
          }
          else{
          this.gladiators.pop();
          }
      }
      }
  }
  }
