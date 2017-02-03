class Arena {
  constructor(name){
    // capitalize the first letter of arena
  this.name = name.charAt(0).toUpperCase() + name.slice(1)
  this.gladiators = []
  }
  addGladiator(gladiator){
    if(this.gladiators.length <2){
    this.gladiators.push(gladiator)
    }
  }
  fight(){
    let gladiator1 = this.gladiators[0].weapon
    let gladiator2 =this.gladiators[1].weapon
    if (gladiator1== gladiator2){
      console.log("Both gladiators tied and are both eliminated")
      this.gladiators = 0;
    }
    else if (gladiator1 == 'Trident'){
      if(gladiator2 == 'Spear'){
        console.log("Trident wins")
        this.gladiators.pop();
      } else {
        console.log('Club wins')
        this.gladiators.shift()
      }
    }
    else if (gladiator1 == 'Spear'){
        if(gladiator2 == 'Club'){
          console.log("Spear wins")
          this.gladiators.pop();
        } else {
          console.log('Trident wins')
          this.gladiators.shift()
        }
      }
     else if (gladiator1 == 'Club'){
        if(gladiator2 == 'Trident'){
          console.log("Club wins")
          this.gladiators.pop();
        } else {
          console.log('Spear wins')
          this.gladiators.shift()
        }
      }
    }

}

var twilight = new Arena('twilight')
twilight.addGladiator(eva)
twilight.addGladiator(erica)
twilight.fight()
console.log(twilight.gladiators)
