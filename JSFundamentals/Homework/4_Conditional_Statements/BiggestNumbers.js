function biggestNum (args) {
  let [num1, num2, num3] = args.map(Number)
  let biggestNumber = Math.max(num1, num2, num3)
  return biggestNumber
}

console.log(biggestNum(['5', '-2', '7']))
console.log(biggestNum(['130', '5', '99']))
console.log(biggestNum(['43', '43.2', '43.1']))
console.log(biggestNum(['-10', '-20', '-30']))

