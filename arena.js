String.prototype.capitalize = function() {
    return this.charAt(0).toUpperCase() + this.slice(1);
}

var gladiators

class Arena{
  constructor(name){
    this.name = name.capitalize()
    this.gladiators = [];
    }

    addGladiator(glad){
      if(this.gladiators.length < 2){
      this.gladiators.push(glad)
        }
      else{
        console.log("ERROR")
      }
    }

    fight(){

      if(this.gladiators[0].weapon == "Trident" && this.gladiators[1].weapon == "Spear"){
        this.gladiators.pop()
        }
      if(this.gladiators[0].weapon == "Spear" && this.gladiators[1].weapon == "Club"){
          this.gladiators.pop()
        }
      if(this.gladiators[0].weapon == "Club" && this.gladiators[1].weapon == "Trident"){
            this.gladiators.pop()
        }
      if(this.gladiators[0].weapon == this.gladiators[1].weapon){
              this.gladiators = []
        }
      }
}

let colo = new Arena("colosseum")

colo.addGladiator(max)
colo.addGladiator(maz)
colo.fight()
console.log(colo.gladiators);
