const clave = document.getElementById('clave')
const resultado = document.getElementById('resultado')

clave.addEventListener('input', function(){
    const longitud = clave.value.length;
    if (longitud < 6){
        resultado.textContent = 'Contraseña muy corta'
        resultado.style.color = 'red'
    } else if
        (longitud < 10){
        resultado.textContent = 'Contraseña aceptable'
        resultado.style.color = 'yellow'
    }else {
        resultado.textContent = 'Contraseña fuerte'
        resultado.style.color = 'green'}
})