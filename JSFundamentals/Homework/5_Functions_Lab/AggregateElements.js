function aggregateElements (input) {
    let sumResult = sum(input);
    let invSum = inverseSum(input);
    let concatNums = concat(input);
    function sum (input) {
        let sum = 0;
        for (let i = 0; i < input.length; i++) {
            sum += Number(input[i]);
        }
        return sum;
    }

    function inverseSum (input) {
        let sum = 0;
        for (let i = 0; i < input.length; i++) {
            sum += 1 / input[i];
        }
        return sum;
    }

    function concat (input) {
        let sum = '';
        for (let i = 0; i < input.length; i++) {
            sum += input[i];
        }
        return sum;
    }

    console.log(`${sumResult}\n${invSum}\n${concatNums}`);
}

aggregateElements(['1', '2', '3']);
aggregateElements(['2', '4', '8', '16']);