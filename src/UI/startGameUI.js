import { toggle } from "./toggle";
import { Ship } from "../functions/shipFactory";


const createTileDiv = (row, column) => {
    const tile = document.createElement('div');
    tile.dataset.row = row;
    tile.dataset.column = column;
    tile.classList.add('tile');

    return tile;
};







const gameBoardUI = (game) => {
    const tiles = game.board;

    const boardUI = document.createElement('div');
    boardUI.classList.add('board-ui');

    for(let i = 0; i < tiles.length; i++) {
        for(let j = 0; j < tiles.length; j++) {
                boardUI.append(createTileDiv(i, j))

        }
    }

    return boardUI;
};





const startGameUI = (game) => {


    const modal = document.createElement('div');
    modal.classList.add('start-modal');

    const controls = document.createElement('div');
    controls.classList.add('controls');
    controls.append(toggle());

    const block = document.createElement('div');
    block.classList.add('start-block');
    block.append(gameBoardUI(game));






    modal.append(controls);
    modal.append(block);
    





    return document.body.append(modal);
};



export { startGameUI }