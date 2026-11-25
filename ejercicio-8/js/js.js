const input = document.getElementById('producto')
const button = document.getElementById('boton')
const lista = document.getElementById('lista')
const aviso = document.getElementById('aviso')

boton.addEventListener('click', function(){
    const texto = input.value.trim()
    if(texto ===""){
        aviso.textContent = 'Escribe un producto'
        return
    }
    aviso.textContent = ''
    const item = document.createElement('li')
    item.textContent =texto
    lista.appendChild(item)

    input.value = ''
    input.focus()
})