function openShop(){
    let weaponValue = 0;
    let potionValue = 0;

    texta.textContent = "Welcome to the shop,";
    texta.textContent += "\nwhat would you like to buy?: ";
    setTimeout(() =>{
        texta.textContent = "";
        let shopItemNumber = 0;
        for(var i = 0; i < weapons.length; i++){
            shopItemNumber++;
            texta.textContent += shopItemNumber + ". " + weapons[weaponValue].name + "  $" + weapons[weaponValue].shopvalue + "\n";
            weaponValue++;
        }

        for(var i = 0; i < potions.length; i++){
            shopItemNumber++;
            texta.textContent += shopItemNumber + ". " + potions[potionValue].name + "  $" + potions[potionValue].shopvalue + "\n";
            potionValue++;
        }
    }, 2500);
}