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

const renderMenu = (() => {
    //container
    const contentContainer = document.querySelector("#content");
    const menu = document.createElement("div");
    menu.innerHTML = 
    `  
    <h1>Menu</h1>
    <div class="menu-container">
        <p>I'm working!</p>
    </div>
    `;

    contentContainer.appendChild(menu);
})();
  
export {renderMenu};