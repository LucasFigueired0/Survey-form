let button:any = document.querySelector('#button01');
let textButton:any = document.querySelector("#text-button");

button.addEventListener("mouseover", ()=>{
    
    // textButton.style.textDecoration = "none";
    textButton.style.color = "#000000";
    button.style.backgroundColor = "#FFFF7D";
})

button.addEventListener("mouseout",()=>{
    button.style.backgroundColor="#3EB25E";
    textButton.style.color = "#ffffff";
    
})
