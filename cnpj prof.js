// Função que realiza a multiplicação dos elementos de dois arrays e calcula o dígito verificador
function multiplicarNumeros (array_base, array_multiplicacao) {
    let soma = 0
    // Realiza a multiplicação dos elementos correspondentes nos dois arrays e soma os resultados
    for (let i = 0; i < array_base.length; i++) {
        soma += array_base[i] * array_multiplicacao[i]
    }

    // Calcula o resto da divisão da soma por 11
    let resto = soma % 11 
    let digito

    // Se o resto for menor que 2, o dígito verificador será 0
    if (resto < 2) {
        digito = 0
    } else {
        // Caso contrário, o dígito será a diferença entre 11 e o resto
        digito = 11 - resto
    }

    // Retorna o dígito verificador
    return digito
}

// Função que gera um CNPJ válido aleatório
function gerarCNPJ () {
    // Gera um número base aleatório de 8 dígitos e adiciona "0001" ao final
    let numero_base = Math.floor(Math.random() * 100000000) 
    numero_base = numero_base.toString() + '0001'

    // Converte o número base para um array de caracteres
    let array_base = numero_base.split('')
    
    // Define o array de multiplicação para calcular o primeiro dígito verificador
    let array_multiplicacao = [5, 4, 3, 2, 9, 8, 7, 6, 5, 4, 3, 2]
    
    // Chama a função multiplicarNumeros para calcular o primeiro dígito verificador
    let digito1 = multiplicarNumeros(array_base, array_multiplicacao)

    // Adiciona o primeiro dígito verificador ao array base
    array_base.push(digito1.toString())
    
    // Atualiza o array de multiplicação para calcular o segundo dígito verificador
    array_multiplicacao.unshift(6)  // Adiciona 6 à frente do array para o cálculo do segundo dígito
    
    // Chama a função multiplicarNumeros para calcular o segundo dígito verificador
    let digito2 = multiplicarNumeros(array_base, array_multiplicacao)
    
    // Adiciona o segundo dígito verificador ao array base
    array_base.push(digito2.toString())
    
    // Retorna o CNPJ completo como uma string unida
    return array_base.join('')
}

// Gera um CNPJ aleatório e exibe no console
let CNPJ = gerarCNPJ()
console.log(CNPJ)
