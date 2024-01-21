let numeroLimite = 10;
let numerosSorteados = [];
let numeroTentativas = 1;
let numeroAleatorio = gerarNumeroAleatorio();

function mudarTextoTagHtml(tag, texto) {
    let campo = document.querySelector(tag);
    campo.innerHTML = texto;
    responsiveVoice.speak(texto, "Brazilian Portuguese Female", { rate: 1.2 });
}

function verificarChute() {
    let chute = document.querySelector("input").value;
    let mensagemTentativa =
        numeroTentativas == 1
            ? `Acertou com ${numeroTentativas} tentativa`
            : `Acertou com ${numeroTentativas} tentativas`;
    if (chute == numeroAleatorio) {
        mudarTextoTagHtml("h1", `Parabéns! Você encontrou o número aleatório!`);
        mudarTextoTagHtml("p", mensagemTentativa);
        botao = document
            .getElementById("reiniciar")
            .removeAttribute("disabled");
    } else {
        mensagem =
            chute < numeroAleatorio ? `O número é maior` : `O número é menor`;
        mudarTextoTagHtml("p", mensagem);
        limparCampo();
    }
    numeroTentativas++;
}

function reiniciarJogo() {
    numeroAleatorio = gerarNumeroAleatorio();
    numeroTentativas = 1;
    exibirMensagemInicial();
    botao = document.getElementById("reiniciar").setAttribute("disabled", true);
    limparCampo();
}

function gerarNumeroAleatorio() {
    let numeroEscolhido = parseInt(Math.random() * numeroLimite + 1);
    let quantidadeElementosLista = numerosSorteados.length;

    if (quantidadeElementosLista == numeroLimite - 3) {
        numerosSorteados = [];
    }

    if (numerosSorteados.includes(numeroEscolhido)) {
        return gerarNumeroAleatorio();
    } else {
        numerosSorteados.push(numeroEscolhido);
        return numeroEscolhido;
    }
}

function limparCampo() {
    chute = document.querySelector("input");
    chute.value = "";
}

function exibirMensagemInicial() {
    mudarTextoTagHtml("h1", "Jogo do número secreto");
    mudarTextoTagHtml("p", `Escolha um número entra 1 e ${numeroLimite}`);
}

exibirMensagemInicial();
