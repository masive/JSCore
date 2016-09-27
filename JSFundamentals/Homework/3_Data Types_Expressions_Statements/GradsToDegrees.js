function gradsToDegrees (args) {
  let gon = Number(args[0])
  let degree = gon * 0.9
  let result = 0
  if (degree >= 360) {
    while (degree > 360) {
      result = degree -= 360
    }
  } else if (degree <= 0) {
    result = (degree + 360)
  } else {
    result = degree
  }

  console.log(result)
}

gradsToDegrees(['100'])
gradsToDegrees(['400'])
gradsToDegrees(['850'])
gradsToDegrees(['-50'])
