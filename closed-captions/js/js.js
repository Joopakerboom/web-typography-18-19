var header = document.querySelector('header');

var button = document.querySelector('header > button');

function removeCover(){
    closedCaptions.classList.add("removeCover");  
}

button.addEventListener("click", removeCover);