

function login(){
	var user = document.forms["loginForm"]["username"].value;
	var pass = document.forms["loginForm"]["password"].value;
	
	if(username&&password=="" || null || NaN || ''){
		alert("No account created");
		return false;
	}else if(user==username&&pass==password){
		alert("Login successful");
		return true;		
	}else if(user!=username&&pass!=password){
		alert("Username and password is incorrect");
		return false;		
	}else if(user==username&&pass!=password){
		alert("Password is incorrect");
		return false;		
	}else if(user!=username&&pass==password){
		alert("Username is incorrect");
		return false;
	}else{
		alert("Invalid");
		return false;
	}
}
