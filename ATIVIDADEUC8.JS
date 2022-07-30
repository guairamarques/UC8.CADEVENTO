//-Se a data do evento for posterior à data atual, permitir o evento; senão, alertar que o cadastro não será permitido por data inválida.

//-Se o participante for maior de 18 anos, permitir o cadastro; senão, alertar que o cadastro não é permitido pela idade.

//-Listar participantes e palestrantes por evento.
 
//-Enquanto a quantidade de participantes for inferior a 100, permitir cadastro; senão, alertar que o cadastro não será permitido por ter excedido o limite.//


let datadoevento = 25
let dataatual = 10

let idadedoparticipante = 18

let participantes = 100

if(datadoevento > dataatual); {console.log("CADASTRO PERMITIDO")}; 
else {console.log("DATA POSTERIOR AO EVENTO, CAD NÃO PERMITIDO")} ;

if(idadedoparticipante >= 18); {console.log("CONTINUAR SEU CADASTRO")}; 
else{console.log("NÃO É PERMITIDO PARA MENORES DE IDADE")};

if(participantes <= 100); {console.log("PARTICIPAÇÃO PERMITIDA")}; 
else{console.log("LIMITE DE PARTICIPANTE ATINGIDO, CADASTRO NÃO PERMITIDO")};




