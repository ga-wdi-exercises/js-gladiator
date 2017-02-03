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
  // removeGladiator(gladiator){
  //
  // }
  fight(){
    if (this.gladiators.length == 2) {
      let firstGladiator = this.gladiators[0].name
      let firstWeapon = this.gladiators[0].weapon
      let secondGladiator = this.gladiators[1].name
      let secondWeapon = this.gladiators[1].weapon
      if (firstWeapon == secondWeapon) {
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

happyland.addGladiator(eva)
happyland.addGladiator(colin)
