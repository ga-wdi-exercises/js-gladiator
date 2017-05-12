class Gladiator {
  constructor(name, weapon){

    var capWeap = weapon.charAt(0).toUpperCase() + weapon.slice(1).toLowerCase();
    if (capWeap == "Trident" || capWeap == "Spear" || capWeap == "Club"){
      this.name = name
      this.weapon = capWeap
      console.log(name + " has entered the arena.")
    }else{
      console.log("Not a valid weapon.  Please use 'Trident', 'Spear' or 'Club'")

    }
  }
}
