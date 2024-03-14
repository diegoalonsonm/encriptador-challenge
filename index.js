const inputTexto = document.getElementById('input')
const outputTexto = document.getElementById('output')
let txtEncriptado = ''
let textoInicial

function encriptarTexto() {
    textoInicial = inputTexto.value
    const textoIngresado = inputTexto.value

    const regex = /^[a-z]+$/

    if (!regex.test(textoIngresado)) {
        alert("El texto debe estar en minusculas sin caracteres especiales o numeros")
        return
    }

    for (let i = 0; i < textoIngresado.length; i++) {
        var codigoChar = textoIngresado[i]

        if (codigoChar === 'e') {
            codigoChar += 'nter'
        } else if (codigoChar === 'i') {
            codigoChar += 'mes'
        } else if (codigoChar === 'a') {
            codigoChar += 'i'
        } else if (codigoChar === 'o') {
            codigoChar += 'ber'
        } else if (codigoChar === 'u') {
            codigoChar += 'fat'
        }
        
        txtEncriptado += codigoChar
        outputTexto.value = txtEncriptado
    }

    const copyButton = document.querySelector('.copy-button')
    copyButton.classList.remove('d-none')
}

function desencriptarTexto() {
    if (!txtEncriptado) {
        outputTexto.value = 'Primero debes encriptar un texto'
        return
    }


    outputTexto.value = inputTexto.value
    const copyButton = document.querySelector('.copy-button')
    copyButton.classList.add('d-none')
}

function limpiar() {
    inputTexto.value = ''
    outputTexto.value = ''
    txtEncriptado = ''

    const copyButton = document.querySelector('.copy-button')
    copyButton.classList.add('d-none')
}

function copiar() {
    outputTexto.select()
    document.execCommand('copy')
    alert('Texto copiado')
}