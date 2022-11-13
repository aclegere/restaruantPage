import { btnSwitcher } from ".";

export function renderContact() {
    const contentContainer = document.querySelector("#content");

    const contactContainer = document.createElement("div");
    contactContainer.className='contact'; // easier to us same styling as menu

    const blurb = document.createElement('p'); 
    blurb.id="blurb";
    blurb.innerText = 'Feel free to contact us with questions, concerns, and compliments!'

    const info = document.createElement('ul');
    const infoPoint1 = document.createElement('li');
    const infoPoint2 = document.createElement('li');
    const infoPoint3 = document.createElement('li');
    info.className = 'infoPoints'
    infoPoint1.innerText = 'Primary Phone: 555-555-5555'
    infoPoint2.innerText = 'Email: totallyRealEmail@notFake.com'
    infoPoint3.innerText = 'Twitter: @BlackstoneBistroNotReal'

    info.appendChild(blurb);
    info.appendChild(infoPoint1);
    info.appendChild(infoPoint2);
    info.appendChild(infoPoint3);

    contactContainer.appendChild(info);

    contentContainer.appendChild(contactContainer);
    
    //btn switcher 
    btnSwitcher();
};