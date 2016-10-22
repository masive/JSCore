function attachEvents() {
    $('#items li').on('click', clicked);
    let selectedTowns = [];
    let town;

    function clicked () {
        if (!$(this).hasClass('data-selected')){
            $(this).addClass('data-selected');
            town = $(this).text();
            if (!selectedTowns.includes(town))
                selectedTowns.push(town);
        } else {
            $(this).removeClass('data-selected');


        }

        console.log(selectedTowns);
        console.log(town);
    }
}



/*if (selectedTowns.length == 0) {
 selectedTowns.push(town);
 } else {
 for (let t of selectedTowns) {
 if (town !== t) {
 selectedTowns.push(town);
 }
 }
 }*/