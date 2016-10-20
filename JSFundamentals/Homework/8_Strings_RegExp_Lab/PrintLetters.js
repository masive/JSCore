function printLetters (input) {
    let str = input[0];
    let index = 0;
    for(let letters of str) {
        console.log(`str[${index}] -> ${letters}`);
        index++
    }
}

printLetters(['Hello, World!']);