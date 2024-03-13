const inputTexto = document.getElementById('input')
const outputTexto = document.getElementById('output')
let txtEncriptado 

function encriptarTexto() {
    const texto = inputTexto.value
    const encriptado = btoa(texto)
    txtEncriptado = encriptado
    outputTexto.value = encriptado
}

function desencriptarTexto() {
    if (!txtEncriptado) {
        outputTexto.value = 'Primero debes encriptar un texto'
        return
    }
    const desencriptado = atob(txtEncriptado)
    outputTexto.value = desencriptado
}

function limpiar() {
    inputTexto.value = ''
    outputTexto.value = ''
    txtEncriptado = ''
}