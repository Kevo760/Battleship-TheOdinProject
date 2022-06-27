import { Ship } from "./shipFactory";
import { Gameboard } from "./gameboardFactory";


const createGame = () => {
    const game = new Gameboard;
    const carrier = new Ship('carrier', 5);
    const battleship = new Ship('battleship', 4);
    const cruiser = new Ship('cruiser', 3);
    const submarine  = new Ship('submarine', 3);
    const  destroyer = new Ship('destroyer', 2);
    game.placeShip(carrier, 0, 0, false);
    game.placeShip(battleship, 1, 0, false);
    game.placeShip(cruiser, 2, 0, false);
    game.placeShip(submarine, 3, 0, false);
    game.placeShip(destroyer, 4, 0, false);

    game.receiveAttack(0,0);
    game.receiveAttack(0,1);
    game.receiveAttack(0,2);
    game.receiveAttack(0,3);
    game.receiveAttack(0,4);

    game.receiveAttack(1,0);
    game.receiveAttack(1,1);
    game.receiveAttack(1,2);
    game.receiveAttack(1,3);

    game.receiveAttack(2,0);
    game.receiveAttack(2,1);
    game.receiveAttack(2,2);

    game.receiveAttack(3,0);
    game.receiveAttack(3,1);
    game.receiveAttack(3,2);

    game.receiveAttack(4,0);
    game.receiveAttack(4,1);
    
    console.log(game)

    console.log(game.isBoatSunk('battleship'));

};


export {createGame}