function gerarPeticao(Nome, Acao){
    return `Eu Ellen, advogada de ${Nome}, venho por meio desta ingressar com a Ação de ${Acao} perante o juiz competente`
}

function gerarPeticaoCompleta(){
    const nome = document.getElementById("Nome").value 
    const acao = document.getElementById("Acao").value
    const valor = parseFloat(document.getElementById("Valor").value)

    const textoPeticao = gerarPeticao(nome, acao)
    const resultado = `${textoPeticao}`

    document.getElementById("saida").innerHTML=resultado
}