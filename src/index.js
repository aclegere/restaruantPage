import {pageLoad} from "./onload";
import {renderHome} from "./home";
import {renderMenu} from "./menu";
import {renderContact} from "./contact";

function pageInitialize(){
    pageLoad();
    renderHome();
}

pageInitialize();
btnSwitcher();

//button switch
export function btnSwitcher() {
    let content = document.querySelector('#content');
    const menuTab = document.querySelector("#menu");
    menuTab.addEventListener("click", function(){
        content.innerHTML='';
        pageLoad();
        renderMenu();
});

    const homeTab = document.querySelector('#home');
    homeTab.addEventListener("click", function(){
        content.innerHTML='';
        pageLoad();
        renderHome();
});

    const contactTab = document.querySelector('#contact');
    contactTab.addEventListener("click", function(){
        content.innerHTML='';
        pageLoad();
        renderContact();
});
};