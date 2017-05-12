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

  fight() {
      if(this.gladiator[0].weapon === "Trident" && this.gladiator(1) === "Spear")
      this.gladiators.pop(1);
      }else if ((this.gladiator[0].weapon === "Spear" && this.gladiator(1) === "Club")
        this.gladiators.pop(1);
      }else if ((this.gladiator[0].weapon === "Club" && this.gladiator(1) === "Trident")
        this.gladiators.pop(1);
      }else{
        this.gladiator.pop;
        this.gladiator.shift;
      }
    }

const colosseum = new Arena("colosseum");
const max = new Gladiator("Maximus", "Trident")
const titus = new Gladiator("Titus", "Sword")
const andronicus = new Gladiator("Andronicus", "Spear")
