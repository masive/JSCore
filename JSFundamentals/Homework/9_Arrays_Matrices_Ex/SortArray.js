function sortArray (input) {
  let arr = []
  for (let element of input) {
    arr.push(element.toLowerCase())
  }
  function isLonger (arr) {
    for (let i = 0; i < arr.length - 1; i++) {
      if (arr[i].length < arr[i + 1].length) {
        return 1
      } else {
        return 0
      }
    }
  }

  console.log(arr.sort(isLonger))
}

sortArray(['alpha', 'beta', 'gamma'])
