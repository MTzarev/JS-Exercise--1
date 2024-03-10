function tennisRanklist(input) {
    let index = 0
    let tournirsNum = Number(input[index]);
    index++
    let startScore = Number(input[index]);
    index++
    let tournirsScore = 0

    let winCounter = 0
    for (let i = 0; i <= tournirsNum; i++) {
        let result = input[index];
        index++
        if (result === "W") {
            tournirsScore += 2000;
            winCounter++
        } else if (result === "F") {
            tournirsScore += 1200;
        } else if (result === "SF") {
            tournirsScore += 720;
        }
    }
    console.log(`Final points: ${startScore + tournirsScore}`);
    console.log(`Average points: ${Math.floor(tournirsScore / tournirsNum)}`)
    console.log(`${((winCounter / tournirsNum) * 100).toFixed(2)}%`)
}
tennisRanklist(["7",
    "1200",
    "SF",
    "F",
    "W",
    "F",
    "W",
    "SF",
    "W"])