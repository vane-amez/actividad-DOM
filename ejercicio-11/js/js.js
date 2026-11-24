const formulario = document.getElementById('formulario')
const nombre = document.getElementById('name')
const correo = document.getElementById('email')
const edad = document.getElementById('edad')

const errorNombre = document.getElementById('error-name')
const errorCorreo = document.getElementById('error-email')
const errorEdad = document.getElementById('error-edad')
const exito = document.getElementById('exito')

formulario.addEventListener('submit', function (evento) {
    evento.preventDefault()

    errorNombre.textContent = ''
    errorCorreo.textContent = ''
    errorEdad.textContent = ''
    exito.textContent = ''
    let todoCorrecto = true

    if (nombre.value.trim() === "") {
        errorNombre.textContent = '¡Escribe tu nombre!'
        todoCorrecto = false
    }
    if (correo.value.trim() === "") {
        errorCorreo.textContent = '¡Escribe tu correo!'
        todoCorrecto = false
    }
    else if (!correo.value.includes('@')) {
        errorCorreo.textContent = '¡Escribe un correo válido!'
        todoCorrecto = false
    }
    if (edad.value.trim() === "") {
        errorEdad.textContent = '¡Escribe tu Edad!'
        todoCorrecto = false
    }
    else if (Number(edad.value) < 18) {
        errorEdad.textContent = '¡Debes tener 18 años o más!'
        todoCorrecto = false
    }
    if (todoCorrecto) {
        exito.textContent = '¡Registro completado correctamente!'
        formulario.reset()
    }
})