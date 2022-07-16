import { removeWinnerUI } from "../UI/WinnerUI";
import { createAllShips } from "./game";
import { placeShipsPage } from "./placeShipFunctions";
import { startGame } from "./startGame";





const playAgainBtn = (mainBoard, opponentBoard, mainPlayer, opponent, mainShips, controls) => {
    mainBoard.resetBoard();
    opponentBoard.resetBoard();
    mainShips = createAllShips();
    controls.resetValues();
    removeWinnerUI();
    placeShipsPage(opponentBoard, mainBoard, mainShips, controls);
    startGame(mainBoard, opponentBoard, mainPlayer, opponent, mainShips, controls);
};

const playAgain = (mainBoard, opponentBoard, mainPlayer, opponent, mainShips, controls) => {
    const btn = document.querySelector('.play-again');
    btn.addEventListener('click', function() {
        playAgainBtn(mainBoard, opponentBoard, mainPlayer, opponent, mainShips, controls);
    })
    };


export {playAgain}