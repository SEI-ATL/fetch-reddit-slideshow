const elementsToDisappear = document.querySelector("#search");
const pauseButton = document.querySelector(".stop");


document.querySelector('.button').onclick = function() {
    elementsToDisappear.style.visibility = "hidden";
    pauseButton.style.visibility = "visible";
}

pauseButton.onclick = function() {
    elementsToDisappear.style.visibility = "visible";
    pauseButton.style.visibility = "hidden";
}

console.log(elementsToDisappear)
