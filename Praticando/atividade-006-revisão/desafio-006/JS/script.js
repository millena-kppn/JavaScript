// informações
let lutador = 'Fedor Vladmirovich Emelianenko'
let nacionalidade = 'Russo'
let idade = 44
let peso = 106
let altura = 1.83
// para aparecer no navegador ...
document.write('<h2>Informações</h2>') 
document.write('Lutador: ' + lutador + '<br>')
document.write('Nacionalidade: ' + nacionalidade + '<br>')
document.write('Idade: ' + idade + ' anos <br>')
document.write('Peso: ' + peso + ' Kg <br>')
document.write('Altura: ' + altura + 'm')
// frase do dia 
const num1 = 10
const num2 = 9
const num3 = 2021
// para aparecer no navegador ...
document.write('<h2>Frase do dia</h2>')
document.write(`${num1}/${num2}/${num3} <br>`)
document.write('Seja curioso!Leia de tudo! Tente coisas novas. O que as pessoas chamam de inteligência se resume a curiosidade.<br>Aaron Swart')
// array de meses do ano
let messes = ["Janeiro", " Fevereiro", " Março"]
// para aparecer no navegador ...
document.write('<h2>Array com Meses do Ano</h2>')
document.write(`${messes}`)
// objeto jogo
const jogo_lol = {
   jogo: 'League Of Legends - LOL',
   desenvolvido: 'Riot Games',
   ano: 2009
}
// para aparecer no navegador ...
document.write('<h2>Objeto Jogo</h2>')
document.write(`Jogo: ${jogo_lol.jogo} <br> Desenvolvido por: ${jogo_lol.desenvolvido} <br> Ano do Lançamento: ${jogo_lol.ano}`)