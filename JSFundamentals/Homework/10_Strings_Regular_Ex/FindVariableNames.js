function findVariableNames (input) {
  let pattern = '\\b_([a-zA-Z0-9]+)\\b'
  let regex = new RegExp(pattern, 'g')
  let match = regex.exec(input)
  let result = []
  while (match) {
    result.push(match[1])
    match = regex.exec(input)
  }
  console.log(result.join(','))
}

findVariableNames(['The _id and _age variables are both integers.'])
findVariableNames(['Calculate the _area of the _perfectRectangle object.'])
findVariableNames(['__invalidVariable _evenMoreInvalidVariable_ _validVariable'])
