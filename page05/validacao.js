const texto_area = document.querySelector("#campo-texto");

let input = document.querySelector(".button02");
let botao_oculto = document.querySelector(".botao-escondido");
let link_enviar = document.querySelector(".enviar");

let select = document.querySelector("#selecao");
let cont = 0;


input.addEventListener("click", (e) => {
    e.preventDefault();
    if(texto_area.value===""){
        alert("The text box cannot be empty!");
    }
    else{
        link_enviar.click();
    }
    console.log(texto_area.value);
})
