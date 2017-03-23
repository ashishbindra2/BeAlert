

var Email = document.getElementById("Email");
	var Emails = Email.value;

var pass = document.getElementById("pass");
	var passWord = pass.value;



function methods() {
	// body...
	var firebaseRef = firebase.database().ref('Email'+Emails);

	firebaseRef.push().set(Emails);
	   alert("Submit button clicked!");
	      return true;
}