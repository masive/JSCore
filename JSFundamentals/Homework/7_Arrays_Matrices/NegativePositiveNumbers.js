function negativePositiveNums (input) {
  let numbers = input.map(Number)
  let negative = []
  let positive = []
  let zero = []
  for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] < 0) {
      negative.push(numbers[i])
    } else if (numbers[i] > 0) {
      positive.push(numbers[i])
    } else if (numbers[i] === 0) {
      zero.push(numbers[i])
    }
  }
  console.log(negative.sort().concat(positive.sort(), zero))
}

negativePositiveNums(['7', '-2', '8', '9'])
negativePositiveNums(['3', '-2', '0', '-1'])
