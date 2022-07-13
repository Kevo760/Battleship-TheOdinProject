(()=>{"use strict";var r={426:(r,e,n)=>{n.d(e,{Z:()=>i});var t=n(81),o=n.n(t),a=n(645),s=n.n(a)()(o());s.push([r.id,'html {\r\n    width: 100%;\r\n    height: 100%;\r\n    font-family: \'Ubuntu\', sans-serif;\r\n    background-color: aliceblue;\r\n}\r\n\r\n* {\r\n    margin: 0;\r\n    padding: 0;\r\n    box-sizing: border-box;\r\n}\r\n\r\n.content {\r\n    display: flex;\r\n    flex-direction: row;\r\n    flex-wrap: wrap;\r\n    margin: 10rem auto;\r\n    gap: 4rem;\r\n    justify-content: center;\r\n}\r\n\r\n.board-ui {\r\n    display: flex;\r\n    flex-wrap: wrap;\r\n    border: 1px black solid;\r\n    height: 21rem;\r\n    width: 21rem;\r\n    box-shadow: rgba(0, 0, 0, 0.18) 0px 2px 4px;\r\n    \r\n}\r\n\r\n.opponent-tile, .player-tile {\r\n    flex: 1 0 10%;\r\n    width: 100%;\r\n    border: 1px black solid;\r\n}\r\n\r\n.opponent-tile {\r\n    cursor: pointer;\r\n}\r\n\r\n.has-ship {\r\n  background-color: rgb(59, 59, 59);\r\n}\r\n\r\n.hit {\r\n    background-color: orangered;\r\n}\r\n\r\n.miss {\r\n    background-color: dodgerblue;\r\n}\r\n\r\n\r\n.winner-block button {\r\n    padding: 1rem 3rem 1rem 3rem;\r\n    font-family: inherit;\r\n    font-size: 1.5rem;\r\n    font-weight: bold;\r\n\r\n}\r\n\r\n/* =========================== STARTGAME UI =========================== */\r\n\r\n.start-modal {\r\n  width: 35rem;\r\n  height: 35rem;\r\n  margin: 8rem auto;\r\n  display: flex;\r\n  flex-direction: column;\r\n  justify-content: center;\r\n  align-items: center;\r\n  background-color: rgba(59, 59, 59, .3);\r\n  border-radius: .5rem;\r\n  box-shadow: rgba(0, 0, 0, 0.25) 0px 0.0625em 0.0625em, rgba(0, 0, 0, 0.25) 0px 0.125em 0.5em, rgba(255, 255, 255, 0.1) 0px 0px 0px 1px inset;\r\n}\r\n\r\n.tile {\r\n  flex: 1 0 10%;\r\n  width: 100%;\r\n  border: 1px black solid;\r\n  cursor: pointer;\r\n  background-color: aliceblue;\r\n}\r\n\r\n.place-ship {\r\n  background-color: rgb(59, 59, 59);\r\n}\r\n\r\n.boxes {\r\n  height: 70%;\r\n  display: flex;\r\n  flex-wrap: wrap;\r\n  padding: 1rem;\r\n  align-items: center;\r\n}\r\n\r\n\r\n\r\n.controls {\r\n  height: 30%;\r\n  text-align: center;\r\n  padding: 1rem;\r\n}\r\n\r\n.hover {\r\n  background-color: rgb(59, 59, 59);\r\n}\r\n\r\n\r\n\r\n/* =========================== STARTGAME UI =========================== */\r\n\r\n\r\n\r\n\r\n\r\n/* =========================== TOGGLE =========================== */\r\n* {\r\n    user-select: none;\r\n    -webkit-tap-highlight-color: transparent;\r\n  }\r\n  \r\n*:focus {\r\n    outline: none;\r\n  }\r\n\r\n\r\n\r\n\r\n.knobs,\r\n.layer {\r\n  position: absolute;\r\n  top: 0;\r\n  right: 0;\r\n  bottom: 0;\r\n  left: 0;\r\n}\r\n\r\n.button {\r\n  position: relative;\r\n  width: 74px;\r\n  height: 36px;\r\n  overflow: hidden;\r\n  right: 0;\r\n}\r\n\r\n\r\n.button.b2 {\r\n  border-radius: 2px;\r\n\r\n}\r\n\r\n.checkbox {\r\n  position: relative;\r\n  width: 100%;\r\n  height: 100%;\r\n  padding: 0;\r\n  margin: 0;\r\n  opacity: 0;\r\n  cursor: pointer;\r\n  z-index: 3;\r\n}\r\n\r\n.knobs {\r\n  z-index: 2;\r\n}\r\n\r\n.layer {\r\n  width: 100%;\r\n  background-color: #ebf7fc;\r\n  transition: 0.3s ease all;\r\n  z-index: 1;\r\n  border-radius: .2rem;\r\n}\r\n\r\n/* Button 16 */\r\n#button-16 .knobs:before {\r\n  content: "V";\r\n  position: absolute;\r\n  top: 4px;\r\n  left: 4px;\r\n  width: 20px;\r\n  height: 10px;\r\n  color: #fff;\r\n  font-size: 10px;\r\n  font-weight: bold;\r\n  text-align: center;\r\n  line-height: 1;\r\n  padding: 9px 4px;\r\n  background-color: rgb(59, 59, 59);\r\n  border-radius: 2px;\r\n  transition: 0.3s ease all, left 0.3s cubic-bezier(0.18, 0.89, 0.35, 1.15);\r\n\r\n}\r\n\r\n#button-16 .checkbox:active + .knobs:before {\r\n  width: 46px;\r\n}\r\n\r\n#button-16 .checkbox:checked:active + .knobs:before {\r\n  margin-left: -26px;\r\n}\r\n\r\n#button-16 .checkbox:checked + .knobs:before {\r\n  content: "H";\r\n  left: 42px;\r\n  background-color: rgb(59, 59, 59);\r\n}\r\n\r\n#button-16 .checkbox:checked ~ .layer {\r\n  background-color: white;\r\n  border-radius: .2rem;\r\n}\r\n\r\n\r\n/* =========================== TOGGLE =========================== */',""]);const i=s},645:r=>{r.exports=function(r){var e=[];return e.toString=function(){return this.map((function(e){var n="",t=void 0!==e[5];return e[4]&&(n+="@supports (".concat(e[4],") {")),e[2]&&(n+="@media ".concat(e[2]," {")),t&&(n+="@layer".concat(e[5].length>0?" ".concat(e[5]):""," {")),n+=r(e),t&&(n+="}"),e[2]&&(n+="}"),e[4]&&(n+="}"),n})).join("")},e.i=function(r,n,t,o,a){"string"==typeof r&&(r=[[null,r,void 0]]);var s={};if(t)for(var i=0;i<this.length;i++){var c=this[i][0];null!=c&&(s[c]=!0)}for(var d=0;d<r.length;d++){var l=[].concat(r[d]);t&&s[l[0]]||(void 0!==a&&(void 0===l[5]||(l[1]="@layer".concat(l[5].length>0?" ".concat(l[5]):""," {").concat(l[1],"}")),l[5]=a),n&&(l[2]?(l[1]="@media ".concat(l[2]," {").concat(l[1],"}"),l[2]=n):l[2]=n),o&&(l[4]?(l[1]="@supports (".concat(l[4],") {").concat(l[1],"}"),l[4]=o):l[4]="".concat(o)),e.push(l))}},e}},81:r=>{r.exports=function(r){return r[1]}},379:r=>{var e=[];function n(r){for(var n=-1,t=0;t<e.length;t++)if(e[t].identifier===r){n=t;break}return n}function t(r,t){for(var a={},s=[],i=0;i<r.length;i++){var c=r[i],d=t.base?c[0]+t.base:c[0],l=a[d]||0,u="".concat(d," ").concat(l);a[d]=l+1;var p=n(u),h={css:c[1],media:c[2],sourceMap:c[3],supports:c[4],layer:c[5]};if(-1!==p)e[p].references++,e[p].updater(h);else{var m=o(h,t);t.byIndex=i,e.splice(i,0,{identifier:u,updater:m,references:1})}s.push(u)}return s}function o(r,e){var n=e.domAPI(e);return n.update(r),function(e){if(e){if(e.css===r.css&&e.media===r.media&&e.sourceMap===r.sourceMap&&e.supports===r.supports&&e.layer===r.layer)return;n.update(r=e)}else n.remove()}}r.exports=function(r,o){var a=t(r=r||[],o=o||{});return function(r){r=r||[];for(var s=0;s<a.length;s++){var i=n(a[s]);e[i].references--}for(var c=t(r,o),d=0;d<a.length;d++){var l=n(a[d]);0===e[l].references&&(e[l].updater(),e.splice(l,1))}a=c}}},569:r=>{var e={};r.exports=function(r,n){var t=function(r){if(void 0===e[r]){var n=document.querySelector(r);if(window.HTMLIFrameElement&&n instanceof window.HTMLIFrameElement)try{n=n.contentDocument.head}catch(r){n=null}e[r]=n}return e[r]}(r);if(!t)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");t.appendChild(n)}},216:r=>{r.exports=function(r){var e=document.createElement("style");return r.setAttributes(e,r.attributes),r.insert(e,r.options),e}},565:(r,e,n)=>{r.exports=function(r){var e=n.nc;e&&r.setAttribute("nonce",e)}},795:r=>{r.exports=function(r){var e=r.insertStyleElement(r);return{update:function(n){!function(r,e,n){var t="";n.supports&&(t+="@supports (".concat(n.supports,") {")),n.media&&(t+="@media ".concat(n.media," {"));var o=void 0!==n.layer;o&&(t+="@layer".concat(n.layer.length>0?" ".concat(n.layer):""," {")),t+=n.css,o&&(t+="}"),n.media&&(t+="}"),n.supports&&(t+="}");var a=n.sourceMap;a&&"undefined"!=typeof btoa&&(t+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(a))))," */")),e.styleTagTransform(t,r,e.options)}(e,r,n)},remove:function(){!function(r){if(null===r.parentNode)return!1;r.parentNode.removeChild(r)}(e)}}}},589:r=>{r.exports=function(r,e){if(e.styleSheet)e.styleSheet.cssText=r;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(r))}}}},e={};function n(t){var o=e[t];if(void 0!==o)return o.exports;var a=e[t]={id:t,exports:{}};return r[t](a,a.exports,n),a.exports}n.n=r=>{var e=r&&r.__esModule?()=>r.default:()=>r;return n.d(e,{a:e}),e},n.d=(r,e)=>{for(var t in e)n.o(e,t)&&!n.o(r,t)&&Object.defineProperty(r,t,{enumerable:!0,get:e[t]})},n.o=(r,e)=>Object.prototype.hasOwnProperty.call(r,e),n.nc=void 0,(()=>{class r{constructor(){this.board,this.missedShots=[],this.shotsMade=[],this.createBoard()}createBoard(){return this.board=[...Array(10)].map((()=>Array(10).fill(0)))}placeShip(r,e,n,t){if(!this.possiblePlacement(r,e,n,t))return!1;if(t)for(let t=0;t<r.length;t++)this.board[e+t][n]=r;else if(!t)for(let t=0;t<r.length;t++)this.board[e][n+t]=r;return!0}possiblePlacement(r,e,n,t){if(t){for(let t=0;t<r.length;t++)try{for(;0!==this.board[e+t][n];)return!1}catch(r){return!1}return!0}if(!t){for(let t=0;t<r.length;t++)try{for(;0!==this.board[e][n+t];)return!1}catch(r){return!1}return!0}}receiveAttack(r,e){const n=[r,e];return!1===this.alreadyShot(n)&&(0!==this.board[r][e]?(this.board[r][e].hitShip(n),this.board[r][e].isSunk(),this.shotsMade.push(n)):(this.missedShots.push(n),this.shotsMade.push(n)),!0)}alreadyShot(r){return this.shotsMade.some((e=>r.every(((r,n)=>r===e[n]))))}missedShot(r){return this.missedShots.some((e=>r.every(((r,n)=>r===e[n]))))}checkAllShipsSunk(){const r=this.isBoatSunk("carrier"),e=this.isBoatSunk("battleship"),n=this.isBoatSunk("cruiser"),t=this.isBoatSunk("submarine"),o=this.isBoatSunk("destroyer");return!!(r&&e&&n&&t&&!0===o)}isBoatSunk(r){const e=this.board;for(let n=0;n<e.length;n++){const t=e[n].find((e=>e.name===r));if(void 0!==t)return!0===t.sunk}}resetBoard(){return this.board,this.board=[...Array(10)].map((()=>Array(10).fill(0)))}}class e{constructor(r,e){this.name=r,this.length=e,this.sunk=!1,this.damage={hit:0,position:[]}}hitShip(r){this.damage.hit++,this.damage.position.push(r)}isSunk(){this.length==this.damage.hit&&(this.sunk=!0)}}class t{constructor(r){this.name=r}attack(r,e,n){return r.receiveAttack(e,n)}randomAttack(r){for(;;){const e=this.generateRandomNumber(10),n=this.generateRandomNumber(10);if(!0===r.receiveAttack(e,n))return[e,n]}}placeShipsRandomly(r){const n=new e("carrier",5),t=new e("battleship",4),o=new e("cruiser",3),a=new e("submarine",3),s=new e("destroyer",2);this.randomShipPlacer(r,n),this.randomShipPlacer(r,t),this.randomShipPlacer(r,o),this.randomShipPlacer(r,a),this.randomShipPlacer(r,s)}generateRandomNumber(r){return Math.floor(Math.random()*r)}generateRandomDirection(){return 0===this.generateRandomNumber(2)}randomShipPlacer(r,e){for(;;){const n=this.generateRandomNumber(10),t=this.generateRandomNumber(10),o=this.generateRandomDirection();if(!0===r.placeShip(e,n,t,o))break}}}var o=n(379),a=n.n(o),s=n(795),i=n.n(s),c=n(569),d=n.n(c),l=n(565),u=n.n(l),p=n(216),h=n.n(p),m=n(589),f=n.n(m),b=n(426),g={};g.styleTagTransform=f(),g.setAttributes=u(),g.insert=d().bind(null,"head"),g.domAPI=i(),g.insertStyleElement=h(),a()(b.Z,g),b.Z&&b.Z.locals&&b.Z.locals;const v=(r,e)=>{const n=document.createElement("div");return n.dataset.row=r,n.dataset.column=e,n.classList.add("tile"),n};(()=>{!function(r){const e=document.createElement("header");e.style.backgroundColor="rgb(59, 59, 59)",e.style.color="white",e.style.position="fixed",e.style.width="100%",e.style.height="4rem",e.style.left="0",e.style.top="0",e.style.display="flex",e.style.justifyContent="center",e.style.alignItems="center",e.style.boxShadow="rgba(9, 30, 66, 0.25) 0px 4px 8px -2px, rgba(9, 30, 66, 0.08) 0px 0px 0px 1px",e.style.padding="1rem ";const n=document.createElement("h1");n.classList.add("header-title"),n.innerText="Battleship Lite",e.append(n),document.body.append(e)}();const n=new r,o=(new r,new t("You"),new t("opponent"),(()=>{const r=[],n=new e("carrier",5),t=new e("battleship",4),o=new e("cruiser",3),a=new e("submarine",3),s=new e("destroyer",2);return r.push(n),r.push(t),r.push(o),r.push(a),r.push(s),r})());(r=>{const e=document.createElement("div");e.classList.add("start-modal");const n=document.createElement("div");n.classList.add("controls"),n.append(function(){const r=document.createElement("div");r.classList.add("button"),r.id="button-16";const e=document.createElement("input");e.type="checkbox",e.classList.add("checkbox");const n=document.createElement("div");n.classList.add("knobs");const t=document.createElement("div");return t.classList.add("layer"),r.append(e),r.append(n),r.append(t),r}());const t=document.createElement("div");t.classList.add("start-block"),t.append((r=>{const e=r.board,n=document.createElement("div");n.classList.add("board-ui");for(let r=0;r<e.length;r++)for(let t=0;t<e.length;t++)n.append(v(r,t));return n})(r)),e.append(n),e.append(t),document.body.append(e)})(n);let a=0,s=!0;const i=(r,e)=>document.querySelector(`[data-row="${r}"][data-column="${e}"],player-tile`),c=r=>{let e=parseInt(r.target.dataset.row),t=parseInt(r.target.dataset.column);if(!0===n.placeShip(o[a],e,t,s)){if(s)for(let r=0;r<o[a].length;r++)i(e+r,t).classList.add("place-ship"),i(e+r,t).removeEventListener("click",c);else for(let r=0;r<o[a].length;r++)i(e,t+r).classList.add("place-ship");a++}},d=r=>{if(a<5&&s)for(let e=0;e<o[a].length;e++){let n=parseInt(r.target.dataset.row)+e;n<10&&i(n,r.target.dataset.column).classList.add("hover")}else if(a<5&&!s)for(let e=0;e<o[a].length;e++){let n=parseInt(r.target.dataset.column)+e;n<10&&i(r.target.dataset.row,n).classList.add("hover")}},l=r=>{if(a<5&&s)for(let e=0;e<o[a].length;e++){let n=parseInt(r.target.dataset.row)+e;n<10&&i(n,r.target.dataset.column).classList.remove("hover")}else if(a<5&&!s)for(let e=0;e<o[a].length;e++){let n=parseInt(r.target.dataset.column)+e;n<10&&i(r.target.dataset.row,n).classList.remove("hover")}};document.querySelectorAll(".tile").forEach((r=>{r.addEventListener("click",c),r.addEventListener("mouseover",d),r.addEventListener("mouseleave",l)})),document.querySelector("input[type=checkbox]").addEventListener("change",(r=>s=!r.target.checked))})()})()})();