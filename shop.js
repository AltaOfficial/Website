function openShop(){
    let weaponValue = 0;
    let potionValue = 0;

    texta.textContent = "Welcome to the shop,";
    texta.textContent += "\nwhat would you like to buy?: ";
    setTimeout(() =>{
        texta.textContent = "";
        let shopItemNumber = 0;
        for(var i = 0; i < 3; i++){
            shopItemNumber++;
            weaponValue = shopItems(weapons);
            texta.textContent += weapons[weaponValue].name + "  $" + weapons[weaponValue].shopvalue + "\n";
            shopItemNumber++;
            potionValue = shopItems(potions);
            texta.textContent += potions[potionValue].name + "  $" + potions[potionValue].shopvalue + "\n";
        }
    },2500);
    //texta.textContent();
}

function shopItems(x){
    let randomItem = (Math.floor(Math.random() * x.length));
    return(randomItem);
}