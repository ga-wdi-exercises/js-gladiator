class Arena
{
    constructor (namep)
          {


            this.name = `${namep.charAt(0).toUpperCase()}${namep.slice(1)}`;
            this.gladiators = [];
            this.entertain = false;
          }



        addGladiator (gladiator)
        {
          if(this.gladiators.length<2)
          {
            this.gladiators.push(gladiator);
          }
          else
          {
          console.log("You can only have 2 gladiators, no more than that");
          }

        }

    fight ()
    {

      if(this.gladiators.length==2)
      {
          if(this.gladiators[0].name === "Maximus")
          {
            this.gladiators.pop();
          }
          else if (this.gladiators[1].name ==="Maximus")
          {
            this.gladiators.shift();
          }
          else
          {

                      if(this.gladiators[0].weapon ==="Trident" && this.gladiators[1].weapon ==="Spear")
                      {
                        this.removeGladiator(this.gladiators[1].name);
                      }
                      else if(this.gladiators[1].weapon ==="Trident" && this.gladiators[0].weapon ==="Spear")
                      {
                        this.removeGladiator(this.gladiators[0].name);
                      }

                      else if(this.gladiators[0].weapon ==="Spear" && this.gladiators[1].weapon ==="Club")
                      {
                        this.removeGladiator(this.gladiators[1].name);
                      }
                      else if(this.gladiators[1].weapon ==="Spear" && this.gladiators[0].weapon ==="Club")
                      {
                        rthis.emoveGladiator(this.gladiators[0].name);
                      }

                      else if(this.gladiators[0].weapon ==="Club" && this.gladiators[1].weapon ==="Trident")
                      {
                        this.removeGladiator(this.gladiators[1].name);
                      }
                      else if(this.gladiators[1].weapon ==="Club" && this.gladiators[0].weapon ==="Trident")
                      {
                        this.removeGladiator(this.gladiators[0].name);
                      }
                      else if(this.gladiators[0].weapon ==="Trident" && this.gladiators[1].weapon ==="Trident")
                      {
                        this.removeGladiator(this.gladiators[1].name);
                        this.removeGladiator(this.gladiators[0].name);
                      }
                      else if(this.gladiators[1].weapon ==="Spear" && this.gladiators[0].weapon ==="Spear")
                      {
                        this.removeGladiator(this.gladiators[1].name);
                        this.removeGladiator(this.gladiators[0].name);
                      }
                      else if(this.gladiators[1].weapon ==="Club" && this.gladiators[0].weapon ==="Club")
                      {
                        this.removeGladiator(this.gladiators[1].name);
                        this.removeGladiator(this.gladiators[0].name);
                      }
                      else
                      {
                      console.log("there is another combination not alalied");
                      }


          }






      }
    }//end of fight


    removeGladiator (name)
    {


      var x = prompt(`The user ${name} is about to be removed, enter "up" to keep him or "down" to remove him`);
          if ( x==='up')
          {

                if(this.gladiators[0].name===name)
                {
                  this.gladiators.pop();
                }
                else
                {
                this.gladiators.shift();
                }


          }
          else if (x==='down')
          {
                if(this.gladiators[0].name===name)
                {
                  this.gladiators.shift();
                }
                else
                {
                this.gladiators.pop();

                }
          }
          else
          {
                console.log("you have typed an invalid vote, ")
          }








      // this.gladiators = this.gladiators.filter((gladiator) => {
      //   return gladiator.name !== name
      //})
      // if(this.gladiators.length===0)
      // {
      //     console.log("There is nothing to remove");
      // }
      // else
      // {
      //   var copy=this.gladiators[0];
      //   if(this.gladiators[0].name===name)
      //   {
      //   this.gladiator.shift();
      //   }
      //   else if (this.gladiators[1].name===name )
      //   {
      //     this.gladiator.pop();
      //   }
      // }
    }



    entertained()
    {
      if(this.gladiators[0].name ==="Maximus" ||this.gladiators[1].name ==="Maximus" )
      {
        this.entertain = true;
      }

    }



}//end of class Arena



//
// var colosseum = new Arena("Colosseum")
// console.log(colosseum.name) // => Colosseum
//
// var colosseum = new Arena("megalopolis")
// console.log(colosseum.name) // => Megalopolis
//
// var colosseum = new Arena("Colosseum")
// console.log(colosseum.gladiators) // => []


// var max = new Gladiator("Maximus","Trident")
// var titus = new Gladiator("Titus","Sword")
// var andronicus = new Gladiator("Andronicus","Sword")
// var colosseum = new Arena("Colosseum")
// colosseum.addGladiator(max)
// colosseum.addGladiator(titus)
// colosseum.addGladiator(andronicus)
// console.log(colosseum.gladiators.length) // => 2



var max = new Gladiator("Maximuss","Spear")
var titus = new Gladiator("Titus","Trident")
var colosseum = new Arena("Colosseum")
colosseum.addGladiator(max)
colosseum.addGladiator(titus)
colosseum.fight()
console.log(colosseum.gladiators) // => [max]
