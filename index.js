let resposta = document.getElementById("resposta")

function calcular(){
    let lado = document.getElementById("lado").value
    let volume = lado * lado * lado

    resposta.innerHTML = "O valor do volume do cubo é igual a: " + volume + " m3"
    resposta.style.fontWeight = "bold"
}