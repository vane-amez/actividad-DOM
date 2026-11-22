function saludar() {
    const respuesta = document.getElementById("respuesta").value
    const resultado = document.getElementById("resultado")

    if (respuesta === "") {
        resultado.textContent = "Por favor, escribe tu nombre.";
    } else {
        resultado.textContent = "¡Hola " + respuesta + "¡ Bienvenida"
    }
}