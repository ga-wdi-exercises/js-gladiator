class Arena {
  constructor(name){
    this.name = name
    this.gladiators = []

  }

  addGladiator(gladiator){
    this.gladiators.unshift(gladiator)
    if (this.gladiators.length > 2) {
      this.gladiators.pop()
    }
  }

  fight(){
    if (this.gladiators.length == 2){
      this.findWinner()
    }
  }

  findWinner(){
    var weap1 = this.gladiators[0].weapon
    var weap2 = this.gladiators[1].weapon
    var self = this

    switch (weap1) {
      case "trident":
        switch (weap2){
          case "trident":
            self.gladiators.shift()
            self.gladiators.pop()
            console.log("Both gladiators have been elminated")
          break;

          case "spear":

          break;

          case "club":

          break;
        }
        break;
      case "spear":
      switch (weap2){
        case "trident":

        break;

        case "spear":

        break;

        case "club":

        break;
      }
        break;
      case "club":
      switch (weap2){
        case "trident":

        break;

        case "spear":

        break;

        case "club":

        break;
      }
      break;
      default:

    }
  }
}


var max = new Gladiator("Maximus","trident")
var titus = new Gladiator("Titus","trident")
var colosseum = new Arena("Colosseum")
colosseum.addGladiator(max)
colosseum.addGladiator(titus)
