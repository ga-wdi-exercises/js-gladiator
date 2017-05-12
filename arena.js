class Arena{
  constructor(name){
      this.name = name.charAt(0).toUpperCase() + name.slice(1);
      this.gladiators = [];
  }
  addFighter(gladiator){
      this.gladiators.push(gladiator)
      if((colosseum.gladiators).length > 2){  //set a max of 2 fighters
        this.gladiators.pop();
  }
}

  fight() {
      if(this.gladiators[0].weapon == "Trident" && this.gladiators[1] == "Spear") {
        this.gladiators.pop();
      }else if (this.gladiators[0].weapon == "Spear" && this.gladiators[1] == "Club") {
        this.gladiators.pop();
      }else if (this.gladiators[0].weapon == "Club" && this.gladiators[1] == "Trident") {
        this.gladiators.pop();
      }else{
        this.gladiators.pop;
        this.gladiators.shift;

    }
}

var colosseum = new Arena("colosseum")
var max = new Gladiator("Maximus", "Trident")
var titus = new Gladiator("Titus", "Sword")
var andronicus = new Gladiator("Andronicus", "Spear")
