var my_password = "autopass"
var my_email = "paul@ymail.com"


// document.getElementById('phone-div').style.visibility = "hidden";

function showField(field) {
	if(field == "email") 
	{
		document.getElementById('phone-div').style.visibility = "hidden";
		document.getElementById('email-div').style.visibility = "visible";
	} else {
		document.getElementById('phone-div').style.visibility = "visible";
		document.getElementById('email-div').style.visibility = "hidden";
	}
}


// function login(email, password) {
// 	if (email == my_email && password == my_password){
// 		alert("Welcome Back!")
// 	} else	{
// 		alert("Email or Password incorrect!")
// 	}
// }


function welcome(email) {
	alert("welcome back " + email)
}

function signIn() {
	var email = document.getElementById('my_email').value
	var password = document.getElementById('my_password').value

	if (email == my_email && password == my_password){
		welcome(my_email);
	} else {
		alert("Email or password is incorrect!")
	}
}