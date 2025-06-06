"use strict"
window.onload = function () {
   let valorDeUsuario = prompt("Digite um valor entre 0 e 10.")
   let nota = Number(valorDeUsuario)//convertendo string para número
   for(let i = 1; i <= 10; i++) {
      if (nota < 0 || nota > 10 || isNaN(nota)) {
         // window.prompt("Nota invalida!")
         console.log("Nota invalida!")
      } else {
         console.log("Nota valida!")
         // window.prompt("Nota valida!")
      }
   }
}