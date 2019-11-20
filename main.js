let name = localStorage.getItem("ingame-name");
let log = console.log;
let body = document.querySelector("body");
let stats = document.getElementById("stats");
let texta = document.getElementById("textarea1");
let healthbar = document.getElementById("health");
let manabar = document.getElementById("mana");
let goldamount = document.getElementById("gold");
let monsters = [en1, en2];
texta.textContent = "Welcome to Aegeus, " + name + ".";
document.addEventListener("keypress", anyKey);

setInterval(update, 500);

function scavenge(){
    log("scavenged");
    texta.textContent = "Scavenging...";
  
    setTimeout(() => {
        let x = Math.floor(Math.random() * monsters.length) + 1;
        log(x);

        switch(x){
            case 0:
                texta.textContent = "Found nothing";
            break;

            case 1:
                foundMonster(en1.name, en1.damage, en1.dropamount);
            break;

            case 2:
                foundMonster(en2.name, en2.damage, en2.dropamount);
            break;

            default:
                
        }
    }, 2000);
}

function update(){
    //log("updated");
    dead();
}

function anyKey(e){
    
    log(e.charCode);
    switch(e.charCode){

        case 97:
        scavenge();

        break;

        default: 
        log("None of the buttons were pressed");
    }
}

function foundMonster(x, y, z){
    let health = healthbar.value;
    let mana = manabar.value;

    texta.textContent = "You encountered a " + x;
    texta.textContent += "\nThe " + x + " did " + y + " damage";
    character.health -= y;
    healthbar.value = character.health;
    texta.textContent += "\nYou deafeated it and earned " + z + " gold.";
    character.gold += z;
    goldamount.textContent = "Gold: " + character.gold;
}

function dead(){ // needs work
    if(healthbar.value <= 0){
        var hidethis = [texta, stats]
        for(var i of hidethis){
        i.style.display = "none";
        }
    }
}