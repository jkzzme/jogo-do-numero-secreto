let listaDeNumeroSorteado = [];
let numeroMaximo = 10;
let numeroSecreto = gerarNumeroAleatorio();
let tentativas = 1

function exibirTextoNaTela(tag, texto)  {
    let  campo = document.querySelector(tag);
    campo.innerHTML = texto ;
    responsiveVoice.speak(texto, 'Brazilian Portuguese Female', {rate:1.2});

}
function exibirMensagemInicial() {
    exibirTextoNaTela('h1' , 'DESCUBRA O NÚMERO');
    exibirTextoNaTela('p' , 'escolha um numero de 1 a 10');
}

exibirMensagemInicial()
 
function verificarChute() {
    let chute = document.querySelector('input').value;

     if (chute == numeroSecreto) {
        exibirTextoNaTela ('h1', 'acertou miseravi');
        let palavraTentativa = tentativas > 1 ? 'tentativas' : 'tentativa';
        let mensagemTentatvia =`voce descobriu o numero com ${tentativas} ${palavraTentativa}`;
        exibirTextoNaTela ('p', mensagemTentatvia);
        document.getElementById('reiniciar').removeAttribute ('disabled');
     } else {
        if (chute > numeroSecreto) {
            exibirTextoNaTela('p', 'o numero eh menorrrr');
        } else {
            exibirTextoNaTela('p' , 'o numero eh maiorrrr');
        }
        tentativas++
        limparCampo()
        
    }
     
}
function gerarNumeroAleatorio() {
    let numeroEscolhido = parseInt(Math.random() * numeroMaximo + 1);
    let quantidadeDeElementos = listaDeNumeroSorteado.length;

    if (quantidadeDeElementos == numeroMaximo)  {
        listaDeNumeroSorteado = [];

    }
    if (listaDeNumeroSorteado.includes(numeroEscolhido))
        return gerarNumeroAleatorio();
    else {
        listaDeNumeroSorteado.push(numeroEscolhido);
        console.log (listaDeNumeroSorteado);
        return numeroEscolhido;
    }
}
function limparCampo() {
    chute = document.querySelector('input');
    chute.value = '';
    }

function reiniciarJogo() {
    numeroSecreto = gerarNumeroAleatorio();
    limparCampo();
    tentativas = 1;
    exibirMensagemInicial();
    document.getElementById('reiniciar').setAttribute ('disabled',true)
}