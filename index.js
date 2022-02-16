console.log("Cadastro de Eventos");

// Declaração da Classe Evento
class evento {
    nomeresponsavel
    tipoEvento
    idaderesponsavel
    qtparticipantes
    dataEvento
    localEvento
};

// Declaração da Variavel Idade Permitida
const idadepermitida = 18;

// Tue Jul 14 2020 15:40:44 GMT-0300 (GMT-03:00)
var dataDoCadastro = Date ();
console.log("Data hora do CADASTRO:", dataDoCadastro);

// Informe seu Nome
nomeresponsavel = "David";
console.log("Nome do Responsável:", nomeresponsavel);

// Informe o tipo de evento
tipoEvento = "Jencana Escolar";
console.log("Tipo do Evento:", tipoEvento);

// Informe a sua Idade
idaderesponsavel = 20;
console.log("Idade do Responsável:", idaderesponsavel);

// Idade e igual ou maior que 18?
    if (idaderesponsavel < idadepermitida) {
    console.log("Pessoas menores de 18 anos não podem cadastrar eventos")
    } else;

// Informe a quantidade de participantes!
qtparticipantes = 90;
console.log("Quantidade de Participantes:", qtparticipantes);

// A quantidade de participantes e maior que 100
    if (qtparticipantes > 100) {
    console.log("Quantidade de participantes não pode ser acima de 100 pessoas")
    } else;

// Informe a Data do evento
dataEvento = new Date(2022, 2, 10, 14);
console.log("Data Prevista para a Realização: ", dataEvento);

// Data  do evento é posterior a Data Atual?
    if (dataEvento > dataDoCadastro) {
    console.log("Data Invalida")
    } else;

localEvento = "Praça01";
console.log("Local de realização do evento:", localEvento);

// Evento Cadastrado com sucesso
console.log("Evento cadastrado com sucesso");

