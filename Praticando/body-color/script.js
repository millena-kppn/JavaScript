// criar uma variavel para o body e os dois botoes 
let body = document.querySelector('#pagina')

let light = document.querySelector('#bt-light')

let dark = document.querySelector('#bt-dark')
// criar uma funtion para os botoes
light.addEventListener('click', modolight)

dark.addEventListener('click', mododark)

function modolight(){
    body.classList.add('light')
    body.classList.remove('dark')
}
function mododark(){
    body.classList.add('dark')
    body.classList.remove('light')
}