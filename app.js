alert("Boas vindas ao jogo do número secreto!");

let qtdNumeros = prompt("Quantidade de números para o jogo");
let numeroSecreto = parseInt(Math.random() * qtdNumeros + 1);
let chute;
let numeroTentativas = 1;

do {
    chute = prompt(`Escolha um número entre 1 e ${qtdNumeros}`);
    if (numeroSecreto == chute) {
        mensagem =
            numeroTentativas == 1
                ? `Isso aí! Você descobriu o número secreto ${numeroSecreto} com ${numeroTentativas} tentativa!`
                : `Isso aí! Você descobriu o número secreto ${numeroSecreto} com ${numeroTentativas} tentativas!`;
        alert(mensagem);
    } else {
        if (numeroSecreto > chute) {
            alert(`O número secreto é maior que ${chute}`);
        } else {
            alert(`O número secreto é menor que ${chute}`);
        }
    }
    numeroTentativas++;
} while (numeroSecreto != chute);
