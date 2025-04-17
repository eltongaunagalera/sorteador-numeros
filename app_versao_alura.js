// Código desenvolvido pelos professores.
// Esse código tem uns bugs no botão reiniciar, solucionados no app.js

function sortear(){
    let listaNumeroEscolhido = [];
    let quantidade = parseInt(document.getElementById('quantidade').value);
    let de = parseInt(document.getElementById('de').value);
    let ate = parseInt(document.getElementById('ate').value);
    let numero;

    for (let x = 0; x < quantidade; x++){
        numero = obterNumeroAleatorio(de, ate);

        while(listaNumeroEscolhido.includes(numero)){
            numero = obterNumeroAleatorio(de, ate);
        }

        listaNumeroEscolhido.push(numero);
    }

    let resultado = document.getElementById('resultado')
    resultado.innerHTML = `<label class="texto__paragrafo" id="resultado">Números sorteados: ${listaNumeroEscolhido}</label>`;
    alteraStatusBotao();
}

function alteraStatusBotao(){
    let botao = document.getElementById('btn-reiniciar');
    if (botao.classList.contains('container__botao-desabilitado')){
        botao.classList.remove('container__botao-desabilitado');
        botao.classList.add('container__botao');
    }
    else{
        botao.classList.remove('container__botao');
        botao.classList.add('container__botao-desabilitado');
    }
}

function reiniciar(){
    document.getElementById('quantidade').value = "";
    document.getElementById('de').value = "";
    document.getElementById('ate').value = "";
    document.getElementById('resultado').innerHTML = `<label class="texto__paragrafo" id="resultado">Números sorteados: nenhum até agora</label>`;
    alteraStatusBotao();
}

function obterNumeroAleatorio(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min); // The maximum is inclusive and the minimum is inclusive
}
