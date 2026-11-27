const tarea = document.getElementById('tarea')
const seleccion = document.getElementById('seleccion')
const agregar = document.getElementById('agregar')
const lista = document.getElementById('lista')
const aviso = document.getElementById('aviso')
const contador = document.getElementById('contador')

let pendientes = 0

agregar.addEventListener('click', function() {
    const texto = tarea.value.trim()
    const prioridad = seleccion.value

    if (texto === '' || prioridad === '') {
        aviso.textContent = 'Escribe la tarea y elige una prioridad'
        return
    }

    aviso.textContent = ''

    const item = document.createElement('li')
    item.textContent = texto + ' - Prioridad: ' + prioridad + ' '

    const botonCompletar = document.createElement('button')
    botonCompletar.textContent = 'Completar'
    item.appendChild(botonCompletar)

    botonCompletar.addEventListener('click', function () {
        item.style.textDecoration = 'line-through'
        botonCompletar.disabled = true
        pendientes = pendientes - 1
        contador.textContent = 'Tareas pendientes: ' + pendientes
    })

    lista.appendChild(item)

    pendientes = pendientes + 1
    contador.textContent = 'Tareas pendientes: ' + pendientes

    tarea.value = ''
    seleccion.value = ''
    tarea.focus()
})