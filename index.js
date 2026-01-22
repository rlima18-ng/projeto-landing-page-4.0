var Leonardo = window.document.getElementById("leonardo")
var Samantha = window.document.getElementById("samantha")
var Bruna =  window.document.getElementById("bruna")
var setaDiereita = window.document.getElementById("setadireita")
var setaEsquerda = window.document.getElementById("setaesquerda")

function RolarparaDireita() {
    Bruna.style = "display:none"
    Samantha.style = "display:flex"
    setaDiereita.style = "display:none"
    setaEsquerda.style = "display:flex; margin-top:100px;"
}

function RolarParaEsquerda() { 
    Samantha.style = "display:none"
    Bruna.style = "display:flex"
    setaDiereita.style = "display:flex"
    setaEsquerda.style = "display:none"
}