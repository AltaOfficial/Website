//weapons
var weapons = [
    wItem1 = new items("Wooden sword", 5, 5, "none");
    wItem2 = new items("Iron sword", , , "none");
    wItem3 = new items("Meat cleaver", , , "");
    wItem4 = new items("", , , "");
    wItem5 = new items("Weeb sword", 0, 1000, "");
    wItem6 = new items("", , , "");
    wItem7 = new items("The blade of skulls", , , "");
    wItem8 = new items("Sword of gods", , , "");
    wItem9 = new items("Master sword", , , "");
    wItem10 = new items("Keyblade", , , "");
]

//potions
var potion = [
    pItem1 = new items("Small health potion", 0, 10, "health");
    pItem2 = new items("Health potion", 0, 10, "health");
    pItem3 = new items("Large health potion", 0, 10, "health");
    pItem4 = new items("Small mana potion", 0, 10, "mana");
    pItem5 = new items("Mana potion", 0, 10, "mana");
    pItem6 = new items("Large mana potion", 0, 10, "mana");
    pItem7 = new items("", , "");
    pItem8 = new items("", , "");
    pItem9 = new items("", , "");
    pItem10 = new items("", , "");
]


function items(name, damage, shopvalue, effect){
    this.name = name;
    this.damage = damage;
    this.shopvalue = shopvalue;
    this.potion = effect;
}