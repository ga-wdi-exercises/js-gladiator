class Arena {
  constructor(name){
    this.name = name.toLowerCase().replace(/\b[a-z]/g,
      function(letter){
        return letter.toUpperCase();
      })
    this.gladiators = []
  }
  addGladiator(glad) {
    this.gladiators.unshift(glad)
    this.gladiators.splice(2,1)
  }
  fight() {
    if(this.gladiators.length === 2) {
      let glad1 = this.gladiators[0]
      let glad2 = this.gladiators[1]
      if(glad1.weapon === glad2.weapon) {
        this.gladiators = [];
        console.log(`Gladiators ${glad1} and ${glad2} have both died gloriously in battle`);
      }
      else if(glad1.weapon === "Trident") {
        if(glad2.weapon === "Spear") {
          // Glad 1 wins
          this.gladiators.splice(1,1);
          console.log(`Gladiator ${glad1.name} has won the battle`)
        }
        else if (glad2.weapon === "Club"){
          this.gladiators.splice(0,1);
          console.log(`Gladiator ${glad2.name} has won the battle`)
        }
      }
      else if(glad1.weapon === "Spear") {
        if(glad2.weapon === "Club") {
          // Glad 1 wins
          this.gladiators.splice(1,1);
          console.log(`Gladiator ${glad1.name} has won the battle`)
        }
        else if (glad2.weapon === "Trident"){
          this.gladiators.splice(0,1);
          console.log(`Gladiator ${glad2.name} has won the battle`)
        }
      }
      else if(glad1.weapon === "Club") {
        if(glad2.weapon === "Trident") {
          // Glad 1 wins
          this.gladiators.splice(1,1);
          console.log(`Gladiator ${glad1.name} has won the battle`)
        }
        else if (glad2.weapon === "Spear"){
          this.gladiators.splice(0,1);
          console.log(`Gladiator ${glad2.name} has won the battle`)
        }
      }
    }
  }
}
