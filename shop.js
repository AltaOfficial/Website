function openShop(){
    setTimeout(() =>{
        texta.textContent("Welcome to the shop,");
        texta.textContent("\nwhat would you like to buy?: ")
    },5000);
    texta.textContent(shopItem(weapons));
    texta.textContent(shopItem(potions));
}

//weapons.length
//potion.length

function shopItems(x){
    
        for(var i = 0; i < 3; i++){
            let randomItem = Console.log(Math.floor(Math.random() * Math.random(x));
            return(randomItem);
        }
    
}


//Console.log(Math.floor(Math.random() * Math.random()));