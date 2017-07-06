class Arena extends Gladiator {
    constructor (namep , gladiatorName, gladiatorWeapon) {
      super(gladiatorName, gladiatorWeapon);

      this.name = namep.charAt(0).toUppperCase() + namep.slice(1);
      this.gladiators = [];
      this.entertain = false;
    }



    addGladiator (gladiator)
    {
      if(this.gladiators.length<=2)
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

                      if(this.gladiators[0].weapon ==="Trident" && this.gladiator[1].weapon ==="Spear")
                      {
                        removeGladiator(this.gladiator[1].name);
                      }
                      else if(this.gladiator[1].weapon ==="Trident" && this.gladiators[0].weapon ==="Spear")
                      {
                        removeGladiator(this.gladiator[0].name);
                      }

                      else if(this.gladiators[0].weapon ==="Spear" && this.gladiator[1].weapon ==="Club")
                      {
                        removeGladiator(this.gladiator[1].name);
                      }
                      else if(this.gladiator[1].weapon ==="Spear" && this.gladiators[0].weapon ==="Club")
                      {
                        removeGladiator(this.gladiator[0].name);
                      }

                      else if(this.gladiators[0].weapon ==="Club" && this.gladiator[1].weapon ==="Trident")
                      {
                        removeGladiator(this.gladiator[1].name);
                      }
                      else if(this.gladiator[1].weapon ==="Club" && this.gladiators[0].weapon ==="Trident")
                      {
                        removeGladiator(this.gladiator[0].name);
                      }
                      else if(this.gladiators[0].weapon ==="Trident" && this.gladiator[1].weapon ==="Trident")
                      {
                        removeGladiator(this.gladiator[1].name);
                        removeGladiator(this.gladiator[0].name);
                      }
                      else if(this.gladiator[1].weapon ==="Spear" && this.gladiators[0].weapon ==="Spear")
                      {
                        removeGladiator(this.gladiator[1].name);
                        removeGladiator(this.gladiator[0].name);
                      }
                      else if(this.gladiator[1].weapon ==="Club" && this.gladiators[0].weapon ==="Club")
                      {
                        removeGladiator(this.gladiator[1].name);
                        removeGladiator(this.gladiator[0].name);
                      }
                      else
                      {
                      console.log("there is another combination not alalied");
                      }


          }






      }
    }//end of fight


    removeGladiator(name)
    {


      var x = (`The user ${names} is about to be removed, enter "up" to keep him or "down" to remove him`);
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
            removeGladiator(namex);
          }
          else
          {
            console.log("you have typed an invalid vote, ")
          }








      this.gladiators = this.gladiators.filter((gladiator) => {
        return gladiator.name !== name
      })
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
