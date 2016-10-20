function areaAndPerimeter (args) {
  let siteA = Number(args[0])
  let siteB = Number(args[1])
  let area = siteA * siteB
  let perimeter = (siteA * 2) + (siteB * 2)
  return {
    area: area,
    perimeter: perimeter
  }
}

console.log(areaAndPerimeter(['2', '2']).area + '\n' + areaAndPerimeter(['2', '2']).perimeter)
console.log(areaAndPerimeter(['1', '3']).area + '\n' + areaAndPerimeter(['1', '3']).perimeter)
console.log(areaAndPerimeter(['2.5', '3.14']).area.toFixed(2) + '\n' + areaAndPerimeter(['2.5', '3.14']).perimeter.toFixed(2))




