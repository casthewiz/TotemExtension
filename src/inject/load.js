var passwordInputs = $("input:password");
var websiteName = window.location.hostname;

$.get("https://totempass.herokuapp.com/read",
      {userID: 1,
       user: userValue,
       website: websiteName,
       }



passwordInputs.val("password");
console.log(passwordInputs.length);
console.log("I fired!");
