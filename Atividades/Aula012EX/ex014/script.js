function carregar(){
   var msg = window.document.getElementById('msg')
   var imagem = window.document.getElementById('imagem')
   var data = new Date()
   var hora = data.getHours()
   var minutos = data.getMinutes()
   msg.innerText = `Agora são ${hora} horas e ${minutos} minutos.`
   if(hora >= 0 && hora < 12){
      // Bom dia!
      imagem.src = "./imgs/foto-manha-redonda.png"
      document.body.style.background = '#DAA25E'
   } else if(hora >= 12 && hora < 18){
      // Boa tarde!
      imagem.src = "./imgs/foto-tarde-redonda.png"
      document.body.style.background = '#9DC7BD'
   }else {
      // Boa noite!
      imagem.src = "./imgs/foto-noite-redonda.png"
      document.body.style.background = '#20161E'
   }
}
// obs: o caminho das imgs sempre tmq estar corretos