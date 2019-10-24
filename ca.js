console.log("test");

let log = console.log;

log("test 2");

function createaccount(){
    var givenuser = document.forms["accountcreate"]["setuser"].value;
    var givenpass = document.forms["accountcreate"]["setpass"].value;

    localStorage.setItem("username","givenuser");
    localStorage.setItem("password","givenpass");
    let x = localStorge.getItem("username");
    let y = localStorage.getItem("password");
    log(x + " " + y);
    if(x || y == undefined){
        alert("Something went wrong please try again");
        return false;
    }
    alert("account created successfully!");
    return true;
}

function clearacc(){
    localStorage.clear();
}