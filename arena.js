class Arena {
  constructor (name) {
    this.name = name.substr(0,1).toUpperCase()+name.substr(1)
    this.gladiators = [];
  }
  addGladiator(gladiator) {
    if (this.gladiators.length == 2) {
      alert("Insufficient space for so much ego. Try again after a fight.");
  } else this.gladiators.push(gladiator);
} fight() {
  let gladiator1 = this.gladiators[0];
  let gladiator2 = this.gladiators[1];
  if (gladiator1.name = "Maximus") {
    this.gladiators.splice(1,1);
    this.decideFate()
  } else if (gladiator2.name == "Maximus") {
    this.gladiators.splice(0,1);
    this.decideFate()
  } else if (gladiator1.weapon == 'trident' && gladiator2.weapon == 'spear') {
    this.gladiators.splice(1,1);
    this.decideFate()
  } else if (gladiator1.weapon == 'spear' && gladiator2.weapon == 'club') {
    this.gladiators.splice(1,1);
    this.decideFate()
  } else if (gladiator1.weapon == 'club' && gladiator2.weapon == 'trident') {
    this.gladiators.splice(1,1);
    this.decideFate()
  } else if (gladiator1.weapon == 'trident' && gladiator2.weapon == 'club') {
      this.gladiators.splice(1,1);
      this.decideFate()
  } else if  (gladiator1.weapon == 'spear' && gladiator2.weapon == 'trident') {
      this.gladiators.splice(1,1);
      this.decideFate()
  } else if (gladiator1.weapon == 'club' && gladiator2.weapon == 'spear') {
      this.gladiators.splice(1,1);
      this.decideFate()
  } else {
      this.gladiators = [];
      this.decideFate()
  }
}
decideFate(thumbsUp) {
  if (thumbsUp === true) {
    alert("The victor is spared! Yay!")
  } else alert("The victor shall be vanquished. That sucks.")
    this.gladiators = [];
}
save(name) {
  let gladiator1 = this.gladiators[0];
  let gladiator2 = this.gladiators[1];
  if (name == gladiator1.name) {
    this.gladiators.splice(0,1);
  } else if (name == gladiator2.name) {
    this.gladiators.splice(1,1);
  } else alert("You cannot save a champion who is not in the arena!")
}
entertained () {
  let gladiator1 = this.gladiators[0];
  let gladiator2 = this.gladiators[1];
  if (gladiator1.name = "Maximus" || gladiator2.name == "Maximus") {
      alert("The crowd is entertained!");
  } else alert("The crowd is NOT enjoying this show...")
}
}

let colosseum = new Arena("colosseum");
