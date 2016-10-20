function modifyAverage (input) {
  let num = 0
  let numSum = 0
  let len = input[0].length
  let str = ''

  for (digit of input[0]) {
    num = Number(digit)
    numSum += num
  }

  if (numSum / len > 5) {
    console.log(input[0])
  } else {
    while (numSum / len <= 5) {
      str += '9'
      numSum += 9
      len += 1
    }
    console.log(input[0] + str)
  }
}


modifyAverage(['101'])
modifyAverage(['5835'])
