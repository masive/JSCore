function solve (input) {
  let isNumber = isDigit(input)
  function isDigit (input) {
    for (digit of input[0]) {
      let num = Number(digit)
      if (typeof (num) === 'number' && num !== 'NaN')
        return true
      return false
    }
  }
  return isNumber
}

console.log(solve(['3', '0', '0', '4']))
console.log(solve(['2', '1', '1', '1']))
