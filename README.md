# TheOdinProject - Battleship Solution

This is a solution to the [Battleship Project on TheOdinProject](https://www.theodinproject.com/lessons/node-path-javascript-battleship).

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
  - [Useful resources](#useful-resources)
- [Author](#author)


## Overview

### The challenge

Users should be able to:

- Create a battleship game using Test Driven Development
- Create factory functions that can be called and allows it to interact with objects
- Create game functionality first then apply DOM and design after


### Screenshot

![](./screnshots/placeship.jpg)
![](./screnshots/placeship2.jpg)
![](./screnshots/board.jpg)


### Links

- Solution URL: [https://github.com/TheLegend760/Battleship-TheOdinProject](https://your-solution-url.com)
- Live Site URL: [https://battleship-thelegend760.netlify.app/](https://your-live-site-url.com)

## My process

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- Vanilla JS



### What I learned

I learned that test driven development allows you to figure out if your code matches to what you want it to do. It allows you to test the functionality of your work before creating the design first. This allows you for less bugs to happen. I learned using factory functions make it easy to use a function that allows it to connect to something that it is attached to. For example the Ship class you can call the hitShip and it will specifically add hit damage and the add the area where it was hit. The hardest part of this is putting the functions into a design using DOM, specifically creating a board where you can click the area to place the ship, but I figured out I could attach dataset to the tiles and grab that data to push to the column and row I wanted in the game board. 




```js
class Ship {
    constructor(name, length) {
        this.name = name;
        this.length = length;
        this.sunk = false;
        this.damage = {
            hit: 0,
            position: [],
        }
    }
    // When call add damage to ship and mark position hit
    hitShip(area) {
        this.damage.hit++,
        this.damage.position.push(area)
    }
    // When called isSunk becomes true
    isSunk() {
        if(this.length == this.damage.hit) {
            this.sunk = true;
        }
    }
}

const gameBoardUI = (game, showShip) => {
    const content = document.querySelector('.content');
    const tiles = game.board;

    const boardUI = document.createElement('div');
    boardUI.classList.add('board-ui');

    for(let i = 0; i < tiles.length; i++) {
        for(let j = 0; j < tiles.length; j++) {
            if(typeof tiles[i][j] === 'object' && showShip) {
                boardUI.append(createTileDiv(i, j, true))
            } else if (showShip) {
                boardUI.append(createTileDiv(i, j, false))
            } else {
                boardUI.append(createTileDiv(i, j, false, true))
            }

        }
    }

    return content.append(boardUI);
};

// creates a div for each arrays
const createTileDiv = (row, column, ship, opponent) => {
    const tile = document.createElement('div');
    tile.dataset.row = row;
    tile.dataset.column = column;
    if(opponent) {
        tile.classList.add('opponent-tile');
    } else {
        tile.classList.add('player-tile');
    }
    // if ship is passed true add class list of has ship
    if(ship) {
        tile.classList.add('has-ship');
    }

    return tile;
}
```


### Continued development

I would like to get better on Test Driven Development in the area where I can comfortable on getting the idea of what to look for first for the end result. I normally over complicate it, but nonetheless I know taking it step by step will help. I would like to make my code look a lot cleaner specifically passing parameters on eventListeners. I believe on my code Im passing so many parameters that it looks like it is confusing when you see my code.  



### Useful resources

- [Stackoverflow](https://www.stackoverflow.com)
- [W3Schools](https://www.w3schools.com)
- [mdn web docs](https://developer.mozilla.org)

These websites help me figure how a specific function works and how I can apply it. Some I had to decode to make it work with what I was looking for it to do. Nonetheless I appreciate that they exist and help me towards on being a better developer.



## Author

- Twitter - [@CodeKevo](https://www.twitter.com/CodeKevo)


