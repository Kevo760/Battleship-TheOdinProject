import {winnerUI} from '../UI/WinnerUI';
import { removeContentUI } from '../UI/contentUI';
import { playAgain } from './playAgain';

const gameTurnHandler = (mainBoard, opponentBoard, mainPlayer, opponent, mainShips, controls, event) => {
    // passes e target to current tile
   const currentTile = event.target;
   // passes current tile dataset onto column and row
   const column = currentTile.dataset.column;
   const row = currentTile.dataset.row;

  
    // Main player attacks
        // Pass recieveAttack function on selected row and column
        mainPlayer.attack(opponentBoard, row, column);
       // opponentGame.receiveAttack(row, column);
        // Convert row and column into a variable array
        const position = [row, column];
        //if missed shot is true
        if(opponentBoard.missedShot(position)) {
            currentTile.classList.add('miss');
        } else {
            currentTile.classList.add('hit');
        };
   
    // Computer attacks after player selects
        
        // random attack array value pass on position2
        const position2 = opponent.randomAttack(mainBoard);
        // converst random attack array into row and column
        const row2 = position2[0];
        const column2 = position2[1];
        // Checks to see if missShot is true
        if(mainBoard.missedShot(position2) ){
            document.querySelector(`[data-row="${row2}"][data-column="${column2}"].player-tile`)
            .classList.add('miss');
        } else {
            document.querySelector(`[data-row="${row2}"][data-column="${column2}"].player-tile`)
            .classList.add('hit');
        };
        
        // if opponents ships are all sunk remove contentUI, display winnerUI, playAgain! else opponent wins
        if(opponentBoard.checkAllShipsSunk() === true) {
            removeContentUI();
            winnerUI(mainPlayer.name);
            playAgain(mainBoard, opponentBoard, mainPlayer, opponent, mainShips, controls);
   
        } else if (mainBoard.checkAllShipsSunk() === true) {
            removeContentUI();
            winnerUI(opponent.name);
            playAgain(mainBoard, opponentBoard, mainPlayer, opponent, mainShips, controls);
        }
        
};


const gameTurn = (mainBoard, opponentBoard, mainPlayer, opponent, mainShips, controls) => {
    const tiles = document.querySelectorAll('.opponent-tile');
    tiles.forEach(tile => {
        tile.addEventListener('click', function(event) {
            gameTurnHandler(mainBoard, opponentBoard, mainPlayer, opponent, mainShips, controls, event);
        }, {once: true});
    })

}

export {gameTurn};
