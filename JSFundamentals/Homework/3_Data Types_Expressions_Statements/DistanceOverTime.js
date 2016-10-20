function distance (args) {
  let vOne = Number(args[0])
  let vTwo = Number(args[1]) 
  let t = Number(args[2])
  let objOneDistance = (t / 60) / 60 * vOne
  let objTwoDistance = (t / 60) / 60 * vTwo
  let delta = Math.abs((objOneDistance - objTwoDistance) * 1000)
  console.log(delta)
}

distance(['0', '60', '3600'])
distance(['11', '10', '120'])
distance(['5', '-5', '40'])
