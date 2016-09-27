function assignProperties (args) {
  let [key1, key2, key3] = [args[0], args[2], args[4]]
  let [val1, val2, val3] = [args[1], args[3], args[5]]
  let someObj = {
    [key1]: val1,
    [key2]: val2,
    [key3]: val3
  }

  return someObj
}

console.log(assignProperties(['name', 'Pesho', 'age', '23', 'gender', 'male']))

