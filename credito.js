
/*Algoritmo verificador de cartão de crédito.
Pesquisar as regras online e criar um algoritmo que verifique se um numero de cartão é valido */

/*Retire o último dígito do número. Ele é o verificador;
Escreva os números na ordem inversa;
Multiplique os dígitos das casas ímpares por 2 e subtraia 9 de todos os resultados maiores que 9;
Some todos os números;
O dígito verificador (aquele do passo 1) é o número que você precisa somar a todos os outros números somados pra obter um módulo 10.*/

function verificarCartao(numeroCartao) {
    let digitos = numeroCartao.split('').map(Number)
    let digitoVerificador = digitos.pop()
    let soma = 0

    digitos.reverse().forEach((digito, i) => {
        if (i % 2 === 0) {
            digito *= 2;
            if (digito > 9) digito -= 9
        }
        soma += digito
    })

    soma += digitoVerificador
    return soma % 10 === 0
}

let numeroCartao = "4532015112830366" //se testar com 4532015112830365 mostrará a forma inválida :)
if (verificarCartao(numeroCartao)) {
    console.log("O número do cartão é válido!")
} else {
    console.log("O número do cartão é inválido.")
}



