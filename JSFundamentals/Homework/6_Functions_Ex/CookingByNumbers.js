function operations (input) {
  let num = Number(input[0])
  for (let i = 1; i < input.length; i++) {
    if (input[i] === 'chop') {
      num = num / 2
    } else if (input[i] === 'dice') {
      num = Math.sqrt(num)
    } else if (input[i] === 'spice') {
      num = num + 1
    } else if (input[i] === 'bake') {
      num = num * 3
    } else if (input[i] === 'bake') {
      num = num * 3
    } else if (input[i] === 'fillet') {
      num = num - (num * 0.2)
    }
    console.log(num)
  }
}

operations(['32', 'chop', 'chop', 'chop', 'chop', 'chop'])
operations(['9', 'dice', 'spice', 'chop', 'bake', 'fillet'])
