class Arena {
  constructor(name){
    this.name = capitalizeFirstLetter(name);
    this.gladiators = []
  }
    addGladiator(x){
      if (this.gladiators.length < 2){
      this.gladiators.push(x)
    }else{
      alert("You can't have more than two gladiators in the arena")
    }
  }
  fight(){
    var Glad1 = this.gladiators[0].weapon;
    var Glad2 = this.gladiators[1].weapon;
    if ((Glad1 == "Trident" && Glad2 == "Spear") ||
       (Glad1 == "Spear" && Glad2 == "Club") ||
       (Glad1 == "Club" && Glad2 == "Trident")){
          alert(`${this.gladiators[0].name} is victorious`)
          this.gladiators.pop(1)
    }else if (Glad1 === Glad2){
          alert(`${this.gladiators[1].name} and ${this.gladiators[0].name} died`)
          this.gladiators.pop(0)
          this.gladiators.pop(1)
    }else{
          alert(`${this.gladiators[1].name} is victorious`)
          this.gladiators.pop(0)
    }
  }
  // remove(glad){
  //   this.gladiators.name.forEach( (name) => if (glad = name){}  )
  // }
}

const Colesseum = new Arena("Colesseum");
Colesseum.addGladiator(Devin);
Colesseum.addGladiator(Kevin);


function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
}


// fight() {
//   var Glad1 = this.gladiators[0];
//   var Glad2 = this.gladiators[1];
//   if (Glad1.weapon == "Trident" && Glad2.weapon == "Spear") {
//     alert(`${this.gladiators[1]} has been defeated`)
//     this.gladiators.pop(1)
//   }else if (Glad1.weapon == "Spear" && Glad2.weapon == "Spear"){
//
//   }
// }
