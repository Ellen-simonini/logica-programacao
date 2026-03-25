
//função com parâmetro
function gerarPeticao(Nome, Acao){
    return `Eu Ellen, advogada de ${Nome}, venho por meio desta ingressar com a Ação de ${Acao}\nperante o juiz competente`
}

function calcHonorarios(valorCausa){
    return valorCausa*0.20
}

//função sem parâmetro
function dataAtual(){
    const hoje = new Date();
    return "Data Atual: "+hoje.toLocaleDateString()
}

function gerarPeticaoCompleta(){
    const nome = document.getElementById("Nome").value; 
    const acao = document.getElementById("Acao").value;
    const valor = parseFloat(document.getElementById("Valor").value);

    //Chamando a função gerar petição
    const textoPeticao = gerarPeticao(nome, acao);
    //Chamando a função calcular honorários
    const honorarios = calcHonorarios (valor);


    const resultado = `${textoPeticao}\n\nValor da Causa: R$ ${valor}\nHonorários sugerido 20%: R$ ${honorarios}`;
    const d = dataAtual();
    console.log(d);
    document.getElementById("Data").innerHTML=d;

    document.getElementById("saida").innerHTML=resultado;
}