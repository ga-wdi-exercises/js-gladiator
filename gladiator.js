class Gladiator {
	constructor (name, weapon) {
		this.name = name;
		this.weapon = weapon;
	}
	
}

	
	

let max = new Gladiator("Maximus","Trident")
console.log(max.name);
console.log(max.weapon);


class Arena {
	constructor(name,gladiator) {
		this.name = name;
		this.gladiators = [];
	}

}

class NewGladiators extends Gladiator {
  constructor(name, weapon, switcher){
    super(name, gladiator);
    this.switcher = switcher;
  }

  newGladiator(newGladiator){
		this.name = newGladiator;
	}
	
  changeGladiator (){
    Gladiator.changeGladiator(newGladiator);
  }
}


newGladiator(newGladiator){
		this.name = newGladiator;
	}

// var colosseum = new Arena("Colosseum")
// console.log(colosseum.name) // => Colosseum

// var colosseum = new Arena("Megalopolis")
// console.log(colosseum.name) // => Megalopolis


// console.log(colosseum.gladiators) // => []

// colosseum.addGladiator(max);
// console.log(colosseum.gladiators);

//  console.log(colosseum.gladiators)
// console.log(colosseum.gladiators) // => [Gladiator]


