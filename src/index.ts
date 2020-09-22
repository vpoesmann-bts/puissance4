const ROWS: number = 6;
const COLUMNS: number = 7;

const grid: number[][] = [];

let currentPlayerTurn: number = 1;

for (let i = 0 ; i < ROWS ; i++) {
  grid.push([]);
  for (let j = 0 ; j < COLUMNS ; j++) {
    grid[i].push(0);
  }
}

console.log(grid);

function insertCoin(playerNumber: number, column: number): boolean {
  if (grid[0][column] != 0) {
    return false;
  }
  if (column < 0 || column >= COLUMNS) {
    return false;
  }

  for (let i = 0 ; i < ROWS ; i++) {
    if (i + 1 == ROWS || grid[i+1][column] != 0) {
      grid[i][column] = playerNumber;
      break;
    }
  }
  return true;
}

function play(column: number): void {
  if (!insertCoin(currentPlayerTurn, column)) {
    return
  }

  if (currentPlayerTurn == 1) {
    currentPlayerTurn = 2;
  } else {
    currentPlayerTurn = 1;
  }
  console.log(grid);
}


document.addEventListener('keydown', (event) => {
  console.log("PRESSED");
  const keyName = event.key;
  const columns = ["1", "2", "3", "4", "5", "6", "7"];

  if (columns.includes(keyName)) {
    play(parseInt(keyName) - 1);
  }
});
