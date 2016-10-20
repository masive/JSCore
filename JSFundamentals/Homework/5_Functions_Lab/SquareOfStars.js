function squareOfStars (input = 5) {
    let n = Number(input);
    let star = '* ';
    for (let i = 0; i < n; i++) {
        console.log(star.repeat(n));
    }
}

squareOfStars(['1']);
squareOfStars(['2']);
squareOfStars(['3']);
squareOfStars(['4']);
squareOfStars(['5']);
squareOfStars();