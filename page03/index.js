// import efeitos from "./efeitos"
let item_1 = document.querySelector('.tipo_mercado01');
let item_2 = document.querySelector('.tipo_mercado02');
let item_3 = document.querySelector('.tipo_mercado03');
let item_4 = document.querySelector('.tipo_mercado04');
let item_5 = document.querySelector('.tipo_mercado05');

let itens = [item_1, item_2, item_3, item_4, item_5];

function selecionado(item) {
    item.addEventListener("click", () => {
        for (let i in itens) {
            if (item !== itens[i]) {
                itens[i].style.opacity = "50%";
            }
            else {
                item.style.opacity = "100%"
            }
        }
    })

}

selecionado(item_1);
// selecionadoHover(item_1);

selecionado(item_2);
// selecionadoHover(item_2);

selecionado(item_3);
// selecionadoHover(item_3);

selecionado(item_4);
// selecionadoHover(item_4);

selecionado(item_5);
// selecionadoHover(item_5);


