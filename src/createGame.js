import { Gameboard } from "./functions/gameboardFactory";
import { Player } from "./functions/player";
import { gameBoardUI } from "./UI/gameboardUI";
import { createHeaderUI } from "./UI/headerUI";
import './style.css';
import { contentUI } from "./UI/contentUI";
import { winnerUI } from "./UI/WinnerUI";
import { startGameUI } from "./UI/startGameUI";
import { Ship } from "./functions/shipFactory";
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
        if(e.target.checked) {
            return isVerticle = false;
           
        } else {
            return isVerticle = true;
        }
    };



    const startTiles = document.querySelectorAll('.tile');
    startTiles.forEach(tile => {
        tile.addEventListener('click', clickIt);
        tile.addEventListener('mouseover', mouseOver);
        tile.addEventListener('mouseleave', mouseLeave);
    });

    const checkbox = document.querySelector("input[type=checkbox]");
    checkbox.addEventListener('change', checkBox);


};


export {createGame}