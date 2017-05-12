class Arena {
  constructor(name){
  this.name = name.charAt(0).toUpperCase() + name.slice(1);
  this.gladiators = [];
 }
  addGladiator(gladiator){
    if (this.gladiators.length < 2) {
      this.gladiators.push(gladiator)
    } else {
      console.error("There are already 2 Gladiators in the Arena")
    }
  }
  fight(){
    let glad1 = this.gladiators[0];
    let glad2 = this.gladiators[1];
    if (glad1.weapon == 'Trident' && glad2.weapon == 'Spear') {
      this.gladiators.splice(1, 1);
    }
    if (glad1.weapon == 'Spear' && glad2.weapon == 'Club') {
      this.gladiators.splice(1, 1);
    }
    if (glad1.weapon == 'Club' && glad2.weapon == 'Trident') {
      this.gladiators.splice(1, 1);
    }
    if (glad1.weapon == glad2.weapon) {
      this.gladiators.splice(0, 2);
    }
    else {
      this.gladiators.splice(0, 0);
    }
  }
}
