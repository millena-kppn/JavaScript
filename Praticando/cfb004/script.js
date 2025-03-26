"use strict"
//APROFUNDANDO CONCEITOS DE OPERADORES ARITMÉTICOS
let num1 = 0, num2 = 0, res = 0;// criação de três variaveis na mesma linha
num1 = 5;
num2 = 10;
num1 += 1;// igual a num++ (sempre irá adicionar mais 1), podemos fazer com números negativos (num--)
num2++// igual a num +=1 (sempre irá adicionar mais 1), podemos fazer com números negativos (num -= 1)
res = num1 + num2;
console.log(res);
let res2 = 0, res3 = 0, res4 = 0, res5 = 0;
res2 = num2 - num1;
res3 = num1 * num2;
res4 = num2 / num1;
res5 = num2 % num1;
console.log(res2);
console.log(res3);
console.log(res4 + " operação de divisão com número quebrado");
console.log(res5 + " operação de divisão com número inteiro")
