function multiplicationTable (input) {
  let n = Number(input[0])
  let str = ''
  console.log("<table border='1'>")
  console.log('<tr>' + '<th>x</th>')
  for (let i = 1; i <= n; i += 1) {
    console.log(`<th>${i}<th>`)
    for (let j = 1; j <= n; j += 1) {
     let str = j.toString.repeat
      console.log(str)
    }
  }
}

multiplicationTable(['5'])
