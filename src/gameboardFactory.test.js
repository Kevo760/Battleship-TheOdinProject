import { Gameboard } from "./gameboardFactory";
import { Ship } from './shipFactory';


test('possible placement returns false if placed on a the board where there is not enough space', () => {
    const game = new Gameboard;
    const battleship = new Ship('battleship', 4);
    expect(game.possiblePlacement(battleship, 9, 9, true)).toBeFalsy();
})


test('possible placement returns false if there is a ship where user is placing new ship', () => {
    const game = new Gameboard;
    const battleship = new Ship('battleship', 4);
    const destroyer = new Ship('destroyer', 2);
    game.placeShip(battleship, 0, 0, true);
    expect(game.possiblePlacement(destroyer, 0, 0, true)).toBeFalsy();
})


test('possible placement returns false if placing new ship overlaps another ship', () => {
    const game = new Gameboard;
    const battleship = new Ship('battleship', 4);
    const destroyer = new Ship('destroyer', 2);
    game.placeShip(battleship, 6, 0, true);
    expect(game.possiblePlacement(destroyer, 5, 0, true)).toBeFalsy();
})


test('placeShip returns false if placing new ship over a ship', () => {
    const game = new Gameboard;
    const battleship = new Ship('battleship', 4);
    const destroyer = new Ship('destroyer', 2);
    game.placeShip(battleship, 6, 0, true);
    expect(game.placeShip(destroyer, 5, 0, true)).toBeFalsy();
})


test('placeShip return true if placed on empty array', () => {
    const game = new Gameboard;
    const battleship = new Ship('battleship', 4);
    const destroyer = new Ship('destroyer', 2);
    game.placeShip(battleship, 6, 0, true);
    expect(game.placeShip(destroyer, 4, 4, true)).toBeTruthy();
})
