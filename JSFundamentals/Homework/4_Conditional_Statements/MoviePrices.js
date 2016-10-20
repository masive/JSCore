function moviePrices (args) {
  let title = args[0].toLowerCase()
  let day = args[1].toLowerCase()

  if (title === 'the godfather') {
    switch (day) {
        case 'monday': console.log('12') 
          break
        case 'tuesday': console.log('10') 
          break
        case 'wednesday': console.log('15')
          break
        case 'thursday': console.log('12.5')
          break
        case 'friday': console.log('15')
          break
        case 'saturday': console.log('25')
          break
        case 'sunday': console.log('30')
          break
        default: console.log('error')
    }
  } else if (title === "schindler's list") {
    switch (day) {
        case 'monday':  
        case 'tuesday':  
        case 'wednesday':
        case 'thursday': 
        case 'friday': console.log('8.5')
          break
        case 'saturday':
        case 'sunday': console.log('15')
          break
        default: console.log('error')
    }
  } else if (title === 'casablanca') {
    switch (day) {
        case 'monday':  
        case 'tuesday':  
        case 'wednesday':
        case 'thursday': 
        case 'friday': console.log('8')
          break
        case 'saturday':
        case 'sunday': console.log('10')
          break
        default: console.log('error')
    }
  } else if (title === 'the wizard of oz') {
    switch (day) {
        case 'monday':  
        case 'tuesday':  
        case 'wednesday':
        case 'thursday': 
        case 'friday': console.log('10')
          break
        case 'saturday':
        case 'sunday': console.log('15')
          break
        default: console.log('error')
    }
  } else {
    console.log('error')
  }
}


moviePrices(['The Godfather', 'Sunday'])
moviePrices(['Casablanca', 'Sunday'])
moviePrices(['Schindler\'s List', 'Monday'])
moviePrices(['Schindlers List', 'Monday'])
moviePrices(['Schindler\'s List', 'Monda'])
