var character = {
    health: 100, mana: 50, gold: 0, state: "idle"
};

var en1 = new monster("Slime", 5, 1, 10);
var en2 = new monster("Giant Slime", 10, 5, 20);

function monster(name, damage, dropamount, health){

    this.name = name;
    this.damage = damage;
    this.dropamount = dropamount;
    this.health = health;
}