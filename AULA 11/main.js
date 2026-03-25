
//Função Anônima
const msg = function(){
    return "Olá! eu sou Ellen"
}
console.log(msg());

//Arrow Function
const saudacao = ()=>{
    return "Bem-vinda!"
}
console.log(saudacao());

const comprimento = ()=> "Como posso te ajudar?"
console.log(comprimento());

//função anônima-jurídico
// function calcHonorarios(valorCausa){
//     return valorCausa*0.20
// }
const calcHonorarios = function(valor){
    return valor*0.20
}
console.log(calcHonorarios(300));

// function gerarPeticao(Nome, Acao){
//     return `Eu Ellen, advogada de ${Nome}, venho por meio desta ingressar com a Ação de ${Acao}\nperante o juiz competente`
// }
const gerarPeticao = (Nome, Acao)=> `Eu Ellen, advogada de ${Nome}, venho por meio desta ingressar com a Ação de ${Acao}\nperante o juiz competente`;
console.log(gerarPeticao("Jéssica","tributário"))