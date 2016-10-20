function lastKNumbers (input) {
  let n = input[0];
  let k = input[1];
  let result = [1];

  for (let i = 1; i <= n; i++) {
    let start = Math.max(0, i - k);
    let end = i - 1;
    let sum = result[start + 1] + result[end]
    result[i] = sum
  }
  console.log(result.join(' '))
}

lastKNumbers(['6', '3']);

