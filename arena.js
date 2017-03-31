class Arena {
  constructor(name) {
    this.name =  name.charAt(0).toUpperCase() + name.slice(1);
    this.gladiators = [];
  }


  addGladiator(gladiator){
    if (this.gladiators.length < 2) {
        this.gladiators.push(gladiator);
    }
    else {
      return false;
    }
  }


  fight(){
    let wep1 = this.gladiators[0].weapon;
    let wep2 = this.gladiators[1].weapon;

    if (wep1 === "Trident" && wep2 === "Spear" || wep1 === "Spear" && wep2 === "Club" || wep1 === "Club" && wep2 === "Trident") {
      this.gladiators.splice(1, 1);
    }
    else if (wep2 === "Trident" && wep1 === "Spear" || wep2 === "Spear" && wep1 === "Club" || wep2 === "Club" && wep1 === "Trident") {
      this.gladiators.splice(0, 1);
    }
    else if (wep1 === wep2) {
      this.gladiators.splice(0, 2);
    }
  }
}
