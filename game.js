odd();

function odd(){
    for(i=0;i>50;i+2%1){
        console.log(i);
    }
}

function createPerson(){

    var player = {
    gender: document.forms["person"]["gender"].value,
    playername: document.forms["person"]["playername"].value,
    goldstart: document.forms["person"]["100goldstart"].value
    };

