// Revisão de conceitos 

// comentario em linha 

/* comentario em bloco
*/

// criar variaveis use let ou ver
let produto = 'Arroz'
let quant = 2
let precoUnitario = 4.99
let precoTotal = quant * precoUnitario

// para aparecer no navegador usamos ...
document.write(`Preço Total R$ ${precoTotal} <br> <hr>`)

/* exemplo para formatação para valor monetario 
exemplo padrão brasileiro = (,) para decimal e (.) para casas de milhar*/
console.log(new Intl.NumberFormat('pt-BR').format(precoTotal))

// outro exemplo mais interessante 

document.write(`Preço Total ${precoTotal.toLocaleString('pt-BR', {style:'currency', currency: 'BRL'})} <hr>`)

// criar constante = (valores fixos)
const nome = 'Millena Kappaun'
const peso = 51.5
const altura = 1.68
const imc = peso / (altura * altura)
 
// para aparecer no navegador usamos ...
document.write(`IMC: ${imc} <br> <hr>`)
// outra forma que usamos como exemplo podemos fixar o valor de casas decimais (toFixed(x))
document.write(`IMC: ${imc.toFixed(2)} <br> <hr>`)

// concatenação (+)
let nota1 = 7.5
let nota2 = 5.5
let nota3 = 4.0
let notaFinal = nota1 + nota2 + nota3
// para aparecer no navegador usamos ...
document.write("Nota Final " + notaFinal + '<br> <hr>')

// cálculo
let compra = 1999.99
let desconto = 145.42
let compraComDesconto = compra - desconto
// para aparecer no navegador usamos ...
document.write(compraComDesconto.toLocaleString('pt-BR', {style: 'currency', currency:'BRL'}) + '<br> <hr>')



