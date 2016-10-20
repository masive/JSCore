function firstLastKElement (input) {
  let k = Number(input[0])
  let firstKElements = []
  let lastKElements = []
  let len = input.length
  for (let i = 1; i <= k; i++) {
    firstKElements.push(input[i])
    lastKElements.push(input[len - k - 1 + i])
  }
  console.log(firstKElements.join(' '))
  console.log(lastKElements.join(' '))
}

firstLastKElement(['2', '7', '8', '9'])
firstLastKElement(['3', '6', '7', '8', '9'])
