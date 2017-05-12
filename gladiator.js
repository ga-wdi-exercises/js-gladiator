class Gladiator {
    constructor(name='New Character', weapon='Spear'){
        this.name = name.charAt(0).toUpperCase() + name.slice(1).toLowerCase();
        this.weapon = weapon.charAt(0).toUpperCase() + weapon.slice(1).toLowerCase();

        switch (this.weapon) {
            case "Spear":
                break;
            case "Club":
                break;
            case "Trident":
                break;
            default:
                throw "Choose a weapon between a Spear, Club, or Trident";
                break;
        }
    }

}