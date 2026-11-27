const cambiar = document.getElementById('cambiar')
const color = document.getElementById('color')

color.addEventListener('change', function () {
    if (color.value === 'azul') {
        cambiar.style.background = 'blue'
        cambiar.style.color = 'white'
    } else if (color.value === 'verde') {
        cambiar.style.background = 'green'
        cambiar.style.color = 'red'
    } else if (color.value === 'amarillo') {
        cambiar.style.background = 'yellow'
        cambiar.style.color = 'red'
    } else if (color.value === 'rosa') {
        cambiar.style.background = 'pink'
        cambiar.style.color = 'white'
    }
})