
//weapons
var witem1 = new items("Wooden sword", 5, "none");

//potions
var pitem1 = new items("Full health potion", 10, "health");












function items(name, shopvalue, potion){
    this.name = name;
    this.shopvalue = shopvalue;
    this.potion = potion;
}
