function palindrome (input) {
    let str = input[0];
    for (let i = 0; i < str.length / 2 ; i++)
        if (str[i] !== str[str.length - i - 1])
            return false;
    return true;
}

console.log(palindrome(['haha']));
console.log(palindrome(['unitinu']));
console.log(palindrome(['racecar']));