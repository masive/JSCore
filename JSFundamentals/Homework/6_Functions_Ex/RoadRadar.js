function solve (input) {
  let speed = Number(input[0])
  let zone = input[1]
  let limit = getLimit(zone)
  let infraction = getInfraction(speed, limit) 

  function getLimit (zone) {
    switch (zone) {
      case 'motorway': return 130
      case 'interstate': return 90
      case 'city': return 50
      case 'residential': return 20
    }
  }

  function getInfraction (speed, limit) {
    let overSpeed = speed - limit
    if (overSpeed <= 0) {
      return false
    } else if (overSpeed >= 1 && overSpeed <= 20) {
      return 'speeding'
    } else if (overSpeed >= 21 && overSpeed <= 40) {
      return 'excessive speeding'
    } else if (overSpeed >= 41) {
      return 'reckless driving'
    }
  }

  if (infraction) {
    console.log(infraction)
  }
}

solve(['40', 'city'])
solve(['21', 'residential'])
solve(['120', 'interstate'])
solve(['200', 'motorway'])
