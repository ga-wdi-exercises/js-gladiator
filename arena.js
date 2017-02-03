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
      if(this.gladiators[0])
    }

}

let colo = new Arena("colosseum")

colo.addGladiator(max)
console.log(colo.gladiators);
