import { btnSwitcher } from ".";
import {pageLoad} from "./onload";
import {renderMenu} from "./menu";

export function renderHome(){
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
  
  //btn switcher
  btnSwitcher();

  const orderNowBtn = document.querySelector("#order-now");
  orderNowBtn.addEventListener("click", function(){
    content.innerHTML='';
    pageLoad();
    renderMenu();
});
}