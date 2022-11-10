const pageLoad = (() => {
    const contentContainer = document.querySelector("#content");
    const header = document.createElement("header");
    header.innerHTML = 
    `
    <nav>
        <img id="hat" src="chef-hat.png" alt="picture of a bowl">
        <h2 id="restName">Blackstone Bistro</h2>
        <ul class="links">
            <li data-tab-target="#home" id="home">Home</li>
            <li data-tab-target="#menu" id="menu">Menu</li>
            <li data-tab-target="#contact" id="contact">Contact</li>
        </ul>
    </nav>
  `;
    
    

    const footer = document.createElement("footer");
    footer.innerHTML =
    `<p id="footerTxt">Blackstone Bistro Restaruants Inc. &copy; 2022</p>`
    ;
    
    contentContainer.appendChild(header)
    contentContainer.appendChild(footer)
  })();