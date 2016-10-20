function compoundInterest (args) {
  let p = Number(args[0])
  let i = (args[1] / 100) / 12
  let n = Number(args[2])
  let t = args[3] * 12
  let f = 0

  for (let j = 1; j < n; j++) {
    f += (f + p) * (1 + i)
  }

  console.log(f.toFixed(2))
}

compoundInterest(['1500', '4.3', '3', '6'])
compoundInterest(['100000', '5', '12', '25'])

