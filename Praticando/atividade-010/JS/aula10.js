// Aula 10 Funcoes ou metodos no JS

// Entre parênteses = () - parâmetros 
// Entre chaves = {} - ações

let titulo = document.querySelector('h1')
titulo.textContent = 'Funções no JS'
let box = document.querySelectorAll('box')

// Funcoes sem parametros e sem retorno (procedure)
 function olaMundo(){
    document.write('Olá Mundo sem retorno<br>')
 }

// Funcoes sem paremetros e com retornos (function)
function olaMundo2 (){
   return 'Olá Mundo com retorno<br>'
}
// CHAMAR A FUNCAO = executar ela 
olaMundo()
document.write(olaMundo2())