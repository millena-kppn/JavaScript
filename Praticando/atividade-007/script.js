// Desafio 01
let lutador = 'Fedor Vladimirovich Emelianenko'
let nacionalidade = 'Russo'
let idade = 44
let peso = 106
let altura = 1.83
//para aparecer no navegador usamos ...
document.getElementById("lutador").innerHTML = `${lutador}`
document.getElementById("nacionalidade").innerHTML = `${nacionalidade}`
document.getElementById("idade").innerHTML = `${idade} anos`
document.getElementById("peso").innerHTML = `${peso} Kg`
document.getElementById("altura").innerHTML = `${altura} m`
// Desafio 02
const dia = 10
const mes = 9
const ano = 2021
const texto = "Seja curioso. Leia de tudo. Tente coisas novas. O que as pessoas chamam de inteligência se resume a curiosidade."
const autor = "Aaron Swartz"
//para aparecer no navegador usamos ...
document.getElementById("data").innerHTML = `${dia}/${mes}/${ano}`
document.getElementById("texto").innerHTML = `"${texto}"`
document.getElementById("autor").innerHTML = `${autor}`
// Desafio 03
let meses = ["Janiero", " Fevereiro", " Março"]
//para aparecer no navegador usamos ...
document.getElementById("meses").innerHTML = `${meses}...`
// Desafio 04
let jogo_lol = {
   name : 'League Of Legends - LOL',
   developer : 'Riot Games',
   ano : 2009
}
//para aparecer no navegador usamos ...
document.getElementById("name").innerHTML = `${jogo_lol.name}`
document.getElementById("developer").innerHTML = `${jogo_lol.developer}`
document.getElementById("ano").innerHTML = `${jogo_lol.ano}`



