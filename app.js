// App desenvolvido por Elto Gaúna Galera em 17/04/2025
// Desenvolvido com base nos conhecimentos adquiridos nos cursos de JavaScrit da Alura
// HTML e CSS foram criados e fornecidos pela Alura. Todos os direitos reservados a eles.



let listaNumeroEscolhido = [];

function sortear(){
    limpaLista();
    let quantidade = parseInt(document.getElementById('quantidade').value);
    let de = parseInt(document.getElementById('de').value);
    let ate = parseInt(document.getElementById('ate').value);
    let resultado = gerarNumeroAleatorio(quantidade, de, ate);
    alteraTexto(`${resultado}`);
    document.getElementById('btn-reiniciar').className = 'container__botao';

}

function limparCampo(){
    document.getElementById('quantidade').value = "";
    document.getElementById('de').value = "";
    document.getElementById('ate').value = "";
    limpaLista();
    alteraTexto('nenhum até agora');
}

function limpaLista(){
    listaNumeroEscolhido = [];
}

function reiniciar(){
    limparCampo();
    document.getElementById('btn-reiniciar').className = 'container__botao-desabilitado';
}

function gerarNumeroAleatorio(quantidade, de, ate){
    let x = 1;
    while (x <= quantidade){
        let numeroEscolhido = parseInt(obterNumeroAleatorio(de, ate));
        if (listaNumeroEscolhido.includes(numeroEscolhido)){
            obterNumeroAleatorio(de, ate);
        } else{
            listaNumeroEscolhido.push(numeroEscolhido);
            x++;
        }
    }
    console.log(listaNumeroEscolhido);
    return listaNumeroEscolhido;
}

function obterNumeroAleatorio(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min); // The maximum is inclusive and the minimum is inclusive
}

function alteraTexto(texto){
    document.getElementById('resultado').innerHTML = `<label class="texto__paragrafo" id="resultado">Números sorteados: ${texto}</label>`;
}