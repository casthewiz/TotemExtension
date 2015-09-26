$('#generate').on("click", function() {
    chrome.tabs.executeScript({file: '/src/inject/generate.js'})
});


$('#load').on("click", function() {
    chrome.tabs.executeScript({file: '/src/inject/load.js'})
});
