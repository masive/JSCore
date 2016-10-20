function stringOfnumbers(args) {
    let result = '';
    for(let i = 1; i <= args[0]; i +=1)
        result += '' + i;
    console.log(result);
}

//Tests
stringOfnumbers(['10'])
stringOfnumbers(['50'])
stringOfnumbers(['66'])