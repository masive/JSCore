function functionalCalculator (input) {
    let [num1, num2] =[input[0], input[1]].map(Number);
    let operation = input[2];
    let result = calc(num1, num2, operation);
    function calc (num1, num2, operation) {
        switch (operation) {
            case '+': return num1 + num2;
                break;
            case '-': return num1 - num2;
                break;
            case '*': return num1 * num2;
                break;
            case '/': return num1 / num2;
                break;
            case '%': return num1 % num2;
                break;
            default: return 'error';
        }

    }
    return result
}

console.log(functionalCalculator(['1', '2', '+']));
console.log(functionalCalculator(['2', '-2', '*']));
console.log(functionalCalculator(['8', '2', '/']));
console.log(functionalCalculator(['12', '2', '-']));