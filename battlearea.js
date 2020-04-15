var mUsedTurns; //amount of turns monster has used
var pUsedTurns; //amount of turns player has used
var ableToAttack = 0;


function battlearea(){
    log("battle area called");
    var x = Math.floor(Math.random() * monsters.length);
    foundMonster(monsters[x].name, monsters[x].damage, monsters[x].dropamount, x);
    localStorage.setItem("currentMonster", JSON.stringify(monsters[x]));
    ableToAttack = 1;
    setTimeout(() => turnSystem(), 3000);
}

function foundMonster(x, y, z, s){
    texta.textContent = "You encountered a " + x;
    texta.textContent += "\nThe " + x + " did " + y + " damage";
    character.health -= y;
    health.style.width = character.health + "%";
    health.textContent = character.health;
}

function turnSystem(){
    log("turn system called");
    if(ableToAttack == 1){
    texta.textContent = "Its your turn now " + name + ", what will you do" + "\n \n1:Attack 2:Inventory\n";
    
    }else{
        log("error: not player turn");
    }
}

function playerAttack(){
    ableToAttack = 0;
    var y = JSON.parse(localStorage.getItem("currentMonster"));
    var monsterHealth = JSON.parse(y.health);
    if(ableToAttack == 1 && character.state == "attacking"){
        log("Player Attacked");
        monsterHealth -= character.equipped.damagemax; // equipped weapons damage is subtracted from the monsters health
        texta.textContent = "You've inflicted " + character.equipped.damagemax + " damage onto the " + y.name + "\nThe " + y.name + " has " + monsterHealth + " health left";
    }else{
        log("error: not player turn or not attacking");
    }

    if(character.health > 0){
    }

    if(monsterHealth <= 0){
        battleEnd();
    }else{
        log("monster attacked called");
        setTimeout(monsterAttack(), 3000);
    }
    
}

function monsterAttack(){
    var y = JSON.parse(localStorage.getItem("currentMonster"));
    if(y.health > 0){
        log("monster attacked");
        character.health -= y.damage;
    }
    ableToAttack = 1;
    turnSystem();
}

function battleEnd(){ 
    if(character.state == "attacking"){
    var y = JSON.parse(localStorage.getItem("currentMonster"));
    var z = y.dropamount;
    texta.textContent += "\nYou defeated it and earned " + z + " gold.";
    character.gold += z;
    goldamount.textContent = "Gold: " + character.gold;
    character.state = "idle";
    log("battle ended");
    setTimeout(() => textaClear(), 5000);
    }
}

//need to add monster health to local storage for updating methods