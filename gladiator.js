class Gladiator{
  constructor(name, weapon){
    this.name = name;
    this.weapon = weapon;
  }
}


class Arena{
  constructor(name, gladiator){
    this.name = name;
    this.gladiator = []

  }
  addGladiator(name){
    if(this.gladiator.length < 2){
      this.gladiator.push(name)
    }else{
      console.error("You can only have 2 Gladiators in the Arena at a time")
    }
  }
  fight(){
    let glad1weapon = this.gladiator[0].weapon
    let glad2weapon = this.gladiator[1].weapon
    if (glad1weapon == "Trident" && glad2weapon == "Spear" ||
    glad1weapon == "Spear" && glad2weapon == "Club" ||
    glad1weapon == "Club" && glad2weapon == "Trident"){
      console.log("Gladiator 1 wins!!")
    }else{
      if (glad1weapon == "Trident" && glad2weapon == "Trident" ||
      glad1weapon == "Spear" && glad2weapon == "Spear" ||
      glad1weapon == "Club" && glad2weapon == "Club"){
        console.log("Both Gladiators are dead!")
        }else{
          console.log("Gladiator 2 wins!!")
        }
      }
    }
  }



    const Hippodrome = new Arena ("Hippodrome", "Rhaegar")

    const Rhaegar = new Gladiator("Rhaegar", "Trident")
    const Daenarys = new Gladiator ("Daenarys", "Spear")
    const Viserys = new Gladiator ("Viserys", "Club")
    const Aegon = new Gladiator ("Aegon", "Trident")
    const Jon = new Gladiator ("Jon", "Spear")
    const Arya = new Gladiator ("Arya", "Club")
