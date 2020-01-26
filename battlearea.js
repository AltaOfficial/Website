var mUsedTurns; //amount of turns monster has used
var pUsedTurns; //amount of turns player has used
var ableToAttack = 0;

function battlearea(){
    let x = Math.floor(Math.random() * monsters.length);
    foundMonster(monsters[x].name, monsters[x].damage, monsters[x].dropamount);
    sessionStorage.setItem("currentMonster", monsters[x]);
    ableToAttack = 1;
    setTimeout(() => turnSystem(ableToAttack), 5000);
}

function foundMonster(x, y, z){
    texta.textContent = "You encountered a " + x;
    texta.textContent += "\nThe " + x + " did " + y + " damage";
    character.health -= y;
    //texta.textContent += "\nYou defeated it and earned " + z + " gold.";
    //character.gold += z;
    //goldamount.textContent = "Gold: " + character.gold;
    health.style.width = character.health + "%";
    health.textContent = character.health;
}

function turnSystem(x){
    log("turn system called");
    if(x == 1){
    texta.textContent = "Its your turn now " + name + ", what will you do" + "\n \n1:Attack 2:Inventory\n";
    texta.style.pointerEvents = "auto";
    }
}

function playerAttack(){
    x = character.equipped.maxdamage;
    if(ableToAttack == 1){
        ableToAttack = 0;
        var y = sessionStorage.getItem("currentMonster");
        
        y.health -= x; // equipped weapons damage is subtracted from the monsters health
        texta.textContent = "You've inflicted " + x + " damage onto the " + y.name + "\nThe " + y.name + " has " + y.health + " left";
    }
    setTimeout(monsterAttack(), 2000);
    
}

function monsterAttack(){
    if(character.health > 0){
        monsterAttack();
    }
}