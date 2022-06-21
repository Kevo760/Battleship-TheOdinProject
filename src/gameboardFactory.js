

class Gameboard {

    constructor() {
        this.board = [];
        this.createGameBoard();
    }


    createGameBoard() {
        const rows = 10;
        const columns = 10;
        // Creates row array
        for(let i = 0; i < rows; i++) {
            this.board[i] = [];
            // Creates column array
            for(let j = 0; j < columns; j++) {
                // 0-99 array counts
                this.board[i][j] = (i*columns)+j;
            }
        }
    }


    placeShip(ship, row, column, verticle) {
        
    };

}





export { Gameboard }
