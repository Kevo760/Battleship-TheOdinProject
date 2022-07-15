import { Ship } from "../functions/shipFactory";

const createAllShips = () => {
    const allShips = [];

    const carrier = new Ship('carrier', 5);
    const battleship = new Ship('battleship', 4);
    const cruiser = new Ship('cruiser', 3);
    const submarine  = new Ship('submarine', 3);
    const destroyer = new Ship('destroyer', 2);

    allShips.push(carrier);
    allShips.push(battleship);
    allShips.push(cruiser);
    allShips.push(submarine);
    allShips.push(destroyer);

    return allShips
};


class Controller {
    constructor() {
        this.click = 0,
        this.isVerticle = true
    }

    getClick() {
        return this.click;
    }

    getIsVerticle() {
        return this.isVerticle;
    }

    addClick() {
        return this.click++
    }

    changeToVerticle() {
        return this.isVerticle = true;
    }

    changeToHorizontal() {
        return this.isVerticle = false;
    }

    resetValues() {
        this.click = 0;
        this.isVerticle = true;
    }
};

export {createAllShips, Controller}