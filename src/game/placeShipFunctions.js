import { enableStartBtn, placeShipUI } from "../UI/placeShipUI";






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
        // if click is 5 or greater enable the start button
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



const placeShipsPage = (opponent, mainBoard, mainShips, controls) => {
    placeShipUI(opponent);
    verticleTogglerHandler(controls);
    mouseClickHandler(mainBoard, mainShips, controls);
    mouseOverHandler(mainShips, controls);
    mouseLeaveHandler(mainShips, controls);
};



export { verticleTogglerHandler, mouseLeaveHandler, mouseOverHandler, mouseClickHandler, placeShipsPage }