var button = window.document.getElementById('botao')
button.addEventListener('click', res)
function res(){
   var resposta = window.document.getElementById('resposta')
   var curiosidades = window.document.getElementsByTagName('p')[1]
   // criando a tag img com id pelo js
   var img = document.createElement('img')
   img.setAttribute('id', 'foto')
   if((resposta.value) == 'gato'){  //toda vez q temos um input com caixa de valor colocamos assim: (var.value)
   curiosidades.innerHTML = 'Os gatos têm um cérebro mais similar ao<br>do humano do que ao do cão.'
   img.setAttribute('src','imgs/cat-ft.png')
   }else if((resposta.value) == 'cachorro'){
   curiosidades.innerHTML = 'O nariz de cada cachorro é único, assim<br> como a impressão digital dos humanos.'
   img.setAttribute('src','imgs/dog-ft.png')
   }else{
   curiosidades.innerHTML = '[ERRO]Resposta não Identificada.'
   }
   curiosidades.appendChild(img) // é um método que adiciona um novo elemento ao DOM, ou seja, expande o DOM criando um filho para um elemento já existente
   }






         
         
         
         
         
