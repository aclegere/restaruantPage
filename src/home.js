const renderHome = (() => {
    //container
    const contentContainer = document.querySelector("#content");
  
    const home = document.createElement("div");
    home.classList.add("tab-content")
    //add menu to btn so it goes over when clicked
    home.innerHTML = `
    <div data-tab-content class="homeContentContainer">
        <div class="homeMain">
            <h1>Come check out your new favorite restaraunt!</h1>
            <h2>Big portions! Big Flavors!</h2>
            <div class="btn-container">
                <button data-tab-target="#" id="order-now">Order now!</button>
            </div>
        <div class="info">
            <p>9999 Blackstone River Rd.,<br>Worcester, MA 99999</p>
            <p>
            Monday thru Wednesday: 8am-9pm<br>
            Thursday thru Sunday: 8am-11:30pm
            </p>
           </div>
        </div>
        </div>
    </div>
  `
  ;
  
    contentContainer.appendChild(home);
  })();
  
export {renderHome};