const calcularImc = () => {
    let pegarIdade = parseFloat(document.querySelector(".idade").value)
    let pegarAltura = parseFloat(document.querySelector(".altura").value)
    let pegarPeso = parseFloat(document.querySelector(".peso").value)
    var Imc = pegarPeso/(pegarAltura**2)
    console.log(Imc)
}