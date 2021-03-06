var ROWS = 6;
var COLUMNS = 7;
var grid = [];
var currentPlayerTurn = 1;
for (var i = 0; i < ROWS; i++) {
    grid.push([]);
    for (var j = 0; j < COLUMNS; j++) {
        grid[i].push(0);
    }
}
console.log(grid);
function insertCoin(playerNumber, column) {
    if (grid[0][column] != 0) {
        return false;
    }
    if (column < 0 || column >= COLUMNS) {
        return false;
    }
    for (var i = 0; i < ROWS; i++) {
        if (i + 1 == ROWS || grid[i + 1][column] != 0) {
            grid[i][column] = playerNumber;
            break;
        }
    }
    return true;
}
function play(column) {
    if (!insertCoin(currentPlayerTurn, column)) {
        return;
    }
    if (currentPlayerTurn == 1) {
        currentPlayerTurn = 2;
    }
    else {
        currentPlayerTurn = 1;
    }
    console.log(grid);
}
document.addEventListener('keydown', function (event) {
    console.log("PRESSED");
    var keyName = event.key;
    var columns = ["1", "2", "3", "4", "5", "6", "7"];
    if (columns.includes(keyName)) {
        play(parseInt(keyName) - 1);
    }
});
