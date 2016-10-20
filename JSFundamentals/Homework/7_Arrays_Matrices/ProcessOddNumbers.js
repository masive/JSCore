function processOddNumbers (input) {
    let arr = input.map(Number);
    let result = [];
    let arrFinal = [];
    for (let index in arr) {
        if(index % 2 !== 0) {
            result.push(arr[index] * 2)
        }
    }
    for (let i = result.length - 1; i >= 0; i--) {
        arrFinal.push(result[i]);
    }
    console.log(arrFinal.join(' '));
}

processOddNumbers(['10', '15', '20', '25']);
processOddNumbers(['3', '0', '10', '4', '7', '3']);