function verificaSeChuteValido(chute) {
    const numero =+ chute;

    if (seChuteInvalido(numero)) {
        console.log("Valor inválido.")
    }

    if (numeroMaiorQueValorMaximo(numero)) {
        console.log(`Valor inválido. O número precisa entre: ${menorValor} e ${maiorValor} `)
    }
}

function seChuteInvalido(numero) {
    return Number.isNaN(numero);
}

function numeroMaiorQueValorMaximo(numero) {
    return numero > maiorValor || numero < menorValor;
}