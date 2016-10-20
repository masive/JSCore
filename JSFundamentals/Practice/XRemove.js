function xRemove (input) {
    let temp = [];
    let count = 0;
    let arrStr = input.map(x => x.toLowerCase()).map(x => x.split(''));
    console.log(arrStr);
    for (let row = 0; row < arrStr.length - 2; row++) {
        for (let col = 0; col < arrStr[row].length - 2; col++) {
            if(arrStr[row][col] == arrStr[row + 1][col + 1]) {
                temp.push((arrStr[row][col]));
            }
        }
    }

    for (let col = 0; col < arrStr.length - 1; col++) {
        for (let row = 0; row < arrStr[col].length - 2; row++) {
            if(arrStr[row][col] == arrStr[row + 1][col + 1]) {
                temp.push((arrStr[row][col]));
            }
        }
    }
    console.log(temp);
}

xRemove(['abnbj',
         'xoBab',
         'Abmbh',
         'aabab',
         'ababv']);


// abnbjs
// xoBab
// Abmbh
// aabab
// ababvvvv
