// Arquivo JS aula 07 DOM

// DOM = Document Object Model
// Arvore com elemento desde o Browser, a Janela do Browser, o Documento e cada elemento html que forma os conteudos.

// navigator
// window
// location
// document -> html -> head e body history
// td isso é um objeto que pode ser acessado pela linguagem de programação - ex: JS

// PARA MANIPULAR O DOM PRECISAMOS
// indicar qual objeto usar, depois chamar 
// um método(função) para selecionar ele, seus dados, trazer 
// informações, etc.

// .querySelector()
// selecionar elemento com base na tag, #id ou .clas
let titulo = document.querySelector('h1')
// com esse exemplo criamos uma variavel para armazenar o resultado da execusão para manipular o resultado 

// .textContent
// propiedade ou atributo textContent
// serve para acessar ou alterar conteudo de um elemento que foi selecionado
// console.log(titulo.textContent)
// console.log(titulo.innerHTML)

titulo.textContent = 'DOM'
// console.log(titulo.textContent)
