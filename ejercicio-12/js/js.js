const numero = document.getElementById('numero')
const boton = document.getElementById('boton')
const resultado = document.getElementById('resultado')

boton.addEventListener('click', function(){
    resultado.innerHTML = ''
    if (numero.value === ''){
        resultado.textContent = 'Por favor escriba un número'
        return
    }

    const n = Number (numero.value)

    for (let i = 1; i<= 10; i++) {
        const linea = document.createElement('p')
        linea.textContent = n + 'x' + i + '=' + (n * 1)
        resultado.appendChild(linea)
    }
})