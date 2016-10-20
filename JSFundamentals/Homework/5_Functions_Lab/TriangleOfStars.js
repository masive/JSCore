function triangleOfStars (input) {
    let n = Number(input[0]);
    let star = '*';

    function upperHalf (n) {
        for (let i = 1; i <= n; i++) {
            console.log(star.repeat(i));
        }
    }

    function downHalf (n) {
        for (let i = n - 1 ; i > 0; i--) {
            console.log(star.repeat(i));
        }
    }
    upperHalf(n);
    downHalf(n);
}

triangleOfStars(['1']);
triangleOfStars(['2']);
triangleOfStars(['3']);
triangleOfStars(['4']);