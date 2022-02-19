// Algaritomo da atividade UC8 encontro 01

console.log("Programa para Cadastro de Peças");

var listaDePecas = ["Amortecedor", "Motor", "Filtro de Ar"] //vetor ou array

let peso = 200;

if (peso < 100) {
    console.log("A peça deve pesar no minimo 100g")
} else {
    console.log("A peça tem peso adequado")
};

// Caixa suporte até 10

if (listaDePecas.length <10) {
    console.log ("E possivel cadastrar mais pecas")
} else {
    console.log ("Não tem mais espaço na lista")
};
for (var i = 0; i < listaDePecas.length; i++) {
    if (listaDePecas[i].length > 2) {
        console.log(`O nome da peça ${listaDePecas[i]} está ok`)
    } else if (listaDePecas[i].length == 0) {
        console.log(`O nome da peça não pode ser vazio`)
    } else {
        console.log(`O nome da peça ${listaDePecas[i]} não pode ser menor que 3`)
    }
};
if (nomePeca.length > 3) {
    console.log("Nome da peça esta adequado para o codastro")
};