class Arena {
  constructor(name){
    this.name = name.charAt(0).toUpperCase() + name.slice(1).toLowerCase();
    this.gladiators = []
    this.thumbDirection

  }

  addGladiator(gladiator){
    this.gladiators.unshift(gladiator)
    if (this.gladiators.length > 2) {
      console.log("There are too many gladiators in the arena.  " + this.gladiators[2] + " has been removed.")
      this.gladiators.pop()

    }
  }

  removeGladiator(name){
    if (name == this.gladiators[0]) {
      this.gladiators.splice(0,1)
    }else if (name == this.gladiators[1]) {
      this.gladiators.splice(1,1)
    }else{
      console.log(name + " is not in the arena.")
    }
  }

  entertained(){
    if (this.gladiators[0].name == "Maximus" || this.gladiators[1].name == "Maximus"){
      console.log("THE CROWD IS ENTERTAINED!!!!!!")
    }else{
      console.log("The crowd is not entertained :(")
    }
  }

  thumbUpOrDown(){
    while (this.thumbDirection !== 'u' && this.thumbDirection !== 'd') {
      this.thumbDirection = prompt("Thumbs up or down? Should the loser die? u/d")
      console.log(this.thumbDirection)
    }
  }

  killGladiator0(){
    console.log(this.gladiators[0].name + " has been defeated")
    this.thumbUpOrDown()
    if (this.thumbDirection == "d") {
      console.log(this.gladiators[1].name + " has killed " + this.gladiators[0].name)
      this.gladiators.shift()
    }else{
      console.log(this.gladiators[0].name + " has killed " + this.gladiators[1].name)
      this.gladiators.pop()
    }

  }

  killGladiator1(){
    console.log(this.gladiators[1].name + " has been defeated")
    this.thumbUpOrDown()
    if (this.thumbDirection == "d") {
      console.log(this.gladiators[0].name + " has killed " + this.gladiators[1].name)
      this.gladiators.shift()
    }else{
      console.log(this.gladiators[1].name + " has killed " + this.gladiators[0].name)
      this.gladiators.pop()
    }

  }
  killBothGladiators(){
    console.log("Both gladiators have been elminated")
    self.gladiators.shift()
    self.gladiators.pop()
  }

  fight(){
    if (this.gladiators.length == 2){
      if (this.gladiators[0].name == "Maximus") {
        console.log(this.gladiators[1].name + " has been defeated by Maximus")
        this.gladiators.pop()
      }else if (this.gladiators[1].name == "Maximus") {
        console.log(this.gladiators[0].name + " has been defeated by Maximus")
        this.gladiators.shift()
      }else{
      this.findWinner()
      }
    }
  }

  findWinner(){
    var weap1 = this.gladiators[0].weapon
    var weap2 = this.gladiators[1].weapon
    console.log(`${this.gladiators[0].name} with a ${weap1} fights ${this.gladiators[1].name} with a ${weap2}`)
    var self = this

    switch (weap1) {

      case "Trident":
        switch (weap2){

          case "Trident":
            this.killBothGladiators()
          break;

          case "Spear":
            this.killGladiator1()
          break;

          case "Club":
            this.killGladiator0()
          break;
        }

        break;


      case "Spear":
        switch (weap2){

          case "Trident":
            this.killGladiator1()
          break;

          case "Spear":
            this.killBothGladiators()
          break;

          case "Club":
            this.killGladiator0()
          break;

        }

      break;


      case "Club":
        switch (weap2){
          case "Trident":
            this.killGladiator1()
          break;

          case "Spear":
            this.killGladiator0()
          break;

          case "Club":
            this.killBothGladiators()
          break;
      }

      break;


      default:

    }
  }
}


var max = new Gladiator("max","spear")
var titus = new Gladiator("Titus","trident")
var colosseum = new Arena("Colosseum")
colosseum.addGladiator(max)
colosseum.addGladiator(titus)
