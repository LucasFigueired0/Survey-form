let opcoes = document.querySelectorAll(".caixa-selecao");


let input = document.querySelector(".button02");
let botao_oculto = document.querySelector(".botao-escondido");
let link_enviar = document.querySelector(".enviar");

let select = document.querySelector("#selecao");
let cont = 0;


input.addEventListener("click", (e) => {
    e.preventDefault();
    cont = 0;

    opcoes.forEach(function (el) {
        if (el.checked) {
            cont++;
        }
    });

    const indice = select.selectedIndex
    const valor = select.value
    const text = select.options[indice].text

    if (text === "--- Select ---") {
        cont = 0;
    }
    console.log(cont);
    if (cont === 0) {
        alert("Selecione uma opção!");
    }
    else {
        link_enviar.click();
        // botao_oculto.click();
    }
})


