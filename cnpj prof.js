
function multiplicarNumeros (array_base, array_multiplicacao) {
    let soma = 0
    for (let i = 0; i<array_base.length; i++) {
        soma += array_base[i] * array_multiplicacao[i]
    }

    let resto = soma % 11 
    let digito

    if (resto < 2) {
        digito = 0
    } else {
        digito = 11 - resto
    }
    return digito
}



function gerarCNPJ () {
    let numero_base = Math.floor(Math.random() * 100000000)
    numero_base = numero_base.toString() + '0001'
    let array_base = numero_base.split('')
    let array_multiplicacao = [5,4,3,2,9,8,7,6,5,4,3,2]
    let digito1 = multiplicarNumeros(array_base, array_multiplicacao)
    array_base.push(digito1.toString())
    array_multiplicacao.unshift(6)
    let digito2 = multiplicarNumeros(array_base, array_multiplicacao)
    array_base.push(digito2.toString())

    return array_base.join('')
   
}
let CNPJ = gerarCNPJ()
console.log(CNPJ)



