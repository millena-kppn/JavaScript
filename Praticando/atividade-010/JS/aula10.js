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
olaMundo()//fechamento da função 
document.write(olaMundo2())//fechamento da função e colocando a informação de escrita na tela 

let x = 2
let y = 1
let mensagem = "A pratica leva a perfeição!"

//Funcoes com parametros e sem retorno 
// (precedure)
function somar(a, b){
   document.write((a + b) + "<br>")
}

//Funcoes com paremetros e com retorno 
// (function)
function somar2(c, d){
   return c + d
}
//CHAMAR A FUNCAO = executar ela 
somar(x, y)
document.write(somar2(10, 5))

//Funcao anonima:
//nao precisa usar a palavra function 
//nao precisa usar a palavra return 
//nao precisa colocar { } = cahaves se for so uma instrusao - sequencia de comandos 

let button = document.getElementById("button")
button.addEventListener('click' , function
   () {
      console.log("Você clicou no botão! Nele há uma função anonima.")
   })

//Arrow function 
const olaMundoArrow = () => console.log("Olá mundo! Teste com Arrow function.")
//Acima criei uma função anonima diretamente com uma variavel 
olaMundoArrow()//execução dela 
