let opcoes = document.querySelectorAll(".tipo_mercado");
let selecoes = document.querySelectorAll(".item-selecao");
let input = document.querySelector(".button02");
let botao_oculto = document.querySelector(".botao-escondido");
let link_enviar = document.querySelector(".enviar");

let select = document.querySelector("#selecao");



input.addEventListener("click", () => {
    let cont = 0;
    

    for (let i in opcoes) {
        if (opcoes[i].checked === false) {
            cont++;
        }
    }

    const indice = select.selectedIndex
    const valor = select.value
    const text = select.options[indice].text
    // console.log(indice);
    // console.log(valor);
    // console.log(text);

    if(text==="--- Select ---"){
        cont = 5;
    }


    console.log(cont);
    if (cont > 4) {
        alert("Select an option!");
    }
    else {
        link_enviar.click();
        // botao_oculto.click();
    }

    console.log("Olá, mundo!")
})
