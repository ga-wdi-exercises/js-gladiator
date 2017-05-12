class Arena {
  constructor (name){
    this.name = name.charAt(0).toUpperCase()+name.slice(1)
    this.gladiators = []
  }
  addGladiator(gladiator) {
    if (this.gladiators.length<2){
      this.gladiators.push(gladiator)
    } else {
      console.log('Both combatants already here')
    }
  }
  battle() {
    if (this.gladiators.length === 2){
      if (this.gladiators[0].weapon === this.gladiators[1].weapon){
        console.log("Its a draw. Both contestants go free")
        this.gladiators = []
      } else if (this.gladiators[0].weapon === "squirtle" && this.gladiators[1].weapon === "charmander") {
        // console.log(`${this.gladiators[0]} wins!`)
        this.gladiators.pop()
        console.log(this.gladiators)
      } else if (this.gladiators[0].weapon === "charmander" && this.gladiators[1].weapon === "bulbasaur"){
        // console.log(`${this.gladiators[0]} wins!`)
        this.gladiators.pop()
        console.log(this.gladiators)
      } else if (this.gladiators[0].weapon === "bulbasaur" && this.gladiators[1].weapon === "squirtle"){
        // console.log(`${this.gladiators[0]} wins!`)
        this.gladiators.pop()
        console.log(this.gladiators)
      } else if (this.gladiators[0].weapon === "bulbasaur" && this.gladiators[1].weapon === "charmander"){
        this.gladiators.splice(0, 1)
        console.log(this.gladiators)
      } else if (this.gladiators[0].weapon === "squirtle" && this.gladiators[1].weapon === "bulbasaur"){
        this.gladiators.splice(0, 1)
        console.log(this.gladiators)
      } else if (this.gladiators[0].weapon === "charmander" && this.gladiators[1].weapon === "squirtle"){
        this.gladiators.splice(0, 1)
        console.log(this.gladiators)
      }
    }
  }
  remove(gladiator) {
    this.gladiators.find(gladiator)
      
  }
}
var pokedome = new Arena('pokedome')
console.log(pokedome.name)
console.log(pokedome.gladiators)


// console.log('success!')
