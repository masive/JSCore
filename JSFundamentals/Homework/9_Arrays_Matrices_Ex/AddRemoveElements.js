function addRemoveElements (input) {
  let result = []
  let count = 0
  for (let i = 0; i < input.length; i++) {
    if (input[i] === 'add') {
      count++
      result.push(count)
    } else if (input[i] === 'remove') {
      count++
      result.pop()
    }
  }

  if (result.length === 0) {
    console.log('Empty')
  } else {
    for (let num of result) {
      console.log(num)
    }
  }
}

addRemoveElements(['add', 'add', 'add', 'add'])
addRemoveElements(['add', 'add', 'remove', 'add', 'add'])
addRemoveElements(['remove', 'remove', 'remove', 'remove'])
addRemoveElements(['add', 'remove'])
