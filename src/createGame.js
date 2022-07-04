import { Gameboard } from "./functions/gameboardFactory";
import { Player } from "./functions/player";
import { gameBoardUI } from "./UI/gameboardUI";
import { createHeaderUI } from "./UI/headerUI";
import './style.css';


const createGame = () => {
    createHeaderUI('Battleship Lite');
    const game = new Gameboard;
    const playerOne = new Player('kev');
    playerOne.placeShipsRandomly(game);



    gameBoardUI(game);
    
    

    console.log(game);

};


export {createGame}