var passwordInputs = $("input:password");
var websiteName = window.location.hostname;
// var userValue = $('input[type=email']);

//random text, 8 char
var text = "";
var possible = "ABCHIJKLMNOPQRSTUVWXYZabcdefghijkrstuvwxyz0123456789!!!!!!!!!";
for( var i=0; i < 32; i++ )
	text += possible.charAt(Math.floor(Math.random() * possible.length));
passwordInputs.val(text)

$('form').submit(function(event) {
	$.get("https://totempass.herokuapp.com/create",
	      {userID: 1,
	       website: websiteName,
				 password: text
			 }).done(function(data) {
				 console.log(data);
	})
})

console.log(passwordInputs.length);
console.log("I fired!");
