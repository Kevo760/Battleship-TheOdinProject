import { Gameboard } from "./functions/gameboardFactory";
import { Player } from "./functions/player";
import { gameBoardUI } from "./UI/gameboardUI";
import { createHeaderUI } from "./UI/headerUI";
import './style.css';
import { contentUI, removeContentUI } from "./UI/contentUI";
import { winnerUI, removeWinnerUI } from "./UI/WinnerUI";
import { startGameUI, removeStartGameUI } from "./UI/startGameUI";
import { createAllShips } from "./game/game";



const createGame = () => {
    createHeaderUI('Battleship Lite');

    const playerGame = new Gameboard;
    const opponentGame = new Gameboard;


    const mainPlayer = new Player('You');
    const opponent = new Player('opponent');
    const myShips = createAllShips();


   startGameUI(playerGame);

    

    let click = 0;
    let isVerticle = true;

    ////////////////////////// FUNCTIONS ///////////////////////////////////


    // once run removes startgameUI, reset click, and is verticle value
    const startGameCheck = () => {
        removeStartGameUI();
        click = 0;
        isVerticle = true;

        opponent.placeShipsRandomly(opponentGame);
        contentUI();
        gameBoardUI(opponentGame, false);
        gameBoardUI(playerGame, true);
        const tiles = document.querySelectorAll('.opponent-tile');
        tiles.forEach(tile => {
        tile.addEventListener('click', gameTurn, {once : true});
    })

    };
    

    const tileSelector = (row, column) => {
        return document.querySelector(`[data-row="${row}"][data-column="${column}"],player-tile`)
    };

    const clickIt = (e) => {
        // converts row and column string to numbers
        let row = parseInt(e.target.dataset.row);
        let column = parseInt(e.target.dataset.column);
        // if placeship is true pass the functions below
        if(playerGame.placeShip(myShips[click], row, column, isVerticle) === true) {
            // if verticle add has-ship class on tiles vertically
            if(isVerticle) {
                for(let i = 0; i < myShips[click].length; i++) {
                    tileSelector(row + i, column)
                    .classList.add('place-ship');
                    const removeListener = tileSelector(row + i, column);
                    removeListener.removeEventListener('click', clickIt);
                };
            // else if its false add has-ship class on tiles horizontally
            } else {
                for(let i = 0; i < myShips[click].length; i++) {
                    tileSelector(row, column + i)
                    .classList.add('place-ship');
            };
        };
        // if place ship is true add to click
        click++;
        };
    };
    
    
    const mouseOver = (e) => {
        // if click is less than 5 add hover class
        if(click < 5 && isVerticle) {
         for(let i = 0; i < myShips[click].length; i++) {
           let row = parseInt(e.target.dataset.row) + i;
           // prevents adding the hover class on rows over 9
           if(row < 10) {
            tileSelector(row, e.target.dataset.column)
            .classList.add('hover');
           }
         }
        } else if (click < 5 && !isVerticle) {
            for(let i = 0; i < myShips[click].length; i++) {
                let column = parseInt(e.target.dataset.column) + i;
                // prevents adding the hover class on columns over 9
                if(column < 10) {
                    tileSelector(e.target.dataset.row, column)
                    .classList.add('hover');
                } 
            }
        } else  {
            startGameCheck();
        }
    };
    
    const mouseLeave = (e) => {
        //If click is less than 5 remove hover class
        if(click < 5 && isVerticle) {
            for(let i = 0; i < myShips[click].length; i++) {
                let row = parseInt(e.target.dataset.row) + i;
                // prevents removing the hover class on rows over 9
                if(row < 10) {
                 tileSelector(row, e.target.dataset.column)
                 .classList.remove('hover');
                }
            }
           } else if (click < 5 && !isVerticle) {
            for(let i = 0; i < myShips[click].length; i++) {
                let column = parseInt(e.target.dataset.column) + i;
                // prevents removing the hover class on columns over 9
                if(column < 10) {
                    tileSelector(e.target.dataset.row, column)
                    .classList.remove('hover');
                }
            }
        }
    };

    const checkBox = (e) => {
        // if e target is check verticle is false, is it is not checked verticle is true
        if(e.target.checked) {
            return isVerticle = false;
           
        } else {
            return isVerticle = true;
        }
    };

    const playAgain = () => {
        const play = () => {
    
            opponentGame.resetBoard();
            playerGame.resetBoard();
            removeWinnerUI();
            startGameUI(playerGame);
            const startTiles = document.querySelectorAll('.tile');
            startTiles.forEach(tile => {
                tile.addEventListener('click', clickIt);
                tile.addEventListener('mouseover', mouseOver);
                tile.addEventListener('mouseleave', mouseLeave);
            });
            // Handles the checkbox
            const checkbox = document.querySelector("input[type=checkbox]");
            checkbox.addEventListener('change', checkBox);
        };
    
    
        const playAgainBtn = document.querySelector('.play-again');
        playAgainBtn.addEventListener('click', play);
    }


    const gameTurn = (e) => {
        // passes e target to current tile
       const currentTile = e.target;
       // passes current tile dataset onto column and row
       const column = currentTile.dataset.column;
       const row = currentTile.dataset.row;


    
    
      
        // Main player attacks
            // Pass recieveAttack function on selected row and column
            mainPlayer.attack(opponentGame, row, column);
           // opponentGame.receiveAttack(row, column);
            // Convert row and column into a variable array
            const position = [row, column];
            //if missed shot is true
            if(opponentGame.missedShot(position)) {
                currentTile.classList.add('miss');
            } else {
                currentTile.classList.add('hit');
            };
       
        // Computer attacks after player selects
            
            // random attack array value pass on position2
            const position2 = opponent.randomAttack(playerGame);
            // converst random attack array into row and column
            const row2 = position2[0];
            const column2 = position2[1];
            // Checks to see if missShot is true
            if(playerGame.missedShot(position2) ){
                document.querySelector(`[data-row="${row2}"][data-column="${column2}"].player-tile`)
                .classList.add('miss');
            } else {
                document.querySelector(`[data-row="${row2}"][data-column="${column2}"].player-tile`)
                .classList.add('hit');
            };
            
            
            if(opponentGame.checkAllShipsSunk() === true) {
                removeContentUI();
                winnerUI(mainPlayer.name);
                playAgain();
            } else if (playerGame.checkAllShipsSunk() === true) {
                removeContentUI();
                winnerUI(opponent.name);
                playAgain();
            }
            
    };



   




    /////// EVENT LISTENERS
    const startTiles = document.querySelectorAll('.tile');
    startTiles.forEach(tile => {
        tile.addEventListener('click', clickIt);
        tile.addEventListener('mouseover', mouseOver);
        tile.addEventListener('mouseleave', mouseLeave);
    });
    // Handles the checkbox
    const checkbox = document.querySelector("input[type=checkbox]");
    checkbox.addEventListener('change', checkBox);

    /////// EVENT LISTENERS





    ////////////////////////// FUNCTIONS ///////////////////////////////////


};







export {createGame}