function quadraticEquation (input) {
  let [a, b, c] = [input[0], input[1], input[2]].map(Number)
  let d = Math.pow(b, 2) - 4 * a * c
  let x1 = 0
  let x2 = 0
  let x = 0
  if (d > 0) {
    x1 = (-b + Math.sqrt(d)) / (2 * a)
    x2 = (-b - Math.sqrt(d)) / (2 * a)
    console.log(x2, x1)
  } else if (d === 0) {
    d = Math.pow(b, 2) - 4 * a * c
    x = -b / (2 * a)
    console.log(x)
  } else {
    console.log('No')
  }
}


quadraticEquation(['6', '11', '-35'])
quadraticEquation(['1', '-12', '36'])
quadraticEquation(['5', '2', '1'])
