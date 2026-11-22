const pregunta = document.getElementById('pregunta')
const resultado = document.getElementById('resultado')
const lista = document.getElementById('lista')

pregunta.addEventListener('keydown', function (evento) {
    if (evento.key === 'Enter') {
        const textoTarea = pregunta.value.trim();
        if (textoTarea !== "") {
            resultado.textContent = 'Nueva tarea';
            const nuevaTarea = document.createElement('li');
            nuevaTarea.textContent = textoTarea;
            lista.appendChild(nuevaTarea);
            pregunta.value = '';
        } else {
            resultado.textContent = "Por favor agrega una nueva tarea"
        }
    }
})