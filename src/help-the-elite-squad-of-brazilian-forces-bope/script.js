const Soldier = require('./soldier.js')

const mag = (input) => {
  const [weapon, streets] = input

  const calculateMagsCount = ({ bulletsPerMags }) => {
    const soldier = new Soldier({ bulletsPerMags })
    const shootsPerStreet = 3

    for(let i = 1; i <= streets; i++) {
      soldier.shoots += shootsPerStreet
      
      const canAddANewMag = soldier.shoots > soldier.bulletsPerMags
      
      if(canAddANewMag) {
        soldier.mags += 1
        soldier.bulletsPerMags += bulletsPerMags
      }
    }

    return soldier.mags
  }

  return {
    'PT92': calculateMagsCount({ bulletsPerMags: 17 }),
    'M4A1': calculateMagsCount({ bulletsPerMags: 30 }),
    'M16A2': calculateMagsCount({ bulletsPerMags: 30 }),
    'PSG1': calculateMagsCount({ bulletsPerMags: 5 }),
  }[weapon]
}

module.exports = mag