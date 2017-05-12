class Gladiator {
    constructor(name, weapon) {
        this.name = name;
        this.weapon = weapon;
    }

}


class Arena {
    constructor(name, gladiators){
        this.name = name[0].toUpperCase() + name.slice((1))
        this.gladiators =[]
    }

    addGladiator(name){
        if(this.gladiators.length >= 2){
            console.log ("You can only have two fighters in the arena!")
        }
        else{
          this.gladiators.push(name)
        }
    }
}
    fight(){
        
    }
