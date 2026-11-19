let numero = 0;

const contador = document.getElementById('contador')
const suma = document.getElementById('suma')
const restablecer = document.getElementById('restablecer')

suma.addEventListener('click', function () {
    numero += 1
    contador.innerText = numero
    if (numero >= 10) {
        contador.style.color = 'green'
    }
});

restablecer.addEventListener('click', function () {
    numero = 0
    contador.innerText = numero
    contador.style.color = 'black'
})