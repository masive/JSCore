function sumFirtsLast (input) {
  let num1 = Number(input[0])
  let num2 = Number(input[input.length - 1])
  return num1 + num2
}

console.log(sumFirtsLast(['20', '30', '40']))
