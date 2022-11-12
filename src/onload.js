export function pageLoad(){
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