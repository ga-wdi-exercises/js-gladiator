class Gladiator {
  constructor(name, weapon){
    if (weapon == "Spear" || weapon == "Club" || weapon == "Trident"){
      this.name = name
      this.weapon = weapon
    }
    else {
      throw new Error("Must choose a valid weapon.")
    }
  }
}

let erica = new Gladiator("Erica","Trident")
let eva = new Gladiator("Eva","Spear")
let colin = new Gladiator("Colin","Club")
