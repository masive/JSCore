function calculateSumAndVat (args) {
    let sum = 0;
    for(num of args){
        sum += Number(num);
    }

    console.log("sum = " + sum);
    console.log("VAT = " + sum * 0.20);
    console.log("total = " + sum * 1.20);
}

calculateSumAndVat(['1', '2', '3'])