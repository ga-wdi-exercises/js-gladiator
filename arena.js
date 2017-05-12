class Arena {
  constructor(name, gladiator){
    this.name = name.charAt(0).toUpperCase()+name.slice(1)
    this.gladiator = [];
  }

  addGladiator(gladiator){
    this.gladiator.push(gladiator);
      if ((this.gladiator).length > 2) {
          (this.gladiator).pop();
      }
  }

  fight(){
    if (this.gladiator[0].weapon === "Trident" && this.gladiator[1].weapon === "Spear") {
      this.gladiator.pop();
    }
    if (this.gladiator[0].weapon === "Spear" && this.gladiator[1].weapon === "Club") {
      this.gladiator.pop();
    }
    if (this.gladiator[0].weapon === "Club" && this.gladiator[1].weapon === "Trident") {
      this.gladiator.pop();
    }
    if (this.gladiator[0].weapon === this.gladiator[1].weapon) {
      this.gladiator = []
    }
    // if ((this.gladiator[0].name) === "Maximus" || (this.gladiator[1].name) === "Maximus") {
    //   this.gladiator = []
    //   this.gladiator.pop();
    // }
  }


  entertain(){
    if ((this.gladiator[0].name) === "Maximus" || (this.gladiator[1].name) === "Maximus") {
      console.log("Crowd is entertained!");
    }else {
      console.log("Crowd is not entertained...");
    }

  }
}

var max = new Gladiator("Maximus","Trident")
var titus = new Gladiator("Titus","Sword")
var andronicus = new Gladiator("Andronicus","Sword")
var colosseum = new Arena("Colosseum")
