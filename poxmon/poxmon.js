function iniciarJuego() {
    let botonCompañeroJugador = document.getElementById("boton-compañero")
    botonCompañeroJugador.addEventListener("click", seleccionarCompañeroJugador)
}

function seleccionarCompañeroJugador() {
    let inputURSHIFU = document.getElementById("URSHIFU")
    let inputMETAGROSS = document.getElementById("METAGROSS")
    let inputZEKROM = document.getElementById("ZEKROM")
    let inputLUCARIO =document.getElementById("LUCARIO")
    let spanCompañeroJugador = document.getElementById("compañero-jugador")

    if (inputURSHIFU.checked) {
        spanCompañeroJugador.innerHTML = "URSHIFU"
    } else if (inputMETAGROSS.checked) { 
        spanCompañeroJugador.innerHTML = "METAGROSS"
    } else if  (inputZEKROM.checked){
        spanCompañeroJugador.innerHTML = "ZEKROM"
    } else if  (inputLUCARIO.checked){
        alert("SELECCIINASTE A LUCARIO COMO COMPAÑERO")
    } else [
        alert("SELECCIONA UN MASCOTA O PIERDE")
    ]
}

window.addEventListener("load", iniciarJuego)
