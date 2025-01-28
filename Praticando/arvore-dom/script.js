// para mudar o valor no elemento, tag, propiedade, etc.. 
// buscamos ele atraves da seleção, acessando a arvore dom
// criamos uma variaevel para armazenar a informação e começamos atribuir ...
let fruteira = document.querySelectorAll('p')
fruteira[0].textContent = 'Morango'
fruteira[1].textContent = 'Banana'
fruteira[2].textContent = 'Maça'
fruteira[3].textContent = 'Abóbora'
fruteira[4].textContent = 'Feijão'
fruteira[5].textContent = 'Repolho'
// estilizando
// seleciono a variavel chamo o metodo atraves do . (ponto) e faço atribuição a um valor 
fruteira[4].style.color='red'
// para atribuir um texto de obs sobre o Feijão
document.write('Não, o feijão é um legume, e não uma verdura')
// chamar um atributo e na mesma linha atribuir o css
document.querySelector('h2').style.color = '#CD853F'
// fundo do elemento na posição [0]
fruteira[0].style.backgroundColor = "pink";
// fundo do id #conteudo
document.querySelector('#conteudo').style.backgroundColor= '#B0C4DE'
// estilizando com class criada no JS
let estilo_frutas = document.querySelector('#frutas')
estilo_frutas.setAttribute('class','fruta')
// mais um exemplo
let estilo_verduras = document.querySelector('#verduras')
estilo_verduras.setAttribute('class', 'verduras')
// mudar cor da página com botões
let fundo = document.querySelector('#principla_pag')
let dark = document.querySelector('#bt_dark')
let light = document.querySelector('#bt_light')
// registrar a manipulção a espera de um evento
bt_dark.addEventListener('click', modo_dark)
bt_light.addEventListener('click', modo_light)
// determinando a função 
function modo_dark(){
   fundo.classList.add('dark')
   fundo.classList.remove('light')
}
function modo_light(){
   fundo.classList.add('light')
   fundo.classList.remove('dark')
}
