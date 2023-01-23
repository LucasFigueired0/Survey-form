let botao = document.querySelector('.button');
let botao2 = document.querySelector('.button02');
let botao3 = document.querySelector('.botao-skip');



let texto01 = document.querySelector('.text-button1');
let texto02 = document.querySelector('.text-button2');
let texto03 = document.querySelector('.text-button3');

function mudaBotao(botao, texto, corBotao1, corTexto1, corBotao2, corTexto2){
    botao.addEventListener("mouseover",()=>{
        botao.style.backgroundColor = `${corBotao1}`;
        texto.style.color = `${corTexto1}`;
    })
    botao.addEventListener("mouseout",()=>{
        botao.style.backgroundColor = `${corBotao2}`;
        texto.style.color = `${corTexto2}`;
    })
}

mudaBotao(botao,texto01,"#FFFF7D","#000000","#3EB25E","#FFFFFF");
mudaBotao(botao2,texto02,"#FFFF7D","#000000","#3EB25E","#FFFFFF");
mudaBotao(botao3,texto03,"#FFFF7D","#000000","#3EB25E","#FFFFFF");


