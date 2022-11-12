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


export function renderMenu() {
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