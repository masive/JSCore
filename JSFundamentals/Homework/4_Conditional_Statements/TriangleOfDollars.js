function dollarTriangle (args) {
  let row = Number(args[0])
  let line = ''
  for (let col = 1; col <= row; col += 1) {
    line += '$'
    console.log(line)
  }
}

dollarTriangle(['5'])
