class Arena {
  constructor (name) {
    this.name = name.charAt(0).toUpperCase() + name.slice(1)
    this.gladiators = []
  }
  addGladiator (Gladiator) {
    if (this.gladiators.length < 2) {
      this.gladiators.push(Gladiator)
    } else {
      alert(`There are already 2 gladiators in the ${this.name}!`)
    }
  }
  removeGlad (name) {
    this.gladiators.splice(this.gladiators.indexOf(name), 1)
  }
  entertained () {
    if (this.gladiators[0].name === 'Maximus' || this.gladiators[1].name === 'Maximus') {
      alert('THEY LOVE MAXIMUS AND ARE ENTERTAINED!')
      return true
    } else {
      alert('They are not entertained...')
      return false
    }
  }
  fight () {
    var weapon1 = this.gladiators[0].weapon
    var weapon2 = this.gladiators[1].weapon
    if (this.gladiators[0].name === 'Maximus') {
      this.gladiators.pop()
      alert('MAXIMUS IS UNSTOPPABLE!')
    } else if (this.gladiators[1].name === 'Maximus') {
      this.gladiators.shift()
      alert('MAXIMUS CANNOT BE DEFEATED!')
    } else {
      if (weapon1 === weapon2) {
        var thumb = prompt('Will you spare these poor wretches? Or is today the day they die? Thumbs UP or DOWN?').toUpperCase()
        if (thumb === 'UP') {
          alert('They will fight another day.')
        } else if (thumb === 'DOWN') {
          this.gladiators = []
          alert('Death is the only victor today.')
        } else {
          alert(`Have you no spine? This is the ${this.name}! If you cannot choose, then they will die!`)
          this.gladiators = []
        }
      } else if (weapon1 === 'Spear') {
        switch (weapon2) {
          case 'Club':
            var thumb = prompt('Will you spare this poor wretch? Or is today the day they die? Thumbs UP or DOWN?').toUpperCase()
            if (thumb === 'UP') {
              alert('They will fight another day.')
            } else if (thumb === 'DOWN') {
              this.gladiators.pop()
              alert('The club may be on fiya, but the spear has won the day.')
            } else {
              alert(`Have you no spine? This is the ${this.name}! If you cannot choose, then they will die!`)
              this.gladiators = []
            }
            break
          case 'Trident':
            var thumb = prompt('Will you spare this poor wretch? Or is today the day they die? Thumbs UP or DOWN?').toUpperCase()
            if (thumb === 'UP') {
              alert('They will fight another day.')
            } else if (thumb === 'DOWN') {
              this.gladiators.shift()
              alert('Everyone knows that trident beats spear. Poor choice, my departed, speary friend')
            } else {
              alert(`Have you no spine? This is the ${this.name}! If you cannot choose, then they will die!`)
              this.gladiators = []
            }
        }
      } else if (weapon1 === 'Club') {
        switch (weapon2) {
          case 'Spear':
            var thumb = prompt('Will you spare this poor wretch? Or is today the day they die? Thumbs UP or DOWN?').toUpperCase()
            if (thumb === 'UP') {
              alert('They will fight another day.')
            } else if (thumb === 'DOWN') {
              this.gladiators.shift()
              alert('Spear it! I hardly know it!')
            } else {
              alert(`Have you no spine? This is the ${this.name}! If you cannot choose, then they will die!`)
              this.gladiators = []
            }
            break
          case 'Trident':
            var thumb = prompt('Will you spare this poor wretch? Or is today the day they die? Thumbs UP or DOWN?').toUpperCase()
            if (thumb === 'UP') {
              alert('They will fight another day.')
            } else if (thumb === 'DOWN') {
              this.gladiators.pop()
              alert('You just got clubbed, son.')
            } else {
              alert(`Have you no spine? This is the ${this.name}! If you cannot choose, then they will die!`)
              this.gladiators = []
            }
        }
      } else if (weapon1 === 'Trident') {
        switch (weapon2) {
          case 'Spear':
            var thumb = prompt('Will you spare this poor wretch? Or is today the day they die? Thumbs UP or DOWN?').toUpperCase()
            if (thumb === 'UP') {
              alert('They will fight another day.')
            } else if (thumb === 'DOWN') {
              this.gladiators.pop()
              alert('Three whole dents are enough to fell a man grown!')
            } else {
              alert(`Have you no spine? This is the ${this.name}! If you cannot choose, then they will die!`)
              this.gladiators = []
            }
            break
          case 'Club':
            var thumb = prompt('Will you spare these poor wretches? Or is today the day they die? Thumbs UP or DOWN?').toUpperCase()
            if (thumb === 'UP') {
              alert('They will fight another day.')
            } else if (thumb === 'DOWN') {
              this.gladiators.shift()
              alert("Clubadubdub, you're dead.")
            } else {
              alert(`Have you no spine? This is the ${this.name}! If you cannot choose, then they will die!`)
              this.gladiators = []
            }
        }
      } else {
        alert(`How did these fools get in the ${this.name}! Those are invalid weapons! Seize them!`)
        this.gladiators = []
      }
    }
  }
}
