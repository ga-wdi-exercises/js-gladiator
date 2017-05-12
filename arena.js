class Arena{
    constructor(name='New Arena'){
        this.name = name.charAt(0).toUpperCase() + name.slice(1);
        this.gladiators = [];
    }
    addGladiator(gladiator) {
        this.gladiators.push(gladiator);

        if (this.gladiators.length > 2) {
            this.gladiators.pop();
        }
    }
    fight() {
        if (this.gladiators[0].name = 'Maximus') {
            this.gladiators.pop();
        } else if(this.gladiators[1].name = 'Maximus') {
            this.gladiators.shift();
        } else if (this.gladiators[0].weapon == 'Trident' && this.gladiators[1].weapon == 'Spear') {
            this.gladiators.pop();
        } else if (this.gladiators[0].weapon === 'Spear' && this.gladiators[1].weapon == 'Club') {
            this.gladiators.pop();
        } else if (this.gladiators[0].weapon == 'Club' && this.gladiators[1].weapon == 'Trident') {
           this.gladiators.pop();
        } else if (this.gladiators[0].weapon == this.gladiators[1].weapon) {
            this.gladiators.pop();
            this.gladiators.shift();
        } else {
            this.gladiators.shift();
        }
    }
    removeGladiators(name){
        for (let i = 0; i < this.gladiators.length; i++) {
            if (this.gladiators[i].name === name.charAt(0).toUpperCase() + name.slice(1)) {
                let indexToRemove = i;
                this.gladiators.splice(i,1);
            }
        }
    }

}