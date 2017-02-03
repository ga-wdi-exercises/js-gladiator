class Arena {
  constructor(name, gladiators){
    this.name = name.toLowerCase().replace(/\b[a-z]/g, function(letter){
    return letter.toUpperCase();
    })
    this.gladiators = []
  }
  addGladiators(fighter){
    this.gladiators.unshift(fighter)
    this.gladiators.splice(2,1)
  }
  fight(){
    if(colo.gladiators.length === 2){
    if(fighter1.weapon === "Trident"){
      if(fighter2.weapon === "Spear"){
        return "Trident Wins"
      }else{
        if(fighter2.weapon === "Club"){
          return "Club Wins"
        }
      }
    }if (fighter1.weapon === "Club"){
      if(fighter2.weapon === "Spear"){
        return "Spear Wins"
      }else{
        if(fighter2.weapon === "Trident"){
          return "Club Wins"
        }
      }
    }else{
      return "Both fighters lost"
    }

    }
  }
}

let colo = new Arena("san diego", [])
