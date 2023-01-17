
const calcula = () => {
    const valor1 = Number(document.querySelector('#txtValor1').value);
    const valor2 = Number(document.querySelector('#txtValor2').value);
    let resultado;

    if (document.querySelector('#rdbSoma').checked) {
        resultado = valor1 + valor2;
    }

    else if (document.querySelector('#rdbSub').checked) {
        resultado = valor1 - valor2;
    }

    else if (document.querySelector('#rdbMult').checked) {
        resultado = valor1 * valor2;
    }

    else if (document.querySelector('#rdbDiv').checked) {
        resultado = valor1 / valor2;
    }

    document.getElementById('txtResult').value = resultado;
}