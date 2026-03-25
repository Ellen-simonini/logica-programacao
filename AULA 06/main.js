function calcular(){
    var valueCause=document.getElementById("cause").value;
    var valueRoof=document.getElementById("teto").value;


    var ValueIqual = (valueCause===valueRoof)
    var ValueMenor = (valueCause<valueRoof)
    var ValueMaior = (valueCause>valueRoof)
    
    console.log(ValueIqual)
   if(ValueIqual === false){
     document.getElementById("igual").innerHTML="valor não é igual ao teto"
   }else if(ValueIqual === true){
     document.getElementById("igual").innerHTML="valor é igual ao teto"
   }
   if(ValueMenor === false){
    document.getElementById("menor").innerHTML="valor não é abaixo do teto"
   }else if(ValueMenor === true){
    document.getElementById("menor").innerHTML="valor é abaixo do teto"
   }
   if(ValueMaior === false){
    document.getElementById("maior").innerHTML="valor não é maior que o teto"
   }else if(ValueMaior === true){
    document.getElementById("maior").innerHTML="valor acima do teto"
   }
        



    // document.getElementById("igual").innerHTML="valor igual ao teto? "+(valueCause===valueRoof);
    // document.getElementById("menor").innerHTML="valor abaixo do teto? "+(valueCause<valueRoof);
    // document.getElementById("maior").innerHTML="valor acima do teto? "+(valueCause>valueRoof)

}


