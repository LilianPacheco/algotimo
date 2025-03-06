//Pesquisar as regras online e criar um algoritmo que gere um cnpj válido

function validaCNPJ(cnpj) {
    // romeve os caracteres que não são números
    var numeros = cnpj.replace(/[^0-9]/g, '')

    // verificar se o CNPJ tem 14 dígitos ou se é uma sequência de zeros
    if (numeros.length !== 14 || numeros === '00000000000000') {
        return "CNPJ inválido";
    }

    var soma = 0
    var pesos = [5, 4, 3, 2, 9, 8, 7, 6, 5, 4, 3, 2]
    // calcular a soma dos produtos dos primeiros 12 dígitos pelos pesos correspondentes
    for (var i = 0; i < 12; i++) {
        soma += numeros[i] * pesos[i]
    }
    // calcular o resto da divisão da soma por 11
    var resto = soma % 11
    // definir o primeiro dígito verificador
    var digito1 = resto < 2 ? 0 : 11 - resto
    // verificar se o primeiro dígito verificador está correto
    if (numeros[12] != digito1) {
        return "CNPJ inválido"
    }

    soma = 0
    pesos.unshift(6)
    // calcular a soma dos produtos dos primeiros 13 dígitos pelos pesos correspondentes
    for (var i = 0; i < 13; i++) {
        soma += numeros[i] * pesos[i]
    }
    // calcular o resto da divisão da soma por 11
    resto = soma % 11
    // Define o segundo dígito verificador
    var digito2 = resto < 2 ? 0 : 11 - resto
    // varificar se o segundo dígito verificador está correto
    if (numeros[13] != digito2) {
        return "CNPJ inválido"
    }

    // se os dígitos verificadores estiverem corretos, o CNPJ é válido
    return "CNPJ válido"
}

// teste
console.log(validaCNPJ("00000000000000"))