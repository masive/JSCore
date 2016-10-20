function splitString (input) {
  let delimiter = input[input.length - 1]
  input.pop()
  let result = input.map(i => i.split(delimiter))
  for (let i = 0; i < result.length; i++) {
    let row = result[i]
    for (let j = 0; j < row.length; j++) {
      console.log(row[j])
    }
  }
}

splitString(['One-Two-Three-Four-Five', '-'])
splitString(['http://platform.softuni.bg', '.'])
