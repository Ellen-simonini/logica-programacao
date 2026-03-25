function calcular(){
    var multa=document.getElementById("multa").value;
    var dias=document.getElementById("dias").value;

    let multaTotal=multa*dias;

    document.getElementById("resultado").innerHTML="Multa Total Devida: R$ "+multaTotal
}