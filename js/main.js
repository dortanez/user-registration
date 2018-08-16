var logins = [
	{
		username: "danisa",
		password: "hello"
	}

];

function register() {

	var createUser = document.getElementById("createUser").value.toLowerCase();
	var createPassword = document.getElementById("createPassword").value;
	var login = {
		username: createUser,
		password: createPassword
	}

	for(var i = 0; i <logins.length; i++) {

		if(createUser == logins[i].username) {

			alert("USERNAME IS TAKEN!")

			return

		} else if(createPassword.length < 8) {

			alert("PASSWORD TOO SHORT")

			return
		}
	}

	logins.push(login)
	alert("WELCOME NEW USER!")
}



function login() {

	var username = document.getElementById("username").value.toLowerCase();
	var password = document.getElementById("password").value;

	for(var i = 0; i < logins.length; i++) {

		if(username == logins[i].username && password == logins[i].password) {

			alert("YOU ARE NOW LOGGED IN")

			return 

		} else {

			alert("WRONG CREDENTIALS")
		}

	}

}

