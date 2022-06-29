class Ship {
    constructor(name, length) {
        this.name = name;
        this.length = length;
        this.sunk = false;
        this. damage = {
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








export {Ship}