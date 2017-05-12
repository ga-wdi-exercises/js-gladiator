class Gladiator {
    constructor(name='New Character', weapon='Spear'){
        this.name = name;
        this.weapon = weapon;

        switch (this.weapon) {
            case "Spear":
                break;
            case "Club":
                break;
            case "Trident":
                break;
            default:
                throw Error
                break;
        }
    }

}