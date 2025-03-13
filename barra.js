const bancoDeDados = {
    paises: [
        { codigo: '789', nome: 'Brasil' },
        { codigo: '690', nome: 'China' },
        { codigo: '880', nome: 'Coreia do Sul' },
        { codigo: '000', nome: 'Estados Unidos' },
        { codigo: '400', nome: 'Alemanha' },
        { codigo: '030', nome: 'Canadá' },
        { codigo: '076', nome: 'Reino Unido' },
        { codigo: '950', nome: 'Argentina' },
        { codigo: '003', nome: 'França' },
        { codigo: '073', nome: 'México' }
    ],
    fabricantes: [
        { codigo: '7891', nome: 'Fabricante A' },
        { codigo: '6902', nome: 'Fabricante B' },
        { codigo: '8812', nome: 'Fabricante C' },
        { codigo: '4001', nome: 'Fabricante D' },
        { codigo: '9501', nome: 'Fabricante E' },
        { codigo: '0301', nome: 'Fabricante F' },
        { codigo: '0761', nome: 'Fabricante G' },
        { codigo: '0031', nome: 'Fabricante H' },
        { codigo: '0731', nome: 'Fabricante I' },
        { codigo: '0131', nome: 'Fabricante J' }
    ],
    produtos: [
        { codigoEAN: '78912', nome: 'Produto A', fabricante: 'Fabricante A', pais: 'Brasil' },
        { codigoEAN: '69012', nome: 'Produto B', fabricante: 'Fabricante B', pais: 'China' },
        { codigoEAN: '88012', nome: 'Produto C', fabricante: 'Fabricante C', pais: 'Coreia do Sul' },
        { codigoEAN: '40012', nome: 'Produto D', fabricante: 'Fabricante D', pais: 'Alemanha' },
        { codigoEAN: '95012', nome: 'Produto E', fabricante: 'Fabricante E', pais: 'Argentina' },
        { codigoEAN: '03012', nome: 'Produto F', fabricante: 'Fabricante F', pais: 'Canadá' },
        { codigoEAN: '07612', nome: 'Produto G', fabricante: 'Fabricante G', pais: 'Reino Unido' },
        { codigoEAN: '00312', nome: 'Produto H', fabricante: 'Fabricante H', pais: 'França' },
        { codigoEAN: '07312', nome: 'Produto I', fabricante: 'Fabricante I', pais: 'México' },
        { codigoEAN: '01312', nome: 'Produto J', fabricante: 'Fabricante J', pais: 'Estados Unidos' }
    ]
}

function buscarInformacoes(codigoEAN) {
    if (codigoEAN.length !== 13) {
        return "Código EAN inválido!";
    }

    const codigoPais = codigoEAN.substring(0, 3);
    const codigoFabricante = codigoEAN.substring(0, 6);
    
    const pais = bancoDeDadosEAN.paises[codigoPais] || "Desconhecido";
    const fabricante = bancoDeDadosEAN.fabricantes[codigoFabricante] || "Desconhecido";
    const produto = bancoDeDadosEAN.produtos[codigoEAN] || "Produto não encontrado";

    return {
        codigoEAN,
        pais,
        fabricante,
        produto
    };
}
function validaEAN (cod_barras){
   if (cod_barras.length != 13) {
   return 'Código inválido'
   }
   cod_barras=cod_barras.split('')
   let soma = 0
   for (let i = 0; i<cod_barras.length - 1; i++){
   if(i % 2 != 0){
    soma += parseInt (cod_barras[i] * 3)
    }else{
    soma += parseInt (cod_barras[i])
    }
   }
   let digito = (10 - soma % 10) % 10
   if (digito != cod_barras[12]) {
    return 'Código Inválido'
   }

   return 'Código Válido'
}

function proucuraProduto(cod_barras){
let pais = cod_barras.slice(0,5)
let fabricante = cod_barras.slice(3,7)
let produto = cod_barras.slice(7,12)

let nome_pais = bancoDeDados.paises.find((item) => item.codigo == "030")
console.log(nome_pais.nome)

}

let codigo = '4006381333931'
let resultado = validaEAN(codigo)
console.log(resultado)
let produto = proucuraProduto(codigo)