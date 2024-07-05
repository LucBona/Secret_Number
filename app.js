let numerosSorteados = [];
let tentativas = 1;
let limiteSuperior = 10;
let numeroSecreto = geraNumeroAleatorio();

function mostrarTextoNaTela(tag, texto) {
    let campo = document.querySelector(tag);
    campo.innerHTML = texto;
    responsiveVoice.speak(texto, 'Brazilian Portuguese Male', {rate:1.4});
}

function geraNumeroAleatorio() {
    if (numerosSorteados.length === limiteSuperior) {
        console.log(numerosSorteados);
        numerosSorteados = [];
    }

    let numeroGerado = parseInt((Math.random() * limiteSuperior) + 1);

    while (numerosSorteados.includes(numeroGerado)) {
        numeroGerado = parseInt((Math.random() * limiteSuperior) + 1);
    }

    numerosSorteados.push(numeroGerado);
    console.log(numeroGerado);
    console.log(numerosSorteados);
    return numeroGerado;
}

function verificaChute() {
    let chute = document.querySelector('input').value;
    let acertou = chute == numeroSecreto;
    if (acertou){
        mostrarTextoNaTela('h1', 'Acertou!');
        let palavra = tentativas == 1 ? 'tentativa' : 'tentativas';
        let mensagem = `Você descobriu o número secreto com ${tentativas} ${palavra}!`;
        mostrarTextoNaTela('p', mensagem);
        document.getElementById('reiniciar').removeAttribute('disabled');
        document.getElementById('palpitar').setAttribute('disabled', true);
    }else{
        if (chute < numeroSecreto){
        mostrarTextoNaTela('p', 'O número secreto é maior que ' + chute);
        }else{
        mostrarTextoNaTela('p', 'O número secreto é menor que ' + chute);
        }
        limpaTexto();
        tentativas++
    }
}

function limpaTexto() {
    chute = document.querySelector('input');
    chute.value = '';
}

function reiniciarJogo() {
    tentativas = 1;
    numeroSecreto = geraNumeroAleatorio();
    mostrarTextoNaTela('h1', 'Jogo do número secreto');
    mostrarTextoNaTela('p', 'Escolha um número entre 1 e ' + limiteSuperior);
    document.querySelector('input').value = '';
    document.getElementById('palpitar').removeAttribute('disabled');
    document.getElementById('reiniciar').setAttribute('disabled', true);
}

mostrarTextoNaTela('h1', 'Jogo do número secreto');
mostrarTextoNaTela('p', 'Escolha um número entre 1 e ' + limiteSuperior);