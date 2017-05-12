class Gladiator{
  constructor(name, weapon){
    this.name = name
    this.weapon = weapon
    this.status = "alive"
    this.strength = 1
  }
  checkWeapon(weapon){
  if( weapon == "sword" || weapon == "spear" || weapon == "knives" ){
      console.log("weapon")
  } else {
    this.status = "dead"
    return `${this.name} is dead.`
  }
}
}
let Liza = new Gladiator("Liza", "knives")
let Ian = new Gladiator("Ian", "sword")
let Domonique = new Gladiator("Domonique", "spear")
let Latoya = new Gladiator("Latoya", "spear")

class Arena{
  constructor(name){
    this.name = ((name) => {
      name.charAt(0).toUpperCase()+name.slice(1)
    })
    this.gladiators = []
  }
  addGladiator(Gladiator){
    if (this.gladiators.length < 2){
      this.gladiators.push(Gladiator)
    }
  }

// sword > spear
// spear > knives
// knives > sword

  fight(){
    let defender = this.gladiators[0]
    let challenger = this.gladiators[1]
    if(defender.status == "alive" && challenger.status == "alive"){
        defender.strength += 1
        if((defender.weapon == "sword" && challenger.weapon == "spear")||
          (defender.weapon == "spear" && challenger.weapon == "knives")||
          (defender.weapon == "knives" && challenger.weapon == "sword")){
            defender.strength += 2
            challenger.status = "dead"
            this.gladiators.pop(challenger)
            console.log(`${defender.name} wins!`)
    } else if (defender.weapon == challenger.weapon) {
      defender.status = "dead"
      this.gladiators.pop(defender)
      challenger.status = "dead"
      this.gladiators.pop(challenger)
      console.log("Both dead");
    } else {
      challenger.strength += 2
      defender.status = "dead"
      this.gladiators.pop(defender)
      console.log(`${challenger.name} wins!`)
    }
    }
}
}

let pula = new Arena("pula")
pula.addGladiator(Liza)
pula.addGladiator(Ian)
