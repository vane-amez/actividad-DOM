const peso = document.getElementById('peso')
const estatura = document.getElementById('estatura')
const boton = document.getElementById('boton')
const resultado = document.getElementById('resultado')

boton.addEventListener('click', function(){
    if (peso !== "" && estatura !== ""){
        const pesoValor = parseFloat(peso.value);
        const estaturaValor = parseFloat(estatura.value);
        const imc = pesoValor / (estaturaValor * estaturaValor)
        resultado.innerText = 'Tu IMC es ' + imc.toFixed(2);
    } else {
        resultado.innerText = 'Por favor ingresa tu peso y estatura'
    }
})