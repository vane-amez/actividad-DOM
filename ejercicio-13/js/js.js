const grande = document.getElementById('grande')
const imagen1 = document.getElementById('imagen1')
const imagen2 = document.getElementById('imagen2')
const imagen3 = document.getElementById('imagen3')
const titulo = document.getElementById('titulo')

imagen1.addEventListener('click', function (){
    quitarActivas()
    imagen1.classList.add('activa')
    grande.src = './img/1.png'
    titulo.textContent = 'Imagen 1'
})

imagen2.addEventListener('click', function (){
    quitarActivas()
    imagen2.classList.add('activa')
    grande.src = './img/2.png'
    titulo.textContent = 'Imagen 2'
})

imagen3.addEventListener('click', function (){
    quitarActivas()
    imagen3.classList.add('activa')
    grande.src = './img/3.jpg'
    titulo.textContent = 'Imagen 3'
})

function quitarActivas(){
    imagen1.classList.remove('activa')
    imagen2.classList.remove('activa')
    imagen3.classList.remove('activa')

}