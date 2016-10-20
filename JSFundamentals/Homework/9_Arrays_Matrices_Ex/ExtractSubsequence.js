function extractSubsequence (input) {
  input.map(Number)
  //let filtered = input.filter(isBigEnough)
  let element = 0
  console.log(element)
  for (let i = 1; i < input.length - 1; i++) {
    if ((input[i] < input[i - 1]) && (input[i] < input[i + 1])) {
      element = input[i]
      console.log(input[i])
    }
  }
  //function isBigEnough (input) {
  //  return input >= element
  //}
  //console.log(filtered)
}

extractSubsequence(['1', '3', '8', '4', '10', '12', '3', '2', '24'])
//extractSubsequence(['1', '2', '3', '4'])
//extractSubsequence(['20', '3', '2', '15', '6', '1'])

// function isBigEnough(value) {
  // return value >= 10;
// }
// var filtered = [12, 5, 8, 130, 44].filter(isBigEnough);
// filtered is [12, 130, 44]
