let name = localStorage.getItem("ingame-name");
let log = console.log;
let body = document.querySelector("body");
const deathscreen = document.getElementById("death-screen");
let deathtext = document.getElementById("death-txt");
let stats = document.getElementById("stats");
let texta = document.getElementById ("textarea1");
let health = document.getElementById("health");
let mana = document.getElementById("mana");
let exp = document.getElementById("exp");
let commands = document.getElementById("commands");
let manacontainer = document.querySelector(".container-mana");
let healthcontainer = document.querySelector(".container-health");
let expcontainer = document.querySelector(".container-exp");
let goldamount = document.getElementById("gold");
texta.textContent = "Welcome to Aegeus, " + name + ".";
document.addEventListener("keypress", anyKey);

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
                character.state = "attacking";
            break;

            default:
                texta.textContent = "error";
        }
        if(character.state == "attacking"){
            battlearea();
        }
    }, 2000);
}

function update(){
    log("updated");
    goldamount.textContent = "Gold: " + character.gold;
    exp.style.width = character.exp + "%";
    exp.textContent = character.exp;
    if(health <= 0){
        death();
    }
}

function anyKey(e){
    
    log(e.charCode);
    switch(e.charCode){

        case 97:
            scavenge();
        break;

        case 105:
            openInventory();
        break;

        case 111:
            death();
        break;

        case 115:
            if(character.state == "idle"){
                openShop();
            }
        break;

        case 49:
            if(ableToAttack == true && character.state == "attacking"){
                playerAttack();
            }
        break;

        case 73:
            openInventory();
        break;

        default: 
        log("None of the buttons were pressed");
    }
}

function death(){ // needs work
    log("died");
    body.style.display = "none";
    deathscreen.style.display = "flex";
    deathtext.style.display = "flex";
}

function openInventory(){
    log("opened inventory");
    texta.textContent = "Weapon Equipped: " + character.equipped.name + "\nWeapons Owned: " + character.ownedWeapons.name + "\nGold: " + character.gold
}

function textaClear(){
    texta.textContent = "";
}