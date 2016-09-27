function countLetter (args) {
    
    let string = args[0];
    let char = args[1];
    let count = 0;

    for (letter of string){
        if(char === letter)
            count++;
    }

    console.log(count);
}

countLetter(['a', "abababaa"])