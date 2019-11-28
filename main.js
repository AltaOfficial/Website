let name = localStorage.getItem("ingame-name");
let log = console.log;
let body = document.querySelector("body");
let stats = document.getElementById("stats");
let texta = document.getElementById ("textarea1");
let health = document.getElementById("health");
let mana = document.getElementById("mana");
let commands = document.getElementById("commands");
let manacontainer = document.querySelector(".container-mana");
let healthcontainer = document.querySelector(".container-health");
let goldamount = document.getElementById("gold");
let monsters = [en1, en2, en3, en4, en5, en6, en7, en8, en9];
texta.textContent = "Welcome to Aegeus, " + name + ".";
document.addEventListener("keypress", anyKey);

setInterval(update, 500);

function scavenge(){
    log("scavenged");
    texta.textContent = "Scavenging...";
  
    setTimeout(() => {
        let x = Math.floor(Math.random() * monsters.length);
        log(x);

        switch(x){
            case 0:
                texta.textContent = "Found nothing";
            break;

            case 1:
            case 2:
            case 3:
            case 4:
            case 5:
            case 6:
            case 7:
            case 8:
            case 9:
                foundMonster(monsters[x].name, monsters[x].damage, monsters[x].dropamount);
            break;

            default:
                texta.textContent = "Error";
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

    texta.textContent = "You encountered a " + x;
    texta.textContent += "\nThe " + x + " did " + y + " damage";
    character.health -= y;
    texta.textContent += "\nYou deafeated it and earned " + z + " gold.";
    character.gold += z;
    goldamount.textContent = "Gold: " + character.gold;
    health.style.width = character.health + "%";
    health.textContent = character.health;
}

function dead(){ // needs work
    if(health.textContent <= 0){
        var hidethis = [texta, healthcontainer, manacontainer, runtime, goldamount, commands]
        for(var i of hidethis){
        i.style.display = "none";
        }
    }
}
