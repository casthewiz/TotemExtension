var passwordInputs = $("input:password");
var websiteName = window.location.hostname;
console.log(websiteName);
$.get("https://totempass.herokuapp.com/read",
          {userID: 1,
           website: websiteName
       		}).done(function(data) {
            console.log(data[0].password)
          passwordInputs.val(data[0].password);
})

console.log(passwordInputs.length);
console.log("I fired!");
