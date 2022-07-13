const gameBoardUI = (game, showShip) => {
    const content = document.querySelector('.content');
    const tiles = game.board;

    const boardUI = document.createElement('div');
    boardUI.classList.add('board-ui');

    for(let i = 0; i < tiles.length; i++) {
        for(let j = 0; j < tiles.length; j++) {
            if(typeof tiles[i][j] === 'object' && showShip) {
                boardUI.append(createTileDiv(i, j, true))
            } else if (showShip) {
                boardUI.append(createTileDiv(i, j, false))
            } else {
                boardUI.append(createTileDiv(i, j, false, true))
            }

        }
    }

    return content.append(boardUI);
};

// creates a div for each arrays
const createTileDiv = (row, column, ship, opponent) => {
    const tile = document.createElement('div');
    tile.dataset.row = row;
    tile.dataset.column = column;
    if(opponent) {
        tile.classList.add('opponent-tile');
    } else {
        tile.classList.add('player-tile');
    }
    // if ship is passed true add class list of has ship
    if(ship) {
        tile.classList.add('has-ship');
    }

    return tile;
}





export {gameBoardUI}