function boxesAndBottles (args) {
    
    let bottles = Number(args[0])
    let capacity = Number(args[1])
    let numOfBoxes = 0

    if (bottles % capacity == 0)
        numOfBoxes = bottles / capacity
    if (bottles % capacity != 0)
        numOfBoxes = Math.ceil(bottles / capacity)
    if (bottles <= capacity) 
        numOfBoxes = 1

    return numOfBoxes
}

//Tests
console.log(boxesAndBottles(['20', '5']))
console.log(boxesAndBottles(['15', '7']))
console.log(boxesAndBottles(['5', '10']))