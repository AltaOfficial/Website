var character = {
    health: 100, mana: 100, gold: 0, state: "idle", level: 0
};
var monsters = [
    en1 = new monster("Slime", 2, 1, 5, 1),
    en2 = new monster("King Slime", 10, 15, 40, 13),
    en3 = new monster("Metal Slime", 4, 5, 10, 7),
    en4 = new monster("Shadow", 20, 10, 20, 15),
    en5 = new monster("Lamp", 1, 1, 3, 1),
    en6 = new monster("Bat", 4, 1, 5, 3),
    en7 = new monster("goblin", 9, 4, 10, 10),
    en8 = new monster("android", 15, 20, 50, 20),
    en9 = new monster("StarMan", 20, 45, 70, 25)
];

function monster(name, damage, dropamount, health, exp){
    this.name = name;
    this.damage = damage;
    this.dropamount = dropamount;
    this.health = health;
    this.exp = exp;
}