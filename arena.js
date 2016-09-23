/* arena.js */

class Arena {
	constructor(name) {
		this.name = capitalize(name);
		this.gladiators = [];
	}
	addGladiator(gladiator) {
		console.log(`Welcome to the arena, ${gladiator.name}.`);
		this.gladiators.push(gladiator);
		// check for 2 gladiators
		if (this.gladiators.length == 2) {
			console.log(`Prepare to fight ${this.gladiators[0].name}.`);
			this.fight();
		}
	}
	removeGladiator(name) {
		for (let i = 0; i < this.gladiators.length; i++) {
			if (this.gladiators[i].name === name) {
				this.gladiators.splice(i, 1);
			}
		}
	}
	fight() {
		if (this.gladiators.length === 0) {
			console.log(`There are no gladiators in the arena.`);
		} else if (this.gladiators.length < 2) {
			console.log(`There is no challenge for ${this.gladiators[0].name}`);
		} else {
			let a = this.gladiators[0].weapon;
			let b = this.gladiators[1].weapon;

			// If gladiators name is Maximus, kill the other
			if (this.gladiators[0].name === 'Maximus') {
				this.kill(1);
			} else if (this.gladiators[1].name === 'Maximus') {
				this.kill(0);

			// If same weapon, kill both
			} else if (a === b) {
				this.kill(1);
				this.kill(0);

			// If a has a rocket launcher, kill b
			} else if (a === 'rocket launcher') {
				this.kill(1);

			// If b has a rocket launcher, kill a
			} else if (b === 'rocket launcher') {
				this.kill(0);

			// If b is unarmed, kill b
			} else if (b === 'fists') {
				this.kill(1);

			// if b has a sword...
			} else if (b === 'sword') {
				if (a === 'axe') { // ... and a has an axe, kill a
					this.kill(0);
				} else if (a === 'mace') { // ... and a has a mace, kill b
					this.kill (1);
				}

			// if b has an axe...
			} else if (b === 'axe') {
				if (a === 'mace') { // ... and a has a mace, kill a
					this.kill(0);
				} else if (a === 'sword') { // ... and a has a sword, kill b
					this.kill (1);
				}

			// if b has a mace...
			} else if (b === 'mace') {
					if (a === 'sword') { // ... and a has a sword, kill a
						this.kill(0);
					} else if (a === 'axe') { // ... and a has an axe, kill b
						this.kill (1);
					}

			// Otherwise, a has fists, kill a
			} else {
				this.kill(0);
			}
		}
	}
	kill(loser) {
		let winner = 0;
		if (loser === 0) {
			winner = 1;
		}
		console.log(`${this.gladiators[loser].name} (${this.gladiators[loser].weapon}) has been defeated by ${this.gladiators[winner].name} (${this.gladiators[winner].weapon}).`);
		this.gladiators.splice(loser, 1);
		console.log(this.gladiators);
	}
	areYouNotEntertained() {
		if (this.hasMaximus()) {
			console.log(`MAX-I-MUS! MAX-I-MUS! MAX-I-MUS!`);
		} else {
			console.log(`Meh.`);
		}
	}
	hasMaximus() {
		for (let i = 0; i < this.gladiators.length; i++) {
			if (this.gladiators[i]._name === 'maximus') {
				return true;
			}
		}
		return false;
	}
}

//Function to capitalise first character of string
function capitalize(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
}


const coliseum = new Arena('coliseum');
