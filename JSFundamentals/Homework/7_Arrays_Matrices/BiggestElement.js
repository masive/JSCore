function biggestElement (input) {
    let matrix = input.map(i => i.split(' ').map(Number));
    let arrResult = [];
    for (let elememts of matrix) {
        for (let element of elememts) {
            arrResult.push(element);
        }
    }

    arrResult.sort((a, b) => b - a);
    console.log(arrResult[0]);
}

biggestElement(['20 50 10', '8 33 145']);