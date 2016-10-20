function concatenateAndReverse (input) {
    let str = '';
    let result = '';
    for (let i of input) {
        str += i;
    }

    for (let i = str.length - 1; i >= 0; i--) {
        result += str[i];
    }

    console.log(result);
}

concatenateAndReverse(['I', 'am', 'student']);
concatenateAndReverse(['race', 'car']);