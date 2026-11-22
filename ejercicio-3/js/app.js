const respuesta = document.getElementById('respuesta')
const resultado = document.getElementById('resultado')

respuesta.addEventListener('keyup', function(){
    resultado.innerText = respuesta.value
})
