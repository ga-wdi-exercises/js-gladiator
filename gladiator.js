class Gladiator {
  constructor(name, weapon){
    let weaponType = weapon
    if(weaponType === "Spear" || weaponType === "Club" || weaponType === "Trident"){
    this.name = name;
    this.weapon = weapon;
  }else{
    alert("Please choose a weapon: Spear, Club or Trident")
        }
      }
    }
    let f1 = new Gladiator("Linda", "Trident")
    let f2 = new Gladiator("Gene", "Spear")
    let f3 = new Gladiator("Bob", "Club")
    let f4 = new Gladiator("Tina", "Spear")
