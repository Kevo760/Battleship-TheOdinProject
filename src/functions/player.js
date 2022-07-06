import { Ship } from "./shipFactory";


class Player {

    constructor(name) {
        this.name = name;
    }
    
    // Access gameboard recieveAttack function
    attack(board, row, column) {
        return board.receiveAttack(row, column);
    }

    // Access gameboard recieveAttack function and randomly attacks a position until true
    randomAttack(board) {
        while(true) {
            const row = this.generateRandomNumber(10);
            const column = this.generateRandomNumber(10);

            const attack = board.receiveAttack(row, column);
            // when attack is true return the position
            if(attack === true) {
                const position = [row, column]
                return position
            }
            
        }
        
    }

    // Creates the battleship and places them randomly
    placeShipsRandomly(board) {
        const carrier = new Ship('carrier', 5);
        const battleship = new Ship('battleship', 4);
        const cruiser = new Ship('cruiser', 3);
        const submarine  = new Ship('submarine', 3);
        const destroyer = new Ship('destroyer', 2);

        this.randomShipPlacer(board, carrier);
        this.randomShipPlacer(board, battleship);
        this.randomShipPlacer(board, cruiser);
        this.randomShipPlacer(board, submarine);
        this.randomShipPlacer(board, destroyer);
    }

    // Generates a random number based on the number inputted 
    generateRandomNumber(number) {
        return Math.floor(Math.random() * number)
    }

    // Genrates a true or false for verticle direction
    generateRandomDirection() {
        const number = this.generateRandomNumber(2);

        if(number === 0) {
            return true
        } else {
            return false
        }
    }

    // Places ship in a random row, column, and direction and only breaks when its placement is true
    randomShipPlacer(board, ship) {
        while(true) {
            const row = this.generateRandomNumber(10);
            const column = this.generateRandomNumber(10);
            const verticle = this.generateRandomDirection();

            const random = board.placeShip(ship, row, column, verticle);
            if(random === true) {
                break;
            }
        }
    }

    

}


export {Player}