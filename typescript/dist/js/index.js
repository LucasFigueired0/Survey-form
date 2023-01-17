"use strict";
let button = document.querySelector('#button01');
let textButton = document.querySelector("#text-button");
button.addEventListener("mouseover", () => {
    textButton.style.visibility = "visible";
    button.style.backgroundColor = "#FFFF7D";
});
button.addEventListener("mouseout", () => {
    textButton.style.visibility = "hidden";
    button.style.backgroundColor = "#3EB25E";
});
