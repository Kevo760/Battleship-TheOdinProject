import { Ship } from "../functions/shipFactory";

test('Test to see if object is being created', () => {
    const destroyer = new Ship('destroyer', 3)

    expect(destroyer).toEqual(
        {
            name: 'destroyer',
            length: 3,
            sunk: false,
            damage: {
                hit: 0,
                position: []
            },
            isSunk: expect.any(Function),
            hitShip: expect.any(Function)
        }
    )
});

test('When hitShip function is passed on a ship class it changes damage and adds position array', () => {
    const destroyer = new Ship('destroyer', 3)
    destroyer.hitShip('a');

    expect(destroyer).toEqual(
        {
            name: 'destroyer',
            length: 3,
            sunk: false,
            damage: {
                hit: 1,
                position: ['a']
            },
            isSunk: expect.any(Function),
            hitShip: expect.any(Function)
        }
    )
});


test('When is isSunk function is pass it should change sunk to true is damage equals to length of ship', () => {
    const destroyer = new Ship('destroyer', 3)
    destroyer.hitShip('a');
    destroyer.hitShip('b');
    destroyer.hitShip('c');
    destroyer.isSunk();


    expect(destroyer).toEqual(
        {
            name: 'destroyer',
            length: 3,
            sunk: true,
            damage: {
                hit: 3,
                position: ['a', 'b', 'c']
            },
            isSunk: expect.any(Function),
            hitShip: expect.any(Function)
        }
    )
});

test('When isSunk function is passed and damage is less than hit sunk should stay false', () => {
    const destroyer = new Ship('destroyer', 3)
    destroyer.hitShip('a');
    destroyer.hitShip('b');
    destroyer.isSunk();


    expect(destroyer).toEqual(
        {
            name: 'destroyer',
            length: 3,
            sunk: false,
            damage: {
                hit: 2,
                position: ['a', 'b']
            },
            isSunk: expect.any(Function),
            hitShip: expect.any(Function)
        }
    )
});






