const gameBoardUI = (game) => {
    const tiles = game.board;

    const boardUI = document.createElement('div');
    boardUI.classList.add('board-ui');

    for(let i = 0; i < tiles.length; i++) {
        for(let j = 0; j < tiles.length; j++) {
            boardUI.append(createTileDiv(i, j))
        }
    }

    document.body.append(boardUI);
};

const createTileDiv = (row, column) => {
    const tile = document.createElement('div');
    tile.classList.add('tile');
    tile.dataset.row = row;
    tile.dataset.column = column;

    return tile;
}



export {gameBoardUI}