import { Ship } from "./functions/shipFactory";
import { Gameboard } from "./functions/gameboardFactory";


const createGame = () => {
    const game = new Gameboard;
    const carrier = new Ship('carrier', 5);
    const battleship = new Ship('battleship', 4);
    const cruiser = new Ship('cruiser', 3);
    const submarine  = new Ship('submarine', 3);
    const  destroyer = new Ship('destroyer', 2);
    randomShipPlacer(game, carrier);
    randomShipPlacer(game, battleship);
    randomShipPlacer(game, cruiser);
    randomShipPlacer(game, submarine);
    randomShipPlacer(game, destroyer);



    function generateRandomNumber(number) {
        return Math.floor(Math.random() * number)
    }

    // Genrates a true or false for verticle direction
    function generateRandomDirection() {
        const number = generateRandomNumber(2);

        if(number === 0) {
            return true
        } else {
            return false
        }
    }

    function randomShipPlacer(board, ship) {
        while(true) {
            const row = generateRandomNumber(10);
            const column = generateRandomNumber(10);
            const verticle = generateRandomDirection();

            const test = board.placeShip(ship, row, column, verticle);
            if(test === true) {
                break;
            }
        }
    }


    
    

    console.log(game);

};


export {createGame}