function saludar() {
    var respuesta = document.getElementById("respuesta").value
    var resultado = document.getElementById("resultado")

    if (respuesta === "") {
        resultado.textContent = "Por favor, escribe tu nombre.";
    } else {
        resultado.textContent = "¡Hola " + respuesta + "¡ Bienvenida"
    }
}