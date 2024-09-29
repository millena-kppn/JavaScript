function verificar(){
  var data = new Date()
  var ano = data.getFullYear()
  var fano = window.document.getElementById('txtano')
  var res = window.document.getElementById('res')
  
  if (fano.value.length == 0 || Number(fano.value) > ano){
   window.alert('[ERRO] Verifique os dados e tente novamente!')
  }
   else{
    var fsex = window.document.getElementsByName('radsex')
    var idade = ano - Number(fano.value)
    var genero = ''
    var img = document.createElement('img')
    img.setAttribute('id','foto')
    // confg para homens 
    if (fsex[0].checked){
    genero = 'Homem'
   if (idade >= 0 && idade <10){
    // criança
    img.setAttribute('src','imgs/bebe-homen.png')
   }else if (idade >= 10 && idade < 21){
    // jovem
    img.setAttribute('src','imgs/jovem-homen.png')
   }else if(idade < 50){
   // adulto
   img.setAttribute('src','imgs/adulto-homen.png')
   }else{
    // idoso
    img.setAttribute('src','imgs/senhor-homen.png')
   }
    // confg para mulheres
   }else if(fsex[1].checked){
    genero = 'Mulher'
    if (idade >= 0 && idade <10){
      // criança
      img.setAttribute('src','imgs/bebe-mulher.png')
     }else if (idade >= 10 && idade < 21){
      // jovem
      img.setAttribute('src','imgs/jovem-mulher.png')
     }else if(idade < 50){
     // adulto
     img.setAttribute('src','imgs/adulta-mulher.png')
     }else{
      // idoso
      img.setAttribute('src','imgs/senhora-mulher.png')
     }
   }
   res.innerHTML = `Detectamos um(a) ${genero} com ${idade} anos.`
   res.appendChild(img)
  }
}