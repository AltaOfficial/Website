//weapons
var weapons = [
    wItem1 = new items("Wooden sword", 1, 5, 5, "none"),
    wItem2 = new items("Iron sword", 6, 10, 10, "none"),
    wItem3 = new items("Meat cleaver", 11, 13, 11, "none"),
    wItem4 = new items("Hunting knife", 14, 15, 15, "none"),
    wItem5 = new items("Weeb sword", 0, 0, 1000, "weak"),
    wItem6 = new items("Broadsword", 16, 20, 25, "none"),
    wItem7 = new items("The blade of skulls", 30, 50, 45, "none"),
    wItem8 = new items("Sword of gods", 99, 149, 150, "none"),
    wItem9 = new items("Master sword", 200, 500, 500, "light"),
    wItem10 = new items("Keyblade", 999, 999, 10000, "light")
];

//potions
var potion = [
    pItem1 = new items("Small health potion", 0, 0, 10, "health"),
    pItem2 = new items("Health potion", 0, 0, 25, "health"),
    pItem3 = new items("Large health potion", 0, 0, 50, "health"),
    pItem4 = new items("Small mana potion", 0, 0, 10, "mana"),
    pItem5 = new items("Mana potion", 0, 0, 25, "mana"),
    pItem6 = new items("Large mana potion", 0, 0, 10, "mana"),
    pItem7 = new items("Experience potion", 0,0, 50, "experience"),
    pItem8 = new items("Strength potion", 0, 0, 25, "strength"),
    pItem9 = new items("Critical % potion", 0, 0, 50, "critical %"),
    pItem10 = new items("Speed potion", 0, 0, 10, "speed")
];


function items(name, damagemin, damagemax, shopvalue, effect){
    this.name = name;
    this.damagemin = damagemin;
    this.damagemax = damagemax;
    this.shopvalue = shopvalue;
    this.potion = effect;
}