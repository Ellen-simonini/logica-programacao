function classificarArea(){
    var caso = document.getElementById("caso").value.toLowerCase()
    var resultado = ""
    switch(caso){
        case "abuso sexual":
        case "furto":
        case "abuso moral":
            resultado = "Esse caso pertence ao Direito Penal"
            break;
        case "inassiduidade":
        case "advertência":
        case "suspensão":
            resultado = "Esse caso pertence ao Direito Administrativo"
            break;
        default:
            resultado = "área do Direito não reconhecida"
    }
    document.getElementById("resposta").innerHTML = resultado
}