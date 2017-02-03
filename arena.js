class Arena {
  constructor(name, gladiators){
    this.name = name.toLowerCase().replace(/\b[a-z]/g, function(letter){
    return letter.toUpperCase();
    })
    this.gladiators = []
  }
  addGladiators(fighter){
    this.gladiators.unshift(fighter)
    this.gladiators.slice(2,1)

  }
}

let colo = new Arena("san diego", [fighter1, fighter2])
