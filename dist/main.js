/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ([
/* 0 */,
/* 1 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "pageLoad": () => (/* binding */ pageLoad)
/* harmony export */ });
function pageLoad(){
    const contentContainer = document.querySelector("#content");
    const header = document.createElement("header");
    const logo = document.createElement("img");
    const head2=document.createElement("h2");
    const homeBtn=document.createElement("div");
    const menuBtn=document.createElement("div");
    const btnContainer=document.createElement("div");
    const contactBtn=document.createElement("div");
    const footer = document.createElement("footer");
    const footerP = document.createElement("p");

    //logo attributes 
    logo.id="hat";
    logo.src="chef-hat.png";
    logo.alt="picture of a bowl";

    //h2 attributes 
    head2.id="restName";
    head2.innerHTML="Blackstone Bistro";

    //nav buttons
    homeBtn.id="home";
    homeBtn.innerHTML="Home";
    
    menuBtn.id="menu";
    menuBtn.innerHTML="Menu";
    
    contactBtn.id="contact";
    contactBtn.innerHTML="Contact";

    btnContainer.className="links";
    btnContainer.appendChild(homeBtn);
    btnContainer.appendChild(menuBtn);
    btnContainer.appendChild(contactBtn);


    //append elements to header
    header.appendChild(logo);
    header.appendChild(head2); 
    header.appendChild(btnContainer);

    //footer 
    footerP.id="footerTxt";
    footer.innerHTML="Blackstone Bistro Restaruants Inc. &copy; 2022";


    contentContainer.appendChild(header);
    contentContainer.appendChild(footer);
};

/***/ }),
/* 2 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "renderHome": () => (/* binding */ renderHome)
/* harmony export */ });
function renderHome(){
  const contentContainer = document.querySelector("#content");
  const homeContainer = document.createElement('div');
  const homeHero = document.createElement('div');
  const homeInfo = document.createElement('div')
  const head1 = document.createElement('h1');
  const headTwo = document.createElement('h2');
  const orderBtn = document.createElement('button');
  const pAddress= document.createElement('p');
  const pHours= document.createElement('p');

  //home content container 
  homeContainer.className="homeContentContainer";
  

  //hero text 
  homeHero.className="homeMain";
  head1.innerHTML="Come check out your new favorite restaraunt!";
  headTwo.innerHTML="Big portions! Big Flavors!";
  orderBtn.innerText="Order now!";
  orderBtn.id="order-now";
  
  //container info/hours 
  homeInfo.className="info";
  pAddress.innerHTML="9999 Blackstone River Rd.,<br>Worcester, MA 99999";
  pHours.innerHTML=`Monday thru Wednesday: 8am-9pm<br>Thursday thru Sunday: 8am-11:30pm`;

  homeInfo.appendChild(pAddress);
  homeInfo.appendChild(pHours);

  homeHero.appendChild(head1);
  homeHero.appendChild(headTwo);
  homeHero.appendChild(orderBtn);
  homeHero.appendChild(homeInfo);
  
  //append everything else 
  homeContainer.appendChild(homeHero);
  
  contentContainer.appendChild(homeContainer);
}

/***/ }),
/* 3 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "renderMenu": () => (/* binding */ renderMenu)
/* harmony export */ });
class foodItem {
    constructor(name, price, description){
        this.name = name;
        this.price = price;
        this.description = description;
    }
}

let menuItem1 = new foodItem(
    'Shrimp Ravioli', 
    '$20.95', 
    'Shrimp in a lemon dill cream sauce over shrimp and marscapone filled ravioli');

let menuItem2 = new foodItem(
    'Chicken Rustica', 
    '$17.95', 
    'Chicken parm layered with eggplant parm, baked and served with your choice of pasta');

let menuItem3 = new foodItem(
    'Veal Scallopini', 
    '$22.95', 
    'Veal, mushrooms, and artichoke hearts in a lemon butter white wine sauce served over linguini')

let menuItem4 = new foodItem(
    'Baked Salmon Putanesca', 
    '$28.95', 
    'with calamara olives, capers, roasted red peppers, and artichoke hearts in a light homemade marinara over ziti')

let menuItem5 = new foodItem(
    'Pan-seared Chuletas', 
    '$20.95', 
    'Pork chops cooked with Spanish spices, served with tostones and Spanish rice')

let menuItem6 = new foodItem(
    'Kiddie Grub',
    '$9.95',
    "Kid's choice! Chicken Tendies, Burger, or Fish sticks. Sides include kid's portion of fries, mac and cheese, and mixed veggies."
)


function renderMenu() {
    const contentContainer = document.querySelector("#content");
    
    

    const menuContainer = document.createElement("div");
    menuContainer.className='menuContainer';

    //all the menu cards 
    const menuCard1 = document.createElement('div')
    menuCard1.className = 'menuCard';
    menuCard1.innerHTML =`
        ${menuItem1.name}<br>
        ${menuItem1.description}<br>
        ${menuItem1.price}<br>
    ` 
    

    const menuCard2 = document.createElement('div')
    menuCard2.className = 'menuCard';
    menuCard2.innerHTML =`
        ${menuItem2.name}<br>
        ${menuItem2.description}<br>
        ${menuItem2.price}<br>
    ` 

    const menuCard3 = document.createElement('div')
    menuCard3.className = 'menuCard';
    menuCard3.innerHTML =`
        ${menuItem3.name}<br>
        ${menuItem3.description}<br>
        ${menuItem3.price}<br>
    ` 

    const menuCard4 = document.createElement('div')
    menuCard4.className = 'menuCard';
    menuCard4.innerHTML =`
        ${menuItem4.name}<br>
        ${menuItem4.description}<br>
        ${menuItem4.price}<br>
    ` 

    const menuCard5 = document.createElement('div')
    menuCard5.className = 'menuCard';
    menuCard5.innerHTML =`
        ${menuItem5.name}<br>
        ${menuItem5.description}<br>
        ${menuItem5.price}<br>
    ` 

    const menuCard6 = document.createElement('div')
    menuCard6.className = 'menuCard';
    menuCard6.innerHTML =`
        ${menuItem6.name}<br>
        ${menuItem6.description}<br>
        ${menuItem6.price}<br>
    ` 
   
    //append them
    menuContainer.appendChild(menuCard1);
    menuContainer.appendChild(menuCard2);
    menuContainer.appendChild(menuCard3);
    menuContainer.appendChild(menuCard4);
    menuContainer.appendChild(menuCard5);
    menuContainer.appendChild(menuCard6);

    contentContainer.appendChild(menuContainer);
};

/***/ })
/******/ 	]);
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _onload__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1);
/* harmony import */ var _home__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(2);
/* harmony import */ var _menu__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(3);




function pageInitialize(){
    (0,_onload__WEBPACK_IMPORTED_MODULE_0__.pageLoad)();
    (0,_home__WEBPACK_IMPORTED_MODULE_1__.renderHome)();
}

pageInitialize();

let content = document.querySelector('#content');

//button switch 
const menuTab = document.querySelector("#menu");

})();

/******/ })()
;