import { Gameboard } from "../functions/gameboardFactory";
import { Ship } from '../functions/shipFactory';


test('VERTICLE position possible placement returns false if placed on a the board where there is not enough space', () => {
    const game = new Gameboard;
    const battleship = new Ship('battleship', 4);
    expect(game.possiblePlacement(battleship, 9, 9, true)).toBeFalsy();
})


test('VERTICLE position possible placement returns false if there is a ship where user is placing new ship', () => {
    const game = new Gameboard;
    const battleship = new Ship('battleship', 4);
    const destroyer = new Ship('destroyer', 2);
    game.placeShip(battleship, 0, 0, true);
    expect(game.possiblePlacement(destroyer, 0, 0, true)).toBeFalsy();
})

test('HORIZONTAL POSITION possible placement returns false if placed on a the board where there is not enough space', () => {
    const game = new Gameboard;
    const battleship = new Ship('battleship', 4);
    expect(game.possiblePlacement(battleship, 10, 10, false)).toBeFalsy();
})


test('HORIZONTAL possible placement returns false if there is a ship where user is placing new ship', () => {
    const game = new Gameboard;
    const battleship = new Ship('battleship', 4);
    const destroyer = new Ship('destroyer', 2);
    game.placeShip(battleship, 0, 0, true);
    expect(game.possiblePlacement(destroyer, 0, 0, false)).toBeFalsy();
})


test('possible placement returns false if placing new ship overlaps another ship', () => {
    const game = new Gameboard;
    const battleship = new Ship('battleship', 4);
    const destroyer = new Ship('destroyer', 2);
    game.placeShip(battleship, 6, 0, true);
    expect(game.possiblePlacement(destroyer, 5, 0, true)).toBeFalsy();
})


test('VERTICLE position placeShip returns false if placing new ship over a ship', () => {
    const game = new Gameboard;
    const battleship = new Ship('battleship', 4);
    const destroyer = new Ship('destroyer', 2);
    game.placeShip(battleship, 6, 0, true);
    expect(game.placeShip(destroyer, 5, 0, true)).toBeFalsy();
})


test('VERTICLE position placeShip return true if placed on empty array', () => {
    const game = new Gameboard;
    const battleship = new Ship('battleship', 4);
    const destroyer = new Ship('destroyer', 2);
    game.placeShip(battleship, 6, 0, true);
    expect(game.placeShip(destroyer, 4, 4, true)).toBeTruthy();
})

test('HORIZONTAL position placeShip returns false if placing new ship over a ship', () => {
    const game = new Gameboard;
    const battleship = new Ship('battleship', 4);
    const destroyer = new Ship('destroyer', 2);
    game.placeShip(battleship, 6, 0, false);
    expect(game.placeShip(destroyer, 6, 3, false)).toBeFalsy();
})


test('HORIZONTAL position placeShip return true if placed on empty array', () => {
    const game = new Gameboard;
    const battleship = new Ship('battleship', 4);
    const destroyer = new Ship('destroyer', 2);
    game.placeShip(battleship, 6, 0, true);
    expect(game.placeShip(destroyer, 2, 2, false)).toBeTruthy();
})


test('recieveAttack function returns true when hitting a position that has not been hit', () => {
    const game = new Gameboard;
    const battleship = new Ship('battleship', 4);
    game.placeShip(battleship, 6, 0, true);
    expect(game.receiveAttack(1,1)).toBeTruthy();
})

test('recieveAttack function returns false when hitting a position that has been hit', () => {
    const game = new Gameboard;
    const battleship = new Ship('battleship', 4);
    game.placeShip(battleship, 6, 0, true);
    game.receiveAttack(1,1);
    expect(game.receiveAttack(1,1)).toBeFalsy();
})

test('recieveAttack function returns true when hitting a position that has hit a ship', () => {
    const game = new Gameboard;
    const battleship = new Ship('battleship', 4);
    game.placeShip(battleship, 6, 0, true);
    expect(game.receiveAttack(6,0)).toBeTruthy();
})


test('checkAllShipsSunk returns false when only 1 boat is sunk', () => {
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
    

    expect(game.checkAllShipsSunk()).toBeFalsy();
})


test('checkAllShipsSunk returns true when only all boats are sunk', () => {
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

    expect(game.checkAllShipsSunk()).toBeTruthy();
})