function endsWith (input) {
    let str = input[0];
    let subStr = input[1];
    return str.endsWith(subStr);
}

console.log(endsWith(['This sentence ends with fun?', 'fun?']));