const entrada_texto = document.querySelectorAll(".entradas-texto");

console.log(entrada_texto)

let input = document.querySelector(".button02");
let botao_oculto = document.querySelector(".botao-escondido");
let link_enviar = document.querySelector(".enviar");

let select = document.querySelector("#selecao");
let cont = 0;


input.addEventListener("click", (e) => {

    cont = 0;

    e.preventDefault();

    

    for(let i in entrada_texto){
        if(entrada_texto[i].value === ""){
            cont++;
        }
    }

    // if(entrada_texto[2])

    console.log(cont);

    if(cont > 0){
        alert("The text box cannot be empty!");
    }
    else if(entrada_texto[2].value > 120){
        alert("Age cannot be higher than 120!");
    }
    else{
        alert("Sucess!");
        link_enviar.click();
    }
    
})
