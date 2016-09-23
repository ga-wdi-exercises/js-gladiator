/* gladiator.js */

class Gladiator {
	constructor(name, weapon, shield) {
		this._name = name.toLowerCase();
		if ( weapon == 'sword' || weapon == 'axe' || weapon == 'mace' || weapon == 'rocket launcher') {
			this.weapon = weapon;
		} else {
			this.weapon = 'fists';
		}
		this.wins = 0;
	}
	get name() {
		return capitalize(this._name);
	}
}

const maximus = new Gladiator('Maximus');
const commodus = new Gladiator('Commodus', 'sword');
const nick = new Gladiator('nick', 'mace');
const tim = new Gladiator('tim', 'axe');
const rae = new Gladiator('rae', 'sword');

// TODO add wins function,
