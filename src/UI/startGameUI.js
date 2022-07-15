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
    

    const h1 = document.createElement('h1');
    h1.innerText = `It's time to battle!`

    const p = document.createElement('p');
    p.innerText = 'Place your five battleships';

    const block = document.createElement('div');
    block.classList.add('start-block');
    block.append(gameBoardUI(game));

    const startBtn = document.createElement('button');
    startBtn.classList.add('start-game');
    startBtn.innerText = 'Begin Game!';
    startBtn.disabled = true;



    controls.append(h1);
    controls.append(p);
    controls.append(toggle());


    modal.append(controls);
    modal.append(block);
    modal.append(startBtn);
    

    return document.body.append(modal);
};

const removeStartGameUI = () => {
    const modal = document.querySelector('.start-modal');

    return modal.remove();
};

const enableStartBtn = () => {
    const startBtn = document.querySelector('.start-game');
    startBtn.disabled = false;
};




export { startGameUI, removeStartGameUI , enableStartBtn}