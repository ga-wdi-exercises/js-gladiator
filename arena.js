class Arena{

  constructor(name){
    this.name = name;
    this.gladiators = [];
  }

  addGladiator(gladiator){
    this.gladiators.push(gladiator);
  }

}


const universe = new Arena("universe");




function capitalize(s){
  return s[0].toUpperCase()+s.slice(1);
}
