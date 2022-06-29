(()=>{"use strict";class t{constructor(t,s){this.name=t,this.length=s,this.sunk=!1,this.damage={hit:0,position:[]}}hitShip(t){this.damage.hit++,this.damage.position.push(t)}isSunk(){this.length==this.damage.hit&&(this.sunk=!0)}}class s{constructor(){this.board,this.missedShots=[],this.shotsMade=[],this.createBoard()}createBoard(){return this.board=[...Array(10)].map((()=>Array(10).fill(0)))}placeShip(t,s,r,e){if(!this.possiblePlacement(t,s,r,e))return!1;if(e)for(let e=0;e<t.length;e++)this.board[s+e][r]=t;else if(!e)for(let e=0;e<t.length;e++)this.board[s][r+e]=t;return!0}possiblePlacement(t,s,r,e){if(e){for(let e=0;e<t.length;e++)try{for(;0!==this.board[s+e][r];)return!1}catch(t){return!1}return!0}if(!e){for(let e=0;e<t.length;e++)try{for(;0!==this.board[s][r+e];)return!1}catch(t){return!1}return!0}}receiveAttack(t,s){const r=[t,s];return 0==this.alreadyShot(r)&&(0!==this.board[t][s]?(this.board[t][s].hitShip(r),this.board[t][s].isSunk(),this.shotsMade.push(r)):(this.missedShots.push(r),this.shotsMade.push(r)),!0)}alreadyShot(t){return this.shotsMade.some((s=>t.every(((t,r)=>t===s[r]))))}checkAllShipsSunk(){const t=this.isBoatSunk("carrier"),s=this.isBoatSunk("battleship"),r=this.isBoatSunk("cruiser"),e=this.isBoatSunk("submarine"),i=this.isBoatSunk("destroyer");return!!(t&&s&&r&&e&&!0===i)}isBoatSunk(t){const s=this.board;for(let r=0;r<s.length;r++){const e=s[r].find((s=>s.name===t));if(void 0!==e)return!0===e.sunk}}}(()=>{const r=new s,e=new t("carrier",5),i=new t("battleship",4),h=new t("cruiser",3),n=new t("submarine",3),o=new t("destroyer",2);function a(t){return Math.floor(Math.random()*t)}function u(t,s){for(;;){const r=a(10),e=a(10),i=0===a(2);if(!0===t.placeShip(s,r,e,i))break}}u(r,e),u(r,i),u(r,h),u(r,n),u(r,o),console.log(r)})()})();