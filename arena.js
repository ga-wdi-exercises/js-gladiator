class Arena {
  constructor (name) {
    this.name = name
    this.gladiators = []
  }
  addGladiator (name) {
    if (this.gladiators.length !==2){
      return "invalid number of gladiators"
    }
     this.gladiators.push(name)
     console.log(this.gladiators)
  }
  fight () {
    var gladiator1 = this.gladiator[0]
    var gladiator2 = this.gladiator[1]

    if (gladiator1.weapon === 'Trident' && gladiator2.weapon === 'Spear'){
      console.log('Gladiator1 Wins')
      this.gladiators.splice[1, 1]
  } else if (gladiator1.weapon === 'Spear' && gladiator2.weapon === "Club"){
      console.log('Gladiator1 Wins')
      this.gladiators.splice[1, 1]
  } else if (gladiator1.weapon === 'Club' && gladiator2.weapon === "Trident"){
      console.log('Gladiator1 Wins')
      this.gladiators.splice[1, 1]
  } else if (gladiator1.weapon === gladiator2.weapon){
    console.log('You are Both Eliminated')
      }
}
