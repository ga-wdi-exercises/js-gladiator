class Arena {
  constructor(name){
    //takes the name and makes the first letter uppercase
    this.name = name.charAt(0).toUpperCase() + name.slice(1)
    this.gladiators = [];
  }
  addGladiator(gladiator){
    if (this.gladiators.length < 2) {
      this.gladiators.push(gladiator)
    }
  }
  removeGladiator(gladiator){
    if (this.gladiators[0].name == gladiator) {
      this.gladiators.shift()
    } else if (this.gladiators[1].name == gladiator) {
      this.gladiators.pop()
    }
  }
  entertained(){
    if (this.gladiators[0].name == "Maximus" || this.gladiators[1].name == "Maximus") {
      console.log(`Maximus is here, the crowd is entertained!`)
    } else {
      console.log(`The crowd is very bored.`)
    }
  }
  fight(){
    if (this.gladiators.length == 2) {
      let firstGladiator = this.gladiators[0].name
      let firstWeapon = this.gladiators[0].weapon
      let secondGladiator = this.gladiators[1].name
      let secondWeapon = this.gladiators[1].weapon
      if (firstGladiator == "Maximus") {
        console.log(`Maximus always wins! Fools!`)
        this.gladiators.pop()
      } else if (secondGladiator == "Maximus") {
        console.log(`Maximus always wins! Fools!`)
        this.gladiators.shift()
      } else if (firstWeapon == secondWeapon) {
        console.log(`You are both eliminated!`)
      } else if (firstWeapon == "Trident") {
        if (secondWeapon == "Spear") {
          console.log(`${firstGladiator} wins!`)
          this.gladiators.pop()
        } else {
          console.log(`${secondGladiator} wins!`)
          this.gladiators.shift()
        }
      } else if (firstWeapon == "Spear") {
        if (secondWeapon == "Club") {
          console.log(`${firstGladiator} wins!`)
          this.gladiators.pop()
        } else {
          console.log(`${secondGladiator} wins!`)
          this.gladiators.shift()
        }
      } else if (firstWeapon == "Club") {
        if (secondWeapon == "Trident") {
          console.log(`${firstGladiator} wins!`)
          this.gladiators.pop()
        } else {
          console.log(`${secondGladiator} wins!`)
          this.gladiators.shift()
        }
      }
    }
  }
}

let happyland = new Arena("happyland")

happyland.addGladiator(maximus)
happyland.addGladiator(erica)
