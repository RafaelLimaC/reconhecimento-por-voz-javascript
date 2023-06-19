function verificaSeChuteValido(chute) {
    const numero = +chute;

    if (seChuteInvalido(numero)) {
        elementoChute.innerHTML += '<div>Valor inválido.</div>';
        return;
    }

    if (numeroMaiorQueValorMaximo(numero)) {
        elementoChute.innerHTML += `
        <div>Valor inválido. Fale um número entre: 
        ${menorValor} e ${maiorValor} </div>
        `;
        return;
    }

    if (numero === numeroSecreto) {
        document.body.innerHTML = `
        <h2>Você acertou!</h2>
        <h3>O número secreto era: <span>${numeroSecreto}</span>.</h3>
        <button id="jogar-novamente" class="btn-jogar">Jogar novamente</button>
        `;
    } else if (numero > numeroSecreto) {
        elementoChute.innerHTML += `
        <div>O número secreto é menor <i class="fa-solid fa-arrow-down"></i></div>
        `;
    } else {
        elementoChute.innerHTML += `
        <div>O número secreto é maior <i class="fa-solid fa-arrow-up"></i></div>
        `;
    }
}

function seChuteInvalido(numero) {
    return Number.isNaN(numero);
}

function numeroMaiorQueValorMaximo(numero) {
    return numero > maiorValor || numero < menorValor;
}

document.body.addEventListener('click', e => {
    if (e.target.id == 'jogar-novamente') {
        window.location.reload();
    }
})