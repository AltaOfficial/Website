var mUsedTurns; //amount of turns monster has used
var pUsedTurns; //amount of turns player has used
var ableToAttack = 0;

function battlearea(){
    let x = Math.floor(Math.random() * monsters.length);
    foundMonster(monsters[x].name, monsters[x].damage, monsters[x].dropamount);
    setTimeout(){
        
    }
    ableToAttack = 
    turnSystem(1);
}

function foundMonster(x, y, z){
    texta.textContent = "You encountered a " + x;
    texta.textContent += "\nThe " + x + " did " + y + " damage";
    character.health -= y;
    texta.textContent += "\nYou defeated it and earned " + z + " gold.";
    character.gold += z;
    goldamount.textContent = "Gold: " + character.gold;
    health.style.width = character.health + "%";
    health.textContent = character.health;
}

function turnSystem(x){
    if(x == 1){
    texta.content = "Its your turn now " + name + ", what will you do" + "\n 1:Attack 2:Inventory";
    
    }
}