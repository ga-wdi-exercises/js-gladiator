class Arena {
  constructor(name) {
    this.name =  name.charAt(0).toUpperCase() + name.slice(1);
    this.gladiators = [];
  }


  addGladiator(gladiator){
    if (this.gladiators.length < 2) {
        this.gladiators.push(gladiator);
    }
  }

  fight(){
    let wep1 = this.gladiators[0].weapon;
    let wep2 = this.gladiators[1].weapon;
    let name1 = this.gladiators[0].gladName;
    let name2 = this.gladiators[1].gladName;

    if (wep1 === "Trident" && wep2 === "Spear" || wep1 === "Spear" && wep2 === "Club" || wep1 === "Club" && wep2 === "Trident" || name1 === "Maximus") {
      this.gladiators.splice(1, 1);
    }
    else if (wep2 === "Trident" && wep1 === "Spear" || wep2 === "Spear" && wep1 === "Club" || wep2 === "Club" && wep1 === "Trident" || name2 === "Maximus") {
      this.gladiators.splice(0, 1);
    }
    else if (wep1 === wep2) {
      this.gladiators.splice(0, 2);
    }
  }
  entertained(){
    let name1 = this.gladiators[0].gladName;
    let name2 = this.gladiators[1].gladName;

    if (name1 === "Maximus" || name2 === "Maximus") {
      console.log("ENTERTAINED");
    }
  }
}
