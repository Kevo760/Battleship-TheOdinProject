
    const gameUI = () => {

        const tiles = document.querySelectorAll('.opponent-tile');
        tiles.forEach(tile => {
        
        
        tile.addEventListener('click', function(e) {
            // passes e target to current tile
           const currentTile = e.target;
           // passes current tile dataset onto column and row
           const column = currentTile.dataset.column;
           const row = currentTile.dataset.row;
    
    
        
        
          
            // Main player attacks
                // Pass recieveAttack function on selected row and column
                game2.receiveAttack(row, column);
                // Convert row and column into a variable array
                const position = [row, column];
                //if missed shot is true
                if(game2.missedShot(position)) {
                    currentTile.classList.add('miss');
                } else {
                    currentTile.classList.add('hit');
                };
           
            // Computer attacks after player selects
                
                // random attack array value pass on position2
                const position2 = playerTwo.randomAttack(game);
                // converst random attack array into row and column
                const row2 = position2[0];
                const column2 = position2[1];
                // Checks to see if missShot is true
                if(game.missedShot(position2) ){
                    document.querySelector(`[data-row="${row2}"][data-column="${column2}"],player-tile`)
                    .classList.add('miss');
                } else {
                    document.querySelector(`[data-row="${row2}"][data-column="${column2}"],player-tile`)
                    .classList.add('hit');
                };
                
                
                if(game2.checkAllShipsSunk() === true) {
                    console.log('playerOne Wins')
                } else if (game.checkAllShipsSunk() === true) {
                        console.log('playertwo wins!')
                    }
                
        }, {once : true});
        })
    }