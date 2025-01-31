let conteudo = document.querySelector('#conteudo')
// no conteudo não há função
let neutra = document.querySelector('#neutra')
let on = document.querySelector('#on')
let off = document.querySelector('#off')
// criando funções
on.addEventListener('click', ligar)
off.addEventListener('click', desligar)
function ligar(){
   conteudo.classList.add('ligar')
   conteudo.classList.remove('desligar')
   neutra.style.opacity = 0
}
function desligar(){
   conteudo.classList.add('desligar')
   conteudo.classList.remove('ligar')
   neutra.style.opacity = 0
}
