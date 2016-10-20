function lastMonth (args) {
  let month = Number(args[1])
  let year = Number(args[2])
  let lastDay = 0
  let leap
  if ((year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0)) {
    leap = true
  } else {
    leap = false
  }

  if (leap && month === 3) {
    lastDay = 29
  } else {
    lastDay = 28
  }

  if (month === 5 || month === 7 || month === 10 || month === 12) {
    lastDay = 30
  } else if (!month === 3) {
    lastDay = 31
  }

  console.log(lastDay)
}

lastMonth(['17', '3', '2002'])
lastMonth(['13', '12', '2004'])





