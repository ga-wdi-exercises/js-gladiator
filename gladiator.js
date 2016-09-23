
/* list of valid weapons  for validation */
const validWeapons={"Spear":0, "Club":0, "Trident":0};

/* winTable stores rules for game.  If new weapons are created, we just add a row
   to winTable to define rule */

var winTable =[
      ["Trident","Spear","Trident"],
      ["Spear","Trident","Trident"],
      ["Spear","Club","Spear"],
      ["Club","Spear","Spear"],
      ["Club","Trident","Club"],
      ["Trident","Club","Club"]
    ];

/*superGladiators will always win if they play */
var superGladiator = {"Mike":0,"Maximus":0};

/* list of gladatoris who entertain crowd */
var entertainers = {"Mike":0,"Maximus":0};

function crowdChoice ( winner,fighter1,fighter2) {
/* we have a winner */
/*find looser and ask crowd thumbs up or down. */

if (confirm (`${looser} just lost a battale agains ${winner} Confirm feeding him to the lions?`))
   {

      console.log ( looser, " The original looser will die");
      return looser;
   } else {
    console.log ( " The Crowd wins and original winner",winner," will die");
     return winner;
   }

}


  function checkForWin(rule,fighter1,fighter2) {
    if (fighter1.weapon == rule[0] && fighter2.weapon== rule[1]) {
      /* winning row found */
      /* deturming the winner */
      return( (fighter1.weapon == rule[2])?fighter1.name:fighter2.name)
    } /* if */
    return(""); /* no winner found */
  }

 class Gladiator  {
   constructor (name,weapon) {
     this.name=name;
      if (weapon in validWeapons) {
       this.weapon=weapon;
     }/* if */ else {
       /* throw error in assignment */
       console.log("Invalid Weapon:",weapon);
       return;
     }/* else if */

   } /* constructor */

 }/* class Gladiator */

class Arena  {
  constructor(name) {
    this.name=toTitleCase(name)
    this.gladiators=[];

  }/* constructor */
  entertained() {
    /* check for entertaining*/
     for (let i=0;i<this.gladiators.length;i++) {
      if (this.gladiators[i].name in entertainers ) {
        console.log(`The Crowd goes Wild..SuperGladiator, ${this.gladiators[i].name} is always entertaining!`);
        return;
      }/* if entertainig*/
    } /* for i */
  }/* enetertained method */

  /* methods for Arena */
  removeGladiator(name) {
    for (let i=0;i<this.gladiators.length;i++ ) {
      if (this.gladiators[i].name == name) {
        this.gladiators.splice(i,1);
        return;
      }/* if */
    }/* for */
  }/* removeGladiator */
  addGladiator( name) {
    if (this.gladiators.length <2) {this.gladiators.push(name)}
    else { console.log(`MAXIMUM Gladiator Error: Cannot add this Gladiator: ${name} `)}
  }/* method addGladiator */
  fight () {
    /* check for two players */
    if (this.gladiators.length < 2) {
      console.log("Not Enough Players to fight")
      return;
    }

    /* check for superGladiator ( They always win regardless */
     for (let i=0;i<this.gladiators.length;i++) {
      if (this.gladiators[i].name in superGladiator ) {
        console.log(`SuperGladiator, ${this.gladiators[i].name} always wins!`);
        return;
      }/* if superGladiator */
    } /* for i */

    /* check that each player has a weapon */
    if (this.gladiators[0].weapon && this.gladiators[1].weapon ) {
      /* let the battles begin */
      /* check if they hae the same weapon */
      if (this.gladiators[0].weapon==this.gladiators[1].weapon) {
        /* remove both */
        this.removeGladiator(this.gladiators[0].name);
        this.removeGladiator(this.gladiators[1].name);
        return;
      }


      /* fight */
      let winner="";
      for (let i=0;i<winTable.length;i++) {
         if (winner=checkForWin(winTable[i],this.gladiators[0],this.gladiators[1])){
            if (crowdChoice(winner,this.gladiators[0],this.gladiators[1])) {
                this.removeGladiator(crowdChoice)
            }/* crowdChoice */

           return; /* we found a winner */
         }/* if */
      }/*for */
    }/* if plays have weapons */
    }  /* fight */
} /* class Arena */



/***************  Helper Function ******************
*  toTitleCase - convert string to titleClass where first letter is capitolized
*
*
*****************************************************/

function toTitleCase(str)
{
    return str.replace(/\w\S*/g, function(txt){return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();});
}



 var colosseum = new Arena("megalopolis")
 console.log(colosseum.name) // => Megalopolis

var max = new Gladiator("Maximus","Trident")
console.log(max.name) // "Maximus"
console.log(max.weapon) // "Trident"
var curley = new Gladiator("Maximus","Knife")
console.log(curley.name) // "Maximus"
console.log(curley.weapon) // "Trident"
var colosseum = new Arena("megalopolis")
console.log(colosseum.name) // => Megalopolis
var colosseum = new Arena("Colosseum")
console.log(colosseum.gladiators) // => []

var max = new Gladiator("Maximus","Trident")
var colosseum = new Arena("Colosseum")
colosseum.addGladiator(max)
console.log(colosseum.gladiators) // => [Gladiator]


var max = new Gladiator("Maximus","Trident")
var titus = new Gladiator("Titus","Sword")
var andronicus = new Gladiator("Andronicus","Sword")
var colosseum = new Arena("Colosseum")
colosseum.addGladiator(max)
colosseum.addGladiator(titus)
colosseum.addGladiator(andronicus)
console.log(colosseum.gladiators.length) // => 2

var max = new Gladiator("Maximus","Trident")
var titus = new Gladiator("Titus","Spear")
var colosseum = new Arena("Colosseum")
colosseum.addGladiator(max)
colosseum.addGladiator(titus)
colosseum.fight()
console.log(colosseum.gladiators) // => [max]

colosseum.entertained();
