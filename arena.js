class Arena{
    constructor(name='New Arena'){
        this.name = name.charAt(0).toUpperCase() + name.slice(1);
        this.gladiators = [];
    }
    addGladiator(gladiator) {
        this.gladiators.push(gladiator);
    }
}