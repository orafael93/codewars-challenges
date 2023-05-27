class Soldier {
  shoots = 0
  mags = 1
  
  constructor({ bulletsPerMags }) {
    this.bulletsPerMags = bulletsPerMags
  } 
}

module.exports = Soldier