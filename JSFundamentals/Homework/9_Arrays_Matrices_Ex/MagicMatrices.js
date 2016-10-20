function magicMatrices (input) {
  let count = 0
  let matrix = input.map(i => i.split(' ').map(Number))
  for (let row = 0; row < matrix.length; row++) {
    for (let col = 0; col < matrix[row].length; col++) {
      console.log(matrix[row][col])
      count++
    }
  }
}

magicMatrices(['4 5 6',
  '6 5 4',
  '5 5 5'])

