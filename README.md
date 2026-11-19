DOM y eventos en JavaScript
Estos ejercicios están ordenados de menor a mayor dificultad. Todos se pueden realizar con HTML, CSS y JavaScript, sin backend.

Trabajarás eventos como click, input, change, keydown, submit, mouseenter y mouseleave.

En lugar de keypress, se recomienda usar keydown, porque es el evento actual más confiable para detectar teclas.

1. Saludo personalizado
Objetivo
Tomar el nombre escrito por una persona y saludarla en la misma página.

Interfaz mínima
Un input para escribir el nombre.
Un botón Saludar.
Un párrafo vacío para mostrar el resultado.
Comportamiento esperado
Cuando la persona escriba su nombre y presione el botón, el programa debe leer lo que hay dentro del input y reemplazar el párrafo vacío por un saludo. Por ejemplo, si escribe María, debe ver: ¡Hola, María! Bienvenida. Si intenta saludar sin escribir nada, la página debe indicarle amablemente que primero escriba un nombre.

2. Contador de clics
Objetivo
Contar cuántas veces se ha presionado un botón.

Interfaz mínima
Un número visible que inicia en 0.
Un botón Sumar clic.
Un botón Reiniciar.
Comportamiento esperado
Cada vez que se presione Sumar clic, el número mostrado debe aumentar de uno en uno. El botón Reiniciar debe devolver el contador a cero. La idea es que el usuario vea inmediatamente que una acción en la página puede cambiar información visible.

Reto extra
Cuando llegue a 10 clics, pintar el número de verde.

3. Vista previa de texto
Objetivo
Mostrar, mientras se escribe, el mismo texto en otro lugar de la página.

Interfaz mínima
Un input o textarea.
Un título o párrafo vacío debajo.
Comportamiento esperado
No debe ser necesario presionar un botón. A medida que el usuario escriba una frase, el texto de abajo debe actualizarse letra por letra. Si borra una letra, también debe desaparecer de la vista previa. Esto simula, por ejemplo, la vista previa de una publicación en una red social.

4. Cambiador de color
Objetivo
Cambiar el color de fondo de una tarjeta según una opción elegida.

Interfaz mínima
Una tarjeta con título y texto.
Un select con opciones: azul, verde, amarillo y rosa.
Comportamiento esperado
Al elegir un color en la lista, la tarjeta debe cambiar de fondo de inmediato. El texto de la tarjeta no debe desaparecer ni cambiar: solo se modifica su apariencia. Si se elige otro color después, debe reemplazar el anterior.

5. Mensaje al presionar Enter
Objetivo
Mostrar una tarea cuando el usuario termine de escribirla y presione Enter.

Interfaz mínima
Un input con el texto de ayuda Escribe una tarea.
Un área para el resultado.
Comportamiento esperado
La persona escribe una tarea, por ejemplo Estudiar JavaScript, y luego presiona Enter. En ese instante debe aparecer el mensaje Nueva tarea: Estudiar JavaScript. Después de mostrarla, el input debe quedar vacío para que pueda escribir una nueva tarea. Si presiona otra tecla, no debe pasar nada especial.

6. Calculadora de IMC
Objetivo
Calcular el índice de masa corporal con el peso y la estatura ingresados.

Interfaz mínima
Input numérico para peso en kilogramos.
Input numérico para estatura en metros.
Botón Calcular IMC.
Un espacio para mostrar el resultado.
Fórmula
imc = peso / (estatura * estatura);
Comportamiento esperado
Al escribir, por ejemplo, 70 kilogramos y 1.75 metros, y presionar el botón, la página debe calcular y mostrar: Tu IMC es 22.86. Antes de calcular, debe revisar que ambos campos tengan números válidos. Si falta uno de los datos, debe explicarle al usuario qué dato necesita completar.

Reto extra
Cambiar el color del resultado según el rango de IMC que definan en clase.

7. Verificador de contraseña
Objetivo
Dar una pista visual sobre la longitud de una contraseña mientras se está escribiendo.

Interfaz mínima
Un input de tipo password.
Un texto de ayuda debajo.
Reglas
Menos de 6 caracteres: Contraseña muy corta.
Entre 6 y 9: Contraseña aceptable.
10 o más: Contraseña fuerte.
Comportamiento esperado
El mensaje debe cambiar mientras el usuario escribe, sin que tenga que presionar un botón. Si borra caracteres, el mensaje debe volver al estado correspondiente. A cada estado se le puede asignar un color: rojo para corta, amarillo para aceptable y verde para fuerte.

8. Lista de compras
Objetivo
Agregar productos escritos por el usuario a una lista visible.

Interfaz mínima
Input para escribir un producto.
Botón Agregar.
Una lista <ul> vacía.
Comportamiento esperado
Cuando el usuario escriba Pan y presione Agregar, debe aparecer un nuevo elemento en la lista que diga Pan. Si luego escribe Leche, la lista debe conservar Pan y agregar Leche debajo; no debe reemplazar el primer producto. Después de agregar, el input debe quedar listo para escribir otro producto.

