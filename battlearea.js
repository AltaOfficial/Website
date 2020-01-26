var mUsedTurns; //amount of turns monster has used
var pUsedTurns; //amount of turns player has used
var ableToAttack = 0;

function battlearea(){
    var x = Math.floor(Math.random() * monsters.length);
    foundMonster(monsters[x].name, monsters[x].damage, monsters[x].dropamount, x);
    localStorage.setItem("currentMonster", JSON.stringify(monsters[x]));
    ableToAttack = 1;
    setTimeout(() => turnSystem(ableToAttack), 3000);
}

function foundMonster(x, y, z, s){
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
    if(ableToAttack == 1){
        ableToAttack = 0;
        var y = JSON.parse(localStorage.getItem("currentMonster"));
        var x = JSON.parseint()y.health;
        
        y.health -= character.equipped.maxdamage; // equipped weapons damage is subtracted from the monsters health
        texta.textContent = "You've inflicted " + character.equipped.maxdamage + " damage onto the " + y.name + "\nThe " + y.name + " has " + x + " health left";
    }
    //setTimeout(monsterAttack(), 2000);
    
}

function monsterAttack(){
    if(character.health > 0){
        monsterAttack();
    }
}

function battleEnd(){
    character.state = "idle";
}