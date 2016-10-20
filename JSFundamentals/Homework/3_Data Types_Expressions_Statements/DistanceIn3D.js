function distanceIn3D (args) {
  let [x1, y1, z1] = [Number(args[0]), Number(args[1]), Number(args[2])]
  let [x2, y2, z2] = [Number(args[3]), Number(args[4]), Number(args[5])]
  let distance = Math.sqrt(Math.pow((x1 - x2), 2) + Math.pow((y1 - y2), 2) + Math.pow((z1 - z2), 2))
  console.log(distance)
}

distanceIn3D(['1', '1', '0', '5', '4', '0'])
distanceIn3D(['3.5', '0', '1', '0', '2', '-1'])
