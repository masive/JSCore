function rotateArray (input) {
  let rotations = input[input.length - 1]
  // if (rotations > 1000) {
  //   rotations = rotations % 1000
  // }
  input.pop()
  for (let i = 0; i < rotations % input.length; i++) {
    // let lastElement = input[input.length - 1]
    // input.unshift(input[input.length - 1])
    input.unshift(input.pop())
  }
  console.log(input.join(' '))
}

rotateArray(['1', '2', '3', '4', '2'])
rotateArray(['Banana', 'Orange', 'Coconut', 'Apple', '1'])
rotateArray(['Banana', 'Orange', 'Coconut', 'Apple', '1001'])
