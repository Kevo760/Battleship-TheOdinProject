const winnerUI = (winnerName) => {
    const modal = document.createElement('div');
    modal.classList.add('winner-modal');
    modal.style.position = "fixed";
    modal.style.width = "100%";
    modal.style.height = "100%";
    modal.style.left = "0";
    modal.style.top = "0";
    modal.style.overflow = "auto";
    modal.style.backgroundColor = "rgba(0, 0, 0, .9)";
    modal.style.marginTop = "4rem";


    const h1 = document.createElement('h1');
    h1.innerText = `Victory to ${winnerName}!`;
    h1.style.backgroundColor = "black";
    h1.style.color = "aliceblue";
    h1.style.padding = "2rem";
    h1.style.borderRadius = ".5rem";

    const btn = document.createElement('button');
    btn.innerText = 'Play Again!';
    btn.style.padding = "1rem 3rem 1rem 3rem";
    btn.style.fontFamily = "inherit";
    btn.style.fontSize = "1.5rem";
    btn.style.fontWeight = "bold";

    const block = document.createElement('div');
    block.classList.add('winner-block');
    block.classList.add('winner-modal');
    block.style.backgroundColor = 'aliceblue';
    block.style.width = '30rem';
    block.style.height = '20rem';
    block.style.borderRadius = '.5rem';
    block.style.margin = '5rem auto';
    block.style.padding = '1rem';
    block.style.display = 'flex';
    block.style.flexDirection = 'column';
    block.style.justifyContent = 'center';
    block.style.alignItems = 'center';
    block.style.gap = '5rem';

    block.append(h1);
    block.append(btn);

    modal.append(block);
   


    return document.body.append(modal);
}


export { winnerUI }