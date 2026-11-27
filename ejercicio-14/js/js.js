const inicial = document.getElementById('inicial')
const nombreGasto = document.getElementById('nombre-gasto')
const gasto = document.getElementById('gasto')
const boton = document.getElementById('boton')
const lista = document.getElementById('lista')
const aviso = document.getElementById('aviso')

const resumenInicial = document.getElementById('resumen-inicial')
const resumenGastado = document.getElementById('resumen-gastado')
const resumenRestante = document.getElementById('resumen-restante')
const superado = document.getElementById('superado')

let totalGastado = 0

boton.addEventListener('click', function() {
    const nombre = nombreGasto.value.trim()
    const valor = Number(gasto.value)

    if (inicial.value === '') {
        aviso.textContent = 'Escribe tu presupuesto inicial'
        return
    }
    if (nombre === '' || gasto.value === '' || valor <= 0) {
        aviso.textContent = 'Escribe el nombre y un valor válido para el gasto'
        return
    }

    aviso.textContent = ''

    const item = document.createElement('li')
    item.textContent = nombre + ': ' + valor
    lista.appendChild(item)

    totalGastado = totalGastado + valor
    actualizarResumen()

    nombreGasto.value = ''
    gasto.value = ''
    nombreGasto.focus()
})

inicial.addEventListener('input', function () {
    actualizarResumen()
})


function actualizarResumen() {
    const presupuesto = Number(inicial.value)
    const restante = presupuesto - totalGastado

    resumenInicial.textContent = presupuesto
    resumenGastado.textContent = totalGastado
    resumenRestante.textContent = restante

    if (restante < 0) {
        resumenRestante.style.color = 'red'
        superado.textContent = 'Has superado tu presupuesto'
        superado.style.color = 'red'
    } else {
        resumenRestante.style.color = 'black'
        superado.textContent = ''
    }
}