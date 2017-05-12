class Arena {
  constructor(name){
    this.name = name.charAt(0).toUpperCase() + name.slice(1)
    this.gladiators = []
  }
  addGladiator(name){ //adding gladiators
    if(this.gladiators.length < 2){
    this.gladiators.push(name)
    }
    else{
      alert('only two gladiators at a time')
    }
  }
  fight(){
    let glad1 = this.gladiators[0].name
    let glad2 = this.gladiators[1].name
    let glad1wpn = this.gladiators[0].weapon
    let glad2wpn = this.gladiators[1].weapon
    if ((glad1wpn == "spear" && glad2wpn == "club")||
       (glad1wpn == "trident" && glad2wpn == "spear")||
       (glad1wpn == "club" && glad2wpn == "trident")){
         console.log(`${glad1} WINS!`)
         colosseum.gladiators.pop()
     }
     else if ( glad1wpn === glad2wpn){
       console.log("Both fighters die");
       colosseum.gladiators.shift()
       colosseum.gladiators.pop()
     }
     else if (glad1 == "Maximus"){
       console.log("Maximus Wins!")
       colosseum.gladiators.pop()
     }
     else if (glad2wpn == "Maximus"){
       console.log("Maximus Wins!")
       colosseum.gladiators.shift()
     }
     else{
       console.log(`${glad2} WINS!`);
       colosseum.gladiators.shift()
     }
  }
}

const colosseum = new Arena ('deatholopis')
