"use strict";
let button1 = document.querySelector(".button01");
let button2 = document.querySelector(".button02");
let textButton = document.querySelector(".text-button");
let textButton2 = document.querySelector(".text-button2");
button1.addEventListener("mouseover", () => {
    button1.style.backgroundColor = "#FFFF7D";
    textButton.style.color = "#000000";
});
button1.addEventListener("mouseout", () => {
    button1.style.backgroundColor = "#3EB25E";
    textButton.style.color = "#FFFFFF";
});
button2.addEventListener("mouseover", () => {
    button2.style.backgroundColor = "#FFFF7D";
    textButton2.style.color = "#000000";
});
button2.addEventListener("mouseout", () => {
    button2.style.backgroundColor = "#3EB25E";
    textButton2.style.color = "#FFFFFF";
});
