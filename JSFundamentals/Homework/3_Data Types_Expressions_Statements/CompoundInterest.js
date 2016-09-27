function compoundInterest (args) {
  let sum = Number(args[0])
  let inRate = (args[1] / 100) / 12
  let compPeriod = Number(args[2])
  let timespan = args[3] * 12

  for (let i = timespan; i > 0; i -= 3) {
    sum += sum * (inRate * compPeriod)
  }

  console.log(sum.toFixed(2))
}

compoundInterest(['1500', '4.3', '3', '6'])
compoundInterest(['100000', '5', '12', '25'])
