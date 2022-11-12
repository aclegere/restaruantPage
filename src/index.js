import {pageLoad} from "./onload";
import {renderHome} from "./home";
import {renderMenu} from "./menu";

function pageInitialize(){
    pageLoad();
    renderHome();
}

pageInitialize();

let content = document.querySelector('#content');

//button switch 
const menuTab = document.querySelector("#menu");
