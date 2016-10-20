function sumThreeNumbers (args) {
    let numOne = Number(args[0]);
    let numTwo = Number(args[1]);
    let numThree = Number(args[2]);
    let sum = numOne + numTwo + numThree;
    console.log(sum); 
}

sumThreeNumbers(['1', '2', '3']);