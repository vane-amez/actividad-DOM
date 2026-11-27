const botonRojo = document.getElementById('rojo')
const botonAmarillo = document.getElementById('amarillo')
const botonVerde = document.getElementById('verde')
const mensaje = document.getElementById('mensaje')

botonRojo.addEventListener('click', function (){
    apagarLuces()
    botonRojo.style.background = 'red'
    mensaje.textContent = 'Detente'
})

botonAmarillo.addEventListener('click', function (){
    apagarLuces()
    botonAmarillo.style.background = 'yellow'
    mensaje.textContent = 'Precaución'
})

botonVerde.addEventListener('click', function (){
    apagarLuces()
    botonVerde.style.background = 'green'
    mensaje.textContent = 'Puedes avanzar'
})

function apagarLuces(){
    botonRojo.style.background = 'lightgray'
    botonAmarillo.style.background = 'lightgray'
    botonVerde.style.background = 'lightgray'
}