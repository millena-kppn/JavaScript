// Arquivo JS aula 04 Array

let produtos = ['Arroz', 'Feijão', 'Leite']
var codigos = Array(10, 20, 30)
let meses = ['Jan', 'Fev', 'Mar', 'Abr']

// ▼ Funções com Array ▼

// ADICIONAR no final push = empurre
codigos.push('Açúcar')
codigos.push(40, 50, 60, 70)
codigos.push('Mai', 'Jun', 'Ago', '07')

// REMOVER do final pop = estourar
produtos.pop()
codigos.pop()
meses.pop()

// ADICIONAR no inicio unshift
produtos.unshift('Uva', 'Maça')

// REMOVER do inicio shift
produtos.shift()

// REMOVER de uma posiçõa especifica splice
// spplice = emendar
// posição inicial, quantos remover
codigos.splice(1, 3)

// COPIAR array slice = fatiar porção
// posição inicial, quantos copiar
 let meses1 = meses.slice()
 let meses2 = meses.slice(0,3)

//  VER TAMANHO DO ARRAY length comprimento
// meses.length
// meses1.length
// meses2.length

// spreed operator ... copiar e adicionar 
let teste = [... produtos, 'Ovo', 'Pera']