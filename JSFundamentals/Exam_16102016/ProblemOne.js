function arithmephile (input) {
    let numArr = input.map(Number);
    let numBelowTen = [];
    for (let num of numArr) {
        if(num >= 0 && 10 < num )
            numBelowTen.push(num);
    }
    console.log(numArr);
    console.log(numBelowTen);

}

arithmephile([ '10', '20', '2', '30', '44', '3', '56', '20', '24']);