import { Ship } from "./shipFactory";
import { Gameboard } from "./gameboardFactory";

const createGame = () => {
const ship1 = new Ship('destroyer', 3);


//console.log(ship1)


const array = new Gameboard();

array.placeShip(ship1, 0, 0, true)


array.receiveAttack(0,0);
array.receiveAttack(9,9);
array.receiveAttack(9,9);


console.log(array);







};


export {createGame}