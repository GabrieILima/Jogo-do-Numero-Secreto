
let campo = document.querySelector('h1');
campo.innerHTML = 'Jogo do Numero Secreto';

let paragrafo = document.querySelector('p');
paragrafo.innerHTML = 'Descubra o número secreto entre 1 e 10!';

let input = document.querySelector('.container__input');
let botaoChutar = document.querySelector('.container__botao');
let botaoReiniciar = document.getElementById('reiniciar');
let tentativas = 1;
let maxTentativas = 3;
let numeroSecreto = Math.floor(Math.random() * 10) + 1;

function mostrarMensagem(msg) {
    paragrafo.innerHTML = msg;
}

function jogar() {
    let numeroChutado = Number(input.value);
    if (!numeroChutado || numeroChutado < 1 || numeroChutado > 10) {
        mostrarMensagem('Digite um número válido entre 1 e 10!');
        return;
    }
    if (numeroChutado === numeroSecreto) {
        mostrarMensagem('Parabéns! Você acertou o número secreto!');
        botaoChutar.disabled = true;
        botaoReiniciar.disabled = false;
    } else if (tentativas === maxTentativas) {
        mostrarMensagem(`Que pena! O número secreto era ${numeroSecreto}. Fim das tentativas.`);
        botaoChutar.disabled = true;
        botaoReiniciar.disabled = false;
    } else {
        mostrarMensagem(`Você errou! Tente novamente. Tentativa ${tentativas} de ${maxTentativas}`);
        tentativas++;
    }
    input.value = '';
    input.focus();
}

function reiniciarJogo() {
    tentativas = 1;
    numeroSecreto = Math.floor(Math.random() * 10) + 1;
    mostrarMensagem('Descubra o número secreto entre 1 e 10!');
    botaoChutar.disabled = false;
    botaoReiniciar.disabled = true;
    input.value = '';
    input.focus();
}

botaoChutar.onclick = jogar;
botaoReiniciar.onclick = reiniciarJogo;