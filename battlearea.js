var mUsedTurns; //amount of turns monster has used
var pUsedTurns; //amount of turns player has used
var ableToAttack = false;

function battlearea(){
    log("battle area called");
    var x = Math.floor(Math.random() * monsters.length);
    foundMonster(monsters[x].name, monsters[x].damage, monsters[x].dropamount, x);
    localStorage.setItem("currentMonster", JSON.stringify(monsters[x]));
    localStorage.setItem("currentMonsterHealth", JSON.stringify(monsters[x].health));
    ableToAttack = true;
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
    if(ableToAttack == true){
    texta.textContent = "Its your turn now " + name + ", what will you do" + "\n \n1:Attack 2:Inventory\n";
    }else{
        log("error: not player turn");
    }
}

function playerAttack(){
    var y = JSON.parse(localStorage.getItem("currentMonster"));
    monsterHealth = JSON.parse(localStorage.getItem("currentMonsterHealth"));
    if(ableToAttack == true && character.state == "attacking"){
        log("Player Attacked");
        monsterHealth -= character.equipped.damagemax; // equipped weapons damage is subtracted from the monsters health
        texta.textContent = "You've inflicted " + character.equipped.damagemax + " damage onto the " + y.name + "\nThe " + y.name + " has " + monsterHealth + " health left";
        localStorage.setItem("currentMonsterHealth", JSON.stringify(monsterHealth));
    }else{
        log("error: not player turn or not attacking");
    }

    if(monsterHealth > 0){
        setTimeout(() => monsterAttack(), 4000);
    }else{
        battleEnd();
    }
    
}

function monsterAttack(){
    var y = JSON.parse(localStorage.getItem("currentMonster"));
    textaClear();
    texta.textContent += "The " + y.name + " did " + y.damage + " damage";
    character.health -= y.damage;
    health.style.width = character.health + "%";
    health.textContent = character.health;
    log("monster attacked");
    ableToAttack = true;
    setTimeout(() => turnSystem(), 3000);
}

function battleEnd(){ 
    if(character.state == "attacking"){
    var y = JSON.parse(localStorage.getItem("currentMonster"));
    var z = y.dropamount;
    textaClear();
    texta.textContent += "You defeated the "+ y.name + ", earned " + z + " gold and " + y.exp + " EXP";
    character.exp += y.exp
    character.gold += z;
    goldamount.textContent = "Gold: " + character.gold;
    exp.style.width = character.exp + "%";
    exp.textContent = character.exp;
    character.state = "idle";
    log("battle ended");
    setTimeout(() => textaClear(), 3000);
    }
}
