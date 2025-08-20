let campo = document.querySelector('h1');
campo.innerHTML = 'Jogo do Número Secreto';

let paragrafo = document.querySelector('p');
paragrafo.innerHTML = 'Defina o intervalo de números do jogo';

let input = document.querySelector('.container__input');
let botaoChutar = document.querySelector('.container__botao');
let botaoReiniciar = document.getElementById('reiniciar');

let intervalo = null;
let numeroSecreto = null;
let tentativas = 1;
let maxTentativas = 3;
let jogoIniciado = false;

function mostrarMensagem(msg) {
    paragrafo.innerHTML = msg;
}

function definirintervalo() {
    intervalo = Number(input.value);
    if (intervalo <= 0) {
        mostrarMensagem('Defina um valor positivo para o intervalo');
    } else {
        numeroSecreto = Math.floor(Math.random() * intervalo) + 1;
        jogoIniciado = true;
        mostrarMensagem(`O intervalo do jogo é de 1 a ${intervalo}. Tente adivinhar o número!`);
        input.value = '';
        input.placeholder = 'Digite seu palpite';
        botaoChutar.innerHTML = 'Chutar';
        botaoChutar.onclick = jogar;
        input.focus();
    }
}

function jogar() {
    let numeroChutado = Number(input.value);

    if (!numeroChutado || numeroChutado < 1 || numeroChutado > intervalo) {
        mostrarMensagem(`Digite um número válido entre 1 e ${intervalo}!`);
        return;
    }

    if (numeroChutado === numeroSecreto) {
        mostrarMensagem('Parabéns! Você acertou o número secreto!');
        botaoChutar.disabled = true;
        botaoReiniciar.disabled = false;
    } else if (tentativas === maxTentativas) {
        mostrarMensagem(`Que pena! O número secreto era ${numeroSecreto}.`);
        botaoChutar.disabled = true;
        botaoReiniciar.disabled = false;
    } else {
        tentativas++;
        mostrarMensagem(`Você errou! Tente novamente. Tentativa ${tentativas} de ${maxTentativas}`);
    }

    input.value = '';
    input.focus();
}

function reiniciarJogo() {
    tentativas = 1;
    intervalo = null;
    numeroSecreto = null;
    jogoIniciado = false;
    mostrarMensagem('Defina o intervalo de números do jogo');
    input.value = '';
    input.placeholder = 'Defina o intervalo';
    botaoChutar.innerHTML = 'Definir intervalo';
    botaoChutar.disabled = false;
    botaoReiniciar.disabled = true;
    botaoChutar.onclick = definirintervalo;
    input.focus();
}

// Inicialmente, o botão serve para definir o intervalo
botaoChutar.onclick = definirintervalo;
botaoReiniciar.onclick = reiniciarJogo;
botaoReiniciar.disabled = true;
