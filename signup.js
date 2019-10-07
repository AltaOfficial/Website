function signUp(){
	alert("function ran");
	if(username&&password == null || NaN || undefinded || "" || ''){
		alert("other function ran");
		return true;
	}else if(username&&password !== null || NaN || undefinded || "" || ''){
		var result = confirm("Do you really want to make another account?");
		if(result == true){
			return true
		}
	}
}