const processos = ["Proc 1", "Proc 2" , "Proc 3" , "Proc 4" , "Proc 5"];
const comissarios = ["David" , "Ederson" , "Jorge"];

//loop for-inicio, fim, intervalo
for(var i=0;i<processos.length;i++){
    const nome = comissarios[i%comissarios.length];
    console.log(`${nome} - 000${processos[i]}`)
}