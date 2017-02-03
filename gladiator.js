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
    var weaponToKeep;
    if (this.gladiators.length == 2) {
      if(weaponArray[0] == weaponArray[1]) {
          this.gladiators = [];}
      else
      { if (weaponArray[0] == "spear") {
        weaponToKeep= weaponArray[1];}
        if(weaponArray[0] == "club" && weaponArray[1] == "trident") {
        weaponToKeep = weaponArray[0];}
        else{
        weaponToKeep = weaponArray[1];}
        this.gladiators = this.gladiators.filter(function(obj){
        return obj.weapon == weaponToKeep;})
      }
  }
  }
}
