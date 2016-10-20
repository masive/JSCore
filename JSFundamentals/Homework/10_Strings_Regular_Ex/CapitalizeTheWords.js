function capitalizeTheWords (input) {
    let strArr = input.map(x => x.split(' '));
    let result = [];
    for (let index in strArr) {
        for (let word of strArr[index]) {
            result.push(word[0].toUpperCase() + word.substr(1, word.length).toLowerCase());
        }
    }
    console.log(result.join(' '));
}

capitalizeTheWords(['Capitalize these words']);
capitalizeTheWords(['Was that Easy? tRY thIs onE for SiZe!']);