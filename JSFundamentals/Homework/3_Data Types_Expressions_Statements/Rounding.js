function rounding (args) {
  let str = args[0]
  let n = Number(args[1])
  let firstPart = str.substr(0, str.indexOf('.'))
  let secondPart = str.substr(str.indexOf('.'))
  let num = 0
  if (secondPart.length > 15) {
    secondPart = secondPart.slice(0, 15 - secondPart.length + 1)
    num = Number(firstPart + secondPart).toFixed(n)
  } else if (secondPart.length - 1 < n) {
    num = Number(firstPart + secondPart)
  } else {
    num = Number(firstPart + secondPart).toFixed(n)
  }

  console.log(num)
}

rounding(['3.14187226454646461', '2'])
rounding(['10.59', '2'])
