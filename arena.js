class Arena {
  constructor(name, gladiators){
    this.name = name.toLowerCase().replace(/\b[a-z]/g,
      function(letter){
        return letter.toUpperCase();
      })
    this.gladiators = [gladiators]
  }
  addGladiator(glad) {
    this.gladiators.unshift(glad)
    this.gladiators.splice(2,1)
  }
  fight() {
    if(this.gladiators.length === 2) {
      let glad1 = this.gladiator[0]
      let glad2 = this.gladiator[1]
      if(glad1.weapon === glad2.weapon) {
        this.gladiators = [];
        console.log(`Gladiators ${glad1} and ${glad2} have both died gloriously in battle`);
      }
      else if(glad1.weapon === "") {

      }
    }
  }
}

// let col = new Arena("Coloseum", her)
