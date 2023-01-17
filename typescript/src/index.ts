let button:any = document.querySelector('#button01');
let textButton:any = document.querySelector("#text-button");

button.addEventListener("mouseover", ()=>{
    textButton.style.visibility = "visible";
    // textButton.style.textDecoration = "none";
    button.style.backgroundColor = "#FFFF7D";
})

button.addEventListener("mouseout",()=>{
    textButton.style.visibility = "hidden";
    button.style.backgroundColor="#3EB25E";
})
