//função para verifir o cpf 
//def variavel e a formula para o caluclo dos dígitos
function calcularDigito(cpf, multiplicadores) {
    let soma = 0;
    for (let i = 0; i < multiplicadores.length; i++) {
        soma += cpf[i] * multiplicadores[i]
    }
    let resto = soma % 11
    return resto < 2 ? 0 : 11 - resto
}

function verificarCPF(cpf) {
    if (cpf.length !== 11) {
        return false
    }
    // converter para um array de números
    cpf = cpf.split('').map(Number)

    // multiplica para o primeiro dígito verificador (10 a 2)
    let multiplicadores1 = [10, 9, 8, 7, 6, 5, 4, 3, 2]
    let digito1 = calcularDigito(cpf, multiplicadores1)

    // miltiplica para o segundo dígito verificador (11 a 2)
    let multiplicadores2 = [11, 10, 9, 8, 7, 6, 5, 4, 3, 2]
    let digito2 = calcularDigito(cpf.concat(digito1), multiplicadores2)

    // verficar os dígitos 
    return digito1 === cpf[9] && digito2 === cpf[10]
}

// uso naa prática
let cpf = "12059779900"
if (verificarCPF(cpf)) {
    console.log("CPF válido")
} else {
    console.log("CPF inválido")
}
