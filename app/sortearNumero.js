const menorValor = 1;
const maiorValor = 10;
const numeroSecreto = gerarNumeroAleatorio();

function gerarNumeroAleatorio() {
    return parseInt(Math.random() * ((menorValor - 1) - maiorValor) + maiorValor + 1)
}

console.log('Número secreto: ' + (numeroSecreto))

const elementoMenorValor = document.getElementById('menor-valor');
const elementoMaiorValor = document.getElementById('maior-valor');

elementoMenorValor.innerHTML = menorValor;
elementoMaiorValor.innerHTML = maiorValor;
