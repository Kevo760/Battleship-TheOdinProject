import { createGame } from "./createGame";
import { startGameUI } from "./UI/startGameUI";
import { verticleTogglerHandler, mouseLeaveHandler, mouseOverHandler, mouseClickHandler } from "./mockUp";

import { Gameboard } from "./functions/gameboardFactory";
import { Player } from "./functions/player";
import { createHeaderUI } from "./UI/headerUI";
import './style.css';
import { createAllShips, Controller } from "./game/game";

createHeaderUI('Battleship Lite');

const mainBoard = new Gameboard;
const opponentBoard = new Gameboard;


const mainPlayer = new Player('You');
const opponent = new Player('opponent');
const mainShips = createAllShips();

const controls = new Controller;






startGameUI(mainBoard);
verticleTogglerHandler(controls);
mouseOverHandler(mainShips, controls);
mouseLeaveHandler(mainShips, controls);
mouseClickHandler(mainBoard, mainShips, controls);












