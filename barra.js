// Algoritmo verificador de códigos de barras
// Todo código de barras do tipo EAN tem 13 digitos
// Os 12 primeiros dígitos são o número base, o último é o verificador
// Para calcular o verificador:
// Multiplique os dígitos em posições ímpares por 1
// Multiplique os dígitos em posições pares por 3
// Some todos os resultados
// O dígito verificador é o número que, somado ao total, resulta em um múltiplo de 10
// Depois, extraia as informações do código.
// Os primeiros 3 dígitos representam o pais de origem
// Dos digitos 4 a 7, extraímos o código do fabricante
// Os últimos dígitos representam o código do produto.
// Utilizar a inteligência artificial para criar uma base de dados para consultar
// imprima na tela as informações obtidas

function verificarEAN(codigoBarras) {
    if (codigoBarras.length !== 13) {
        console.log("O código de barras deve ter 13 dígitos.");
        return;
    }

    // separar os 12 primeiros dígitos (número base) e o último dígito (verificador)
    let base = codigoBarras.slice(0, 12);
    let verificador = parseInt(codigoBarras[12]);

    // calcular do dígito verificador
    let soma = 0;
    for (let i = 0; i < base.length; i++) {
        let digito = parseInt(base[i]);
        soma += i % 2 === 0 ? digito * 1 : digito * 3; // Ímpares por 1, pares por 3
    }

    let calculado = 10 - (soma % 10);
    if (calculado === 10) calculado = 0; // Ajuste para múltiplos de 10

    // verifica se o dígito verificador é válido
    if (calculado !== verificador) {
        console.log("O código de barras é inválido.");
        return;
    }

    // tira as infos 
    let pais = codigoBarras.slice(0, 3);
    let fabricante = codigoBarras.slice(3, 7);
    let produto = codigoBarras.slice(7, 12);

    // exiba as informações na tela
    console.log("Código de barras válido!");
    console.log("País de origem:", pais);
    console.log("Código do fabricante:", fabricante);
    console.log("Código do produto:", produto);
}

// ex de uso
let codigoBarras = "7891234567895"; // insira um código EAN-13 válido aqui
verificarEAN(codigoBarras);