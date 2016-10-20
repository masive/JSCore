function diagonalSums (input) {
    let matrix = input.map(i => i.split(' ').map(Number));
    let firstSum = 0;
    let secondSum = 0;

    for (let row = 0; row < matrix.length; row++) {
        let matrixRow = matrix[row];
        firstSum += matrix[row][row];
        secondSum += matrix[row][matrixRow.length - row - 1];

    }
    console.log(`${firstSum} ${secondSum}`);
}

diagonalSums(['20 40',
              '10 60']);

diagonalSums(['3 5 17',
              '-1 7 14',
              '1 -8 89']);

