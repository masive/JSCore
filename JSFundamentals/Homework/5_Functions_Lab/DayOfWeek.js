function dayOfWeek (input) {
    let day = input[0];
    switch (day.toLowerCase()) {
        case 'monday': return 1;
            break;
        case 'tuesday': return 2;
            break;
        case 'wednesday': return 3;
            break;
        case 'thursday': return 4;
            break;
        case 'friday': return 5;
            break;
        case 'saturday': return 6;
            break;
        case 'sunday': return 7;
            break;
        default: return 'error';
            break
    }
}

console.log(dayOfWeek(['Monday']));
console.log(dayOfWeek(['Tralala']));
console.log(dayOfWeek(['SUNDAY']));