function oddNumbers (args) {
  let num = Number(args[0])
  for (let i = 1; i <= num; i += 1) {
    if (i % 2 !== 0) {
      console.log(i)
    }
  }
}

oddNumbers(['7'])
