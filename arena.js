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
			this.determineOdds();
		}
	}
	removeGladiator(name) {
		for (let i = 0; i < this.gladiators.length; i++) {
			if (this.gladiators[i].name === name) {
				this.gladiators.splice(i, 1);
			}
		}
	}
	determineOdds() {
		if (this.gladiators.length === 0) {
			console.log(`There are no gladiators in the arena.`);
		} else if (this.gladiators.length < 2) {
			console.log(`There is no challenger for ${this.gladiators[0].name}`);
		} else {

			let oddsA = 0; // Odds of A winning, 0 - 100

			let a = this.gladiators[0].weapon;
			let b = this.gladiators[1].weapon;

			// If same weapon, 50% win
			if (a === b) {
				oddsA = 50;

			// If a has a rocket launcher, 99% win
			} else if (a === 'rocket launcher') {
				oddsA = 99;

			// If b has a rocket launcher, 1% win
			} else if (b === 'rocket launcher') {
				oddsA = 1;

			// If a is unarmed, 1% win
			} else if (a === 'fists') {
				oddsA = 1;

			// If b is unarmed, 99% win
			} else if (b === 'fists') {
				oddsA = 99;

			// if b has a sword...
			} else if (b === 'sword') {
				if (a === 'axe') { // ... and a has an axe, 33% win
					oddsA = 33;
				} else if (a === 'mace') { // ... and a has a mace, 66% win
					oddsA = 66;
				}

			// if b has an axe...
			} else if (b === 'axe') {
				if (a === 'mace') { // ... and a has a mace, 33% win
					oddsA = 33;
				} else if (a === 'sword') { // ... and a has a sword, 66% win
					oddsA = 66;
				}

			// if b has a mace...
			} else if (b === 'mace') {
					if (a === 'sword') { // ... and a has a sword, 33% win
						oddsA = 33;
					} else if (a === 'axe') { // ... and a has an axe, 66% win
						oddsA = 66;
					}

			// Otherwise, a has fists, 1% win
			} else {
				oddsA = 1;
			}

			// Account for past wins/experience
			oddsA += this.gladiators[0].wins;
			oddsA -= this.gladiators[1].wins;

			if (oddsA < 0) oddsA = 0;
			if (oddsA > 100) oddsA = 100;

			// If gladiators name is Maximus, 100% win
			if (this.gladiators[0].name === 'Maximus') {
				oddsA = 100;
			} else if (this.gladiators[1].name === 'Maximus') {
				oddsA = 0;
			}

			console.log(`${this.gladiators[0].name} has a ${oddsA}% chance of winning.`);
			this.fight(oddsA);
		}
	}
	fight(odds) {
		let dice = Math.floor(Math.random() * 100) + 1;
		console.log(dice);
		if (dice <= odds) {
			this.kill(1);
		} else {
			this.kill(0);
		}
	}
	kill(loser) {
		let winner = 0;
		if (loser === 0) {
			winner = 1;
		}
		console.log(`${this.gladiators[loser].name} (${this.gladiators[loser].weapon}) has been defeated by ${this.gladiators[winner].name} (${this.gladiators[winner].weapon}).`);
		this.gladiators.splice(loser, 1);
		this.gladiators[0].wins++;
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
