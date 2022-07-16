import { gameTurn } from "./gameTurn";
import { contentUI } from "../UI/contentUI";
import { gameBoardUI } from "../UI/gameboardUI";
import { removePlaceShipUI } from "../UI/placeShipUI";




const startGameHandler = (mainBoard, opponentBoard, mainPlayer, opponent, mainShips, controls) => {
    removePlaceShipUI();
    opponent.placeShipsRandomly(opponentBoard);
    contentUI();
    gameBoardUI(opponentBoard);
    gameBoardUI(mainBoard, true);
    gameTurn(mainBoard, opponentBoard, mainPlayer, opponent, mainShips, controls);
};



const startGame = (mainBoard, opponentBoard, mainPlayer, opponent, mainShips, controls) => {
    const btn = document.querySelector('.start-game');
    btn.addEventListener('click', function() {
        startGameHandler(mainBoard, opponentBoard, mainPlayer, opponent, mainShips, controls);
    })
};

export {startGame};
