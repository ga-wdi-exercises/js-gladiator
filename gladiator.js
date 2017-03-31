

class Gladiator {
	constructor(name, weapon){
		this.name = name;
		this.weapon = weapon;
	}

	limitWeapons() {
		if (weapon === this.weapon) {
			console.log("Error! Choose another weapon");
		}
	}

};

const Whitney = new Gladiator("Whitney", "knife");
const Andrew = new Gladiator("Andrew", "knife");

class Arena extends Gladiator {
	constructor(name){
		super(name, weapon);
		this.name = name.toUpperCase();
	}

	
	};

const myArena = new Arena("babel");
