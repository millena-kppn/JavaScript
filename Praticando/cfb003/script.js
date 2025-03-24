"use strict"
function teste(){
   let nome = "melancia"
   nome = "banana"
   if (true){
      console.log("Dentro do IF de teste " + nome)
   }
   console.log(`Dentro de teste ${nome}`)
}
teste()
//a VAR pode ser acessada de qualquer forma mesmo dentro de um escopo
//o LET so pode ser acessado dentro do propio escopo onde foi criada, ou para cima em diante...
// VAR end LET seus valores podem ser alterados, já a CONST não 