function openShop(){
    setTimeout(() =>{
        texta.textContent("Welcome to the shop,");
        texta.textContent("\nwhat would you like to buy?: ")
    },5000);
    texta.textContent(shopItem(weapons));
    texta.textContent(shopItem(potions));

    //texta.textContent();
}

//weapons.length
//potion.length

function shopItems(x){
    
        for(var i = 0; i < 3; i++){
            let randomItem = (Math.floor(Math.random() * x.length));
            return(randomItem);
        }
    
}


//Console.log(Math.floor(Math.random() * Math.random()));