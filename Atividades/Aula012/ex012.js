var horaexata = new Date()
var hora = horaexata.getHours() 
console.log(`Agora são ${hora} horas.`)
if (hora <=5){
   console.log('Regula esse sono, vai dormir!')
}
else if(hora < 12){
   console.log('Bom dia')
}else if(hora < 18){
   console.log('Boa tarde!')
}else{
   console.log('Boa noite')
}