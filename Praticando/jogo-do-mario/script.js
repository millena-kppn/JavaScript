const mario = document.querySelector(".mario")
const pipe = document.querySelector(".pipe")
const jump = () =>{
mario.classList.add("jump")
setTimeout(() => {
   mario.classList.remove("jump")
}, 500)
}

const loop = setInterval(() =>{
const pipePosittion = pipe.offsetLeft
const marioPosittion = +window.getComputedStyle(mario).bottom.replace("px", " ")

if (pipePosittion <= 120 && pipePosittion > 0 && marioPosittion < 80){
   pipe.style.animation = "none"
   pipe.style.left = `${pipePosittion}px`

   mario.style.animation = "none"
   mario.style.bottom = `${marioPosittion}px`

   mario.src = "./imgs/game-over.png"
   mario.style.width = "75px"
   mario.style.marginLeft = "45px"
   clearInterval(loop)
}
},10)



document.addEventListener("keydown", jump)