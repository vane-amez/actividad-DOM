const nombre = document.getElementById('nombre')
const foto = document.getElementById('foto')
const profesion = document.getElementById('profesion')

const tarjetanombre = document.getElementById('tarjetanombre')
const tarjetafoto = document.getElementById('tarjetafoto')
const tarjetaprofesion = document.getElementById('tarjetaprofesion')

const FOTO_POR_DEFECTO = tarjetafoto.src

nombre.addEventListener('input', function(){
    tarjetanombre.textContent = nombre.value || 'Tu nombre:'
});
foto.addEventListener('input', function(){
    tarjetafoto.src = foto.value || FOTO_POR_DEFECTO
});
profesion.addEventListener('input', function(){
    tarjetaprofesion.textContent = profesion.value || 'Tu profesión:'
});
tarjetafoto.addEventListener('error', function(){
    tarjetafoto.src = FOTO_POR_DEFECTO
})