import { Ship } from "./shipFactory";
import { Gameboard } from "./gameboardFactory";


const createGame = () => {
const ship1 = new Ship('destroyer', 3);
const ship2 = new Ship('boat', 2);


//console.log(ship1)


const array = new Gameboard();

array.placeShip(ship1, 0, 0, true);
array.placeShip(ship2, 5, 5, false);




array.isBoatSunk('boat');
array.isBoatSunk('destroyer');
console.log(array.possiblePlacement(ship1, 2, 2, true));
console.log(array.possiblePlacement(ship1, 9, 9, false))


console.log(array);







};


export {createGame}