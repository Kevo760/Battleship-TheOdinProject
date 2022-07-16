import { Gameboard } from "./functions/gameboardFactory";
import { Player } from "./functions/player";
import { createHeaderUI } from "./UI/headerUI";
import './style.css';
import { placeShipsPage } from "./game/placeShipFunctions";
import { createAllShips, Controller } from "./game/game";
import {startGame} from './game/startGame';




createHeaderUI('Battleship Lite');

const mainBoard = new Gameboard;
const opponentBoard = new Gameboard;


const mainPlayer = new Player('You');
const opponent = new Player('opponent');
const mainShips = createAllShips();

const controls = new Controller;


placeShipsPage(opponentBoard, mainBoard, mainShips, controls);
startGame(mainBoard, opponentBoard, mainPlayer, opponent, mainShips, controls);




















