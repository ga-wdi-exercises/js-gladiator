class Gladiator {
    constructor(name,weapon){
        this.name = name
        if (weapon == "Spear" || weapon == "Trident" || weapon == "Club") {
            this.weapon = weapon
        } else {
            throw new Error("Invalid weapon.")
        }
        // if (["Spear", "Trident", "Club"].includes(weapon)){
        //     this.weapon = weapon
        // }
    }
}

class Arena {
    constructor(name, gladiators) {
        this.name = name.charAt(0).toUpperCase() + name.slice(1)
        this.gladiators = []
    }

}
