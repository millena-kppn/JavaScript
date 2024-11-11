// Arquivo JS aula 05 Objetos
// CRIAR OBJETO
let pessoa = { // nesse caso meu objeto eh pessoa e meus atributos/propiedades são: nome,idade,peso...
   nome  : 'Millena',
   idade : 20,
   peso  : 51,
   altura: 1.68,
   doador: false,
}

// Para separar atributos/propiedades sempre usamos virgulas (,)

let produtos = { // entre chaves vamos informar cada elemento que irá compor nosso objeto 
   descricao : [], //Array vazio
   preco : [],    //Array vazio
}

const carros = {
   marca : ['Ford', 'Fiat', 'GM'],
   modelo : ['Ka', 'Uno', 'Corsa'],
   ano : [1999,2005,2010]
}

// ACESSAR PROPRIEDADE usando ponto (.)
/* pessoa.nome
   pessoa.idade
   pessoa.peso
   pessoa.altura
 */

   //ACESSAR PROPRIEDADE usando ['']
/* pessoa['nome']
   pessoa['idade']
   pessoa['peso']
   pessoa['altura']
 */

   //OPERAÇÃO IMC = peso / (altura * altura)
   let imc = pessoa.peso / (pessoa.altura * pessoa.altura)

   //.toFixed() - Limita o número de casas decimais
   console.log('imc' + imc.toFixed(2)) 
   