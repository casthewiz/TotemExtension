$('#generate').on("click", function() {
    $('#status').text = "Password generated!";

    chrome.tabs.executeScript({file: "/js/jquery/jquery.min.js"}, function(){
            chrome.tabs.executeScript({file: '/src/inject/generate.js'});
    });
    setTimeout(function(){$('#status').text = ' ' }, 3000);
});


$('#load').on("click", function() {
    chrome.tabs.executeScript({file: "/js/jquery/jquery.min.js"}, function(){
          chrome.tabs.executeScript({file: '/src/inject/load.js'});
    });
    $('#status').text = "Snap your totem now!";
        setTimeout(function(){$('#status').text = ' ' }, 5000);
});
