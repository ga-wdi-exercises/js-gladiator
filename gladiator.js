class Gladiator {
  constructor(name,weapon){
    this.name = name

    if (weapon == 'Trident' || weapon =='Spear' || weapon == 'Club'){
      this.weapon = weapon
    }
    else{
       console.log("Error")
     }
    }

}

var max = new Gladiator("Maximus","Trident")
var maz = new Gladiator("Mazimus","Trident")
var titus = new Gladiator("Titus","Spear")
var andronicus = new Gladiator("Andronicus","Club")
