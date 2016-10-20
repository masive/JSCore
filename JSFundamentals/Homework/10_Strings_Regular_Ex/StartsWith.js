function startsWith (input) {
    let text = input[0].toLowerCase();
    let subStr = input[1];
    let isFound = text.indexOf(subStr);
    if (isFound === 0) {
        return true;
    } else {
        return false;
    }
}

console.log(startsWith(['How have you been?', 'how']));