function figureOfSquares (input) {
  let n = Number(input[0])
  let plus = '+'
  let dash = '-'
  let pipe = '|'
  let space = ' '
  if (n % 2 === 0) {
    if (n > 4) {
      console.log(plus + (dash.repeat(n - 2)) + plus + (dash.repeat(n - 2)) + plus)
      for (let i = 1; i < n / 2 - 1; i++) {
        console.log(pipe + (space.repeat(n - 2)) + pipe + (space.repeat(n - 2)) + pipe)
      }
      console.log(plus + (dash.repeat(n - 2)) + plus + (dash.repeat(n - 2)) + plus)
      for (let i = 1; i < n / 2 - 1; i++) {
        console.log(pipe + (space.repeat(n - 2)) + pipe + (space.repeat(n - 2)) + pipe)
      }
      console.log(plus + (dash.repeat(n - 2)) + plus + (dash.repeat(n - 2)) + plus)
    } else if (n === 2) {
      for (let i = 0; i < n + 1; i++) {
        console.log(plus + (dash.repeat(n - 2)) + plus + (dash.repeat(n - 2)) + plus)
      }
    } else {
      for (let i = 1; i < n; i++) {
        console.log(plus + (dash.repeat(n - 2)) + plus + (dash.repeat(n - 2)) + plus)
      }
    }
  } else {
    console.log(plus + (dash.repeat(n - 2)) + plus + (dash.repeat(n - 2)) + plus)
    for (let i = 1; i < n / 2 - 1; i++) {
      console.log(pipe + (space.repeat(n - 2)) + pipe + (space.repeat(n - 2)) + pipe)
    }
    console.log(plus + (dash.repeat(n - 2)) + plus + (dash.repeat(n - 2)) + plus)
    for (let i = 1; i < n / 2 - 1; i++) {
      console.log(pipe + (space.repeat(n - 2)) + pipe + (space.repeat(n - 2)) + pipe)
    }
    console.log(plus + (dash.repeat(n - 2)) + plus + (dash.repeat(n - 2)) + plus)
  }
}

figureOfSquares(['2'])
figureOfSquares(['3'])
figureOfSquares(['4'])
figureOfSquares(['5'])
figureOfSquares(['6'])
figureOfSquares(['7'])
figureOfSquares(['8'])
figureOfSquares(['9'])
figureOfSquares(['10'])
figureOfSquares(['11'])



// +--+--+
// +--+--+
// +--+--+

// +---+---+
// |   |   |
// +---+---+
// |   |   |
// +---+---+

// +-----+-----+
// |     |     |
// |     |     |
// +-----+-----+
// |     |     |
// |     |     |
// +-----+-----+
