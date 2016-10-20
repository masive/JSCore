function point (args) {
  let [x, y, xMin, xMax, yMin, yMax] = [args[0], args[1], args[2], args[3], args[4], args[5]].map(Number)
  if (x >= xMin && x <= xMax && y >= yMin && y <= yMax ) {
    console.log('inside')
  } else {
    console.log('outside')
  }
}

point(['8', '-1', '2', '12', '-3', '3'])
point(['12.5', '-1', '2', '12', '-3', '3'])
