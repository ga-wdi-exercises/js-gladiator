

class Gladiator {
	constructor(warrior, weapon){
		this.warrior = warrior;
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

class Arena {
	constructor(name){

		this.name = name.toUpperCase();
		this.gladiators = [];
	}
			addGladiator(Gladiator) {
				if (this.gladiators.length < 2) {
				this.gladiators.push(Gladiator)
				} else  if (this.gladiators.length > 2) {
				console.log("Arena full. Come back later")
				}
			};

			fight() {
				if (this.gladiators.length = 2) {
					console.log("fighting!")
					console.log(this.gladiators[0].weapon)
					console.log(this.gladiators[1].weapon)

				}
			}


		};
const myArena = new Arena("babel")
console.log("Arena being created!");

const newestArena = new Arena("field");

const Alex = new Gladiator("Sarah", "cannon");

const Sam = new Gladiator("sam", "spear");

const Tim = new Gladiator("tim", "trident");


