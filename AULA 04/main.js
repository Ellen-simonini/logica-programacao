//coleta de dados com variaveis e tipos de dados
//usando let (valor que pode mudar depois)
let name=prompt("digite seu nome: ");
document.getElementById("Name").innerHTML=name;


//usando const (valor que não será alterado)
const dataDeNascimento=prompt("digite a data do seu aniversário: "); 
document.getElementById("Nascimento").innerHTML=dataDeNascimento;

//usando var (variante que pode mudar depois)
var estudo=prompt("você está estudando javascript? ");
let resposta=estudo==="sim";
document.getElementById("dados").innerHTML="está estudando js:"+resposta; 