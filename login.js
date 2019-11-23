
function login(){
    let username = document.forms["form1"]["username"].value;
    let password = document.forms["form1"]["password"].value;

    let user = localStorage.getItem("user");
    let pass = localStorage.getItem("pass");
    var x = document.querySelector(".form1 p");


    if(username == user && password == pass){
        return true;
    }else{
        x.style.display = "inline-block";
        return false;
    }
}

function createacc(){
    let user = document.forms["form2"]["user"].value;
    let pass = document.forms["form2"]["pass"].value;
    let name = document.forms["form2"]["ingame-name"].value;

    if(user && pass && name != undefined || null || ""){
        localStorage.setItem("user", user);
        localStorage.setItem("pass", pass);
        localStorage.setItem("ingame-name", name);
        alert("Successful");
        return true;
    }else{
        alert("Invalid");
        return false;
    }
}
