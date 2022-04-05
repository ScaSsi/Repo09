// Only change code below this line
function randomRangeNumber(minNumber, maxNumber) {
    return Math.floor(Math.random() * (maxNumber - minNumber + 1)) + minNumber;
}

randomRangeNumber(5, 15);

console.log(randomRangeNumber(5, 15));
// only change code above this line
module.exports = randomRangeNumber;