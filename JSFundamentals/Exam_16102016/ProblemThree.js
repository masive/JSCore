function spyMaster (input) {
    let key = input[0];
    let text = [];
    let regex = new RegExp(`(${key}\\s*)\\b([A-Z]\\S+|(\\$#!%))`, 'gi');
    let match = [];
    let encoded = [];
    let decoded = [];
    let changed = [];
    for (let i = 1; i < input.length; i++) {
        match.push(regex.exec(input[i]));
        text.push(input[i]);
    }
    for (let j = 1; j < match.length; j++) {
        if (match[j] !== null) {
            encoded.push(match[j][2]);
        }
    }
    for (let word of encoded) {
        let secondPart = '';
        for (let i = 0; i < word.length; i++) {
            let char = word[i];
            switch (char) {
                case '!' :
                    char = 1;
                    break;
                case '%' :
                    char = 2;
                    break;
                case '#' :
                    char = 3;
                    break;
                case '$' :
                    char = 4;
                    break;
            }
            if (word[i] !== word[i].toLowerCase()) {
                char = word[i].toLowerCase();
            }
            secondPart += char;
        }
        decoded.push(secondPart);
    }

    for (let i = 0; i <= text.length; i++) {
        let str = input[i].toString();
        let enc, dec;
        if (i % 2 == 0) {
            enc = encoded[0];
            dec = decoded[0];
        } else {
            enc = encoded[1];
            dec = decoded[1];
        }
        changed.push(str.replace(enc, dec));
    }
    for (let i = 1; i < changed.length; i++) {
        console.log(changed[i]);
    }

    console.log(match);
    console.log(encoded);
    console.log(decoded);
    //console.log(changed);
}


/*spyMaster([ 'enCode',
            'Some messages are just not encoded what can you do?',
            'RE - ENCODE THEMNOW! - he said.',
            'Damn encode, ITSALLHETHINKSABOUT, eNcoDe BULL$#!%.']);*/

spyMaster([ 'specialKey',
            'In this text the specialKey HELLOWORLD! is correct, but',
            'the following specialKey $HelloWorl#d and spEcIaLKEy HOLLOWORLD1 are not, while',
            'SpeCIaLkeY   SOM%%ETH$IN and SPECIALKEY ##$$##$$ are!' ])