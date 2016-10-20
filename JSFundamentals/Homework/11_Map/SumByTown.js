function sumByTown (data) {
    let sum = {};
    for (let i = 0; i < data.length; i += 2) {
        let town = data[i];
        let income = Number(data[i+1]);
        if (!sum[town]){
            sum[town] = income;
        } else {
            sum[town] += income;
        }
    }
    console.log(JSON.stringify(sum));
}

sumByTown(['Sofia', '20', 'Varna', '3', 'Sofia', '5', 'Varna', '4']);