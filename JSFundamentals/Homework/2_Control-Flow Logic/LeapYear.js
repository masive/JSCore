function leapYear (input) {
  let year = Number(input[0])
  let leap = (year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0)
  console.log(leap ? 'yes' : 'no')
}

leapYear(['1999'])
leapYear(['2000'])
leapYear(['1900'])
leapYear(['2016'])
leapYear(['1952'])

