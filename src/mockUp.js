import './style.css';
import { enableStartBtn } from './UI/startGameUI';






const tileSelector = (row, column) => {
    return document.querySelector(`[data-row="${row}"][data-column="${column}"],player-tile`)
};

const clickIt = (mainBoard, mainShips, controls, event) => {
    let click = controls.getClick();
    let isVerticle = controls.getIsVerticle();

    //if Click is 5 do nothing
    if(click === 5) {
        return
    };

    // converts row and column string to numbers
    let row = parseInt(event.target.dataset.row);
    let column = parseInt(event.target.dataset.column);
    // if placeship is true pass the functions below
    if(mainBoard.placeShip(mainShips[click], row, column, isVerticle) === true) {
        // if verticle add has-ship class on tiles vertically
        if(isVerticle) {
            for(let i = 0; i < mainShips[click].length; i++) {
                tileSelector(row + i, column)
                .classList.add('place-ship');
                const removeListener = tileSelector(row + i, column);
                removeListener.removeEventListener('click', clickIt);
            };
        // else if its false add has-ship class on tiles horizontally
        } else {
            for(let i = 0; i < mainShips[click].length; i++) {
                tileSelector(row, column + i)
                .classList.add('place-ship');
        };
    };
    // if place ship is true add to click
    controls.addClick();
    };

};


const mouseOver = (mainShips, controls, event) => {
    let click = controls.getClick();
    let isVerticle = controls.getIsVerticle();
    // if click is less than 5 add hover class
    if(click < 5 && isVerticle) {
     for(let i = 0; i < mainShips[click].length; i++) {
       let row = parseInt(event.target.dataset.row) + i;
       // prevents adding the hover class on rows over 9
       if(row < 10) {
        tileSelector(row, event.target.dataset.column)
        .classList.add('hover');
       }
     }
    } else if (click < 5 && !isVerticle) {
        for(let i = 0; i < mainShips[click].length; i++) {
            let column = parseInt(event.target.dataset.column) + i;
            // prevents adding the hover class on columns over 9
            if(column < 10) {
                tileSelector(event.target.dataset.row, column)
                .classList.add('hover');
            } 
        }
    } else {
        console.log('test');
        enableStartBtn();
    }
};

const mouseLeave = (mainShips, controls, event) => {
    let click = controls.getClick();
    let isVerticle = controls.getIsVerticle();
    //If click is less than 5 remove hover class
    if(click < 5 && isVerticle) {
        for(let i = 0; i < mainShips[click].length; i++) {
            let row = parseInt(event.target.dataset.row) + i;
            // prevents removing the hover class on rows over 9
            if(row < 10) {
             tileSelector(row, event.target.dataset.column)
             .classList.remove('hover');
            }
        }
       } else if (click < 5 && !isVerticle) {
        for(let i = 0; i < mainShips[click].length; i++) {
            let column = parseInt(event.target.dataset.column) + i;
            // prevents removing the hover class on columns over 9
            if(column < 10) {
                tileSelector(event.target.dataset.row, column)
                .classList.remove('hover');
            }
        }
    } else {
        return 
    }
};

const checkBox = (controls, event) => {
    // if e target is check verticle is false, is it is not checked verticle is true
    if(event.target.checked) {
        controls.changeToHorizontal();
    } else {
        controls.changeToVerticle();
    }
};





const verticleTogglerHandler = (controls) => {
    // Handles the checkbox
    const checkbox = document.querySelector("input[type=checkbox]");
    checkbox.addEventListener('change', function(event) {
        checkBox(controls, event);
    });
};

const mouseClickHandler = (mainBoard, mainShips, controls) => {
    const startTiles = document.querySelectorAll('.tile');
    startTiles.forEach(tile => {
        tile.addEventListener('click', function(event) {
            clickIt(mainBoard, mainShips, controls, event);
        });
    });
};

const mouseOverHandler = (mainShips, controls) => {
    const startTiles = document.querySelectorAll('.tile');
    startTiles.forEach(tile => {
        tile.addEventListener('mouseover', function(event){
            mouseOver(mainShips, controls, event);
        });
    });
};

const mouseLeaveHandler = (mainShips, controls) => {
    const startTiles = document.querySelectorAll('.tile');
    startTiles.forEach(tile => {
        tile.addEventListener('mouseleave', function(event) {
            mouseLeave(mainShips, controls, event);
        });
    });
};



const gameTurn = (mainPlayer, opponent, mainBoard, opponentBoard, event) => {
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
        
        
        if(opponentBoard.checkAllShipsSunk() === true) {
            removeContentUI();
            winnerUI(mainPlayer.name);
   
        } else if (mainBoard.checkAllShipsSunk() === true) {
            removeContentUI();
            winnerUI(opponent.name);
        }
        
};



export { verticleTogglerHandler, mouseLeaveHandler, mouseOverHandler, mouseClickHandler }