Reto extra
No permitir productos vacíos y mostrar el aviso dentro de la página, no con una alerta del navegador.

9. Tarjeta de perfil en vivo
Objetivo
Actualizar una tarjeta de perfil al llenar un formulario.

Interfaz mínima
Input para nombre.
Input para profesión.
Input para URL de una foto.
Una tarjeta con imagen, nombre y profesión.
Comportamiento esperado
La tarjeta debe iniciar con datos de ejemplo, como Tu nombre y Tu profesión. Cuando el usuario escribe información, esos textos deben cambiar inmediatamente en la tarjeta. Si añade una URL válida de imagen, la foto de la tarjeta debe cambiar también. El objetivo es que vea cómo un formulario puede controlar otro elemento del HTML.

10. Semáforo interactivo
Objetivo
Simular un semáforo utilizando botones.

Interfaz mínima
Tres círculos que representen las luces.
Tres botones: rojo, amarillo y verde.
Un mensaje de estado.
Comportamiento esperado
Al presionar Rojo, solo debe iluminarse el círculo rojo y debe aparecer el mensaje Detente. Al presionar Amarillo, solo se ilumina esa luz y se muestra Precaución. Con Verde, se ilumina el círculo verde y aparece Puedes avanzar. Las luces anteriores deben apagarse cuando se active una nueva.

11. Formulario de registro con validación
Objetivo
Revisar los datos de un formulario antes de aceptarlo.

Interfaz mínima
Input para nombre.
Input para correo.
Input para edad.
Botón Registrarme dentro de un <form>.
Reglas
Ningún campo puede estar vacío.
El correo debe incluir @.
La edad debe ser mayor o igual a 18.
Comportamiento esperado
Cuando se presione Registrarme, la página no debe recargarse. Debe revisar cada campo y mostrar el error justo donde corresponde. Por ejemplo: Escribe un correo válido debajo del correo. Si todo está correcto, debe ocultar los errores y mostrar un mensaje de éxito, como Registro completado correctamente.

12. Generador de tabla de multiplicar
Objetivo
Crear en pantalla la tabla de multiplicar de un número.

Interfaz mínima
Input numérico.
Botón Generar tabla.
Un contenedor para los resultados.
Comportamiento esperado
Si el usuario escribe 5, la página debe mostrar desde 5 × 1 = 5 hasta 5 × 10 = 50. Si después escribe 8 y vuelve a generar, debe desaparecer la tabla del 5 y mostrarse únicamente la del 8. Antes de generar, debe confirmar que el usuario escribió un número.

Reto extra
Mostrar los resultados dentro de una tabla HTML con filas y columnas.

13. Galería de imágenes con miniaturas
Objetivo
Cambiar una imagen principal al hacer clic en una miniatura.

Interfaz mínima
Una imagen grande.
Tres o más miniaturas.
Un título para la imagen seleccionada.
Comportamiento esperado
Cada miniatura debe representar una imagen diferente. Cuando el usuario haga clic sobre una, la imagen grande debe cambiar para mostrar la seleccionada y el título debe actualizarse. La miniatura elegida debe verse diferente de las demás para que sea claro cuál está activa.

Reto extra
Agregar una clase CSS activa a la miniatura seleccionada y quitarla de las otras.

14. Calculadora de presupuesto
Objetivo
Registrar gastos y saber cuánto dinero queda.

Interfaz mínima
Input para presupuesto inicial.
Input para nombre del gasto.
Input numérico para valor del gasto.
Botón Agregar gasto.
Lista de gastos y resumen.
Comportamiento esperado
El usuario primero escribe cuánto dinero tiene disponible. Luego agrega gastos como Transporte y 5000. Cada gasto debe quedar guardado en una lista con su nombre y valor. Al mismo tiempo, el resumen debe mostrar el presupuesto inicial, el total gastado y el dinero restante. Si agrega varios gastos, todos deben afectar el resultado final.

Reto extra
Si el dinero restante es negativo, pintarlo de rojo y mostrar Has superado tu presupuesto.

15. Gestor de tareas con estado
Objetivo
Crear una pequeña aplicación para registrar y completar tareas.

Interfaz mínima
Input para una tarea.
Select de prioridad: baja, media y alta.
Botón Agregar tarea.
Lista de tareas.
Contador de tareas pendientes.
Comportamiento esperado
Al agregar una tarea, la lista debe mostrar su nombre, prioridad y un botón Completar. El contador debe aumentar cuando llega una tarea nueva. Al hacer clic en Completar, esa tarea debe verse tachada o con otro estilo y el contador de pendientes debe disminuir. La tarea no desaparece: permanece como evidencia de que fue terminada.

Retos extra
Agregar botón Eliminar.
Mostrar un mensaje al pasar el mouse sobre una tarea.
Permitir mostrar solo las tareas pendientes o solo las completadas.