
class Gameboard {

    constructor() {
        this.board;
        this.missedShots = [];
        this.shotsMade = [];
        this.createBoard();
    }

    // Creates the 10x10 board with value of 0
    createBoard() {
        return this.board = ([...Array(10)].map( () => Array(10).fill(0)))
    }


    placeShip(ship, row, column, verticle) {
        if(!this.possiblePlacement(ship, row, column, verticle)) return false;

        // If verticle is true place ship on designated area based on ship length
        if(verticle) {
            for(let i = 0; i < ship.length; i++) {
                this.board[row + i][column] = ship;
            }
        // If verticle is false place ship on designated area based on ship length
        } else if(!verticle) {
            for(let i = 0; i < ship.length; i++) {
                this.board[row][column + i] = ship;
            }
        }
        return true;
    };


    possiblePlacement(ship, row, column, verticle) {


        // check verticle placement is true
         if(verticle) {
            for(let i = 0; i < ship.length; i++) {
                // while row placement is taken or invalid return false
              try {
                while(this.board[row + i][column] !== 0) {
                    return false
                }
              } catch(err) {
                return false
              }
      
            }
            return true
        // If verticle is false 
        } else if(!verticle) {
            for(let i = 0; i < ship.length; i++) {
                // while column placement is taken or invalid return false
                try {
                    while(this.board[row][column + i] !== 0) {
                        return false
                    }
                  } catch(err) {
                    return false
                  }
            }
            return true
        }


    }


    receiveAttack(row, column) {
        // Creates a position array with row and column
        const position = [row, column];
        
        // If positionShot is false return true
        if(this.alreadyShot(position) == false) {

        // If board selection does not equal 0, pass hitShip and isSunk function on ship and push position on shotsMade
        if(this.board[row][column] !== 0) {
                this.board[row][column].hitShip(position);
                this.board[row][column].isSunk();
                this.shotsMade.push(position);
            // Else push position array into missedShot and shotsMade array
            } else {
                this.missedShots.push(position);
                this.shotsMade.push(position);
            }

            return true
        } else {
            return false
        }

    }


    alreadyShot(position) {
        const myArray = this.shotsMade
        // true or false staments that finds if the position matches the shots made array
        return myArray.some(arrays => position.every((e, location) => e === arrays[location]))
    }


    checkAllShipsSunk() {
        // pushes true or false on ships
        const carrier = this.isBoatSunk('carrier');
        const battleship = this.isBoatSunk('battleship');
        const cruiser = this.isBoatSunk('cruiser');
        const submarine = this.isBoatSunk('submarine');
        const destroyer = this.isBoatSunk('destroyer');
        
        // If all ships return sunk then return this function as true
        if(carrier && battleship && cruiser && submarine && destroyer === true) {
            return true
        } else {
            return false
        }
    }



    isBoatSunk(shipName) {
        // convert board to a variable
        const array = this.board;

        for(let i = 0; i < array.length; i++) {
            // pass through array and find object the equals to ships name
            const boat = array[i].find(obj => obj.name === shipName);
            //If boat is not undefined grab it
                if(boat !== undefined) {
                    // If boat object is sunk is true return true else return false
                    if(boat.sunk === true) {
                        return true;
                    } else {
                        return false;
                    }
                }
            }
            
        }
    }









export { Gameboard }
