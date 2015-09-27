var passwordInputs = $("input:password");
var websiteName = window.location.hostname;

$.get("https://totempass.herokuapp.com/read",
          {userID: 1,
           website: websiteName,
       		}).done(function(data) {
           passwordInputs.val(data);
})

console.log(passwordInputs.length);
console.log("I fired!");
