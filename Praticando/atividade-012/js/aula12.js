/*Aula 12 de JS Estruturas 
Condicionais e de Escolha */
let sit1 = document.querySelector('#sit1')
let sit2 = document.querySelector('#sit2')
let sit3 = document.querySelector('#sit3')
let escolha = document.querySelector('#escolha')

let notafinal1 = 3 
let notafinal2 = 8
let notafinal3 = 5

//CONDICIONAIS 
//IF 
if (notafinal1 >= 7){
    sit1.textContent = "Aprovado"
}

//IF and ELSE 
if (notafinal1 >= 7){
    sit1.textContent = "Aprovado"
}else{
    sit1.textContent = "Reprovado"
}

//IF ENCADEADO ou ANINNHADO 
if (notafinal1 >= 7){
    sit3.textContent = "Aprovado"
}else if(notafinal3 <= 3){
    sit3.textContent = "Reprovado"
}else{
    sit3.textContent = "Recuperação"
}

//ESCOLHA CASO 
let situacao = " "
// let situacao = "Aprovado"
// let situacao = "Reprovado"
// let situacao = "Recuperação"

switch(situacao){
    case "Aprovado" : 
    escolha.textContent = "Passou de Ano"
    break
    case "Reprovado" :
    escolha.textContent = "NÃO passou de ano"
    break
    case "Recuperação" : 
    escolha.textContent = "Ainda tem uma chance"
    break
    default:
        escolha.textContent = "Estude"
        //default nao precisa de break
}