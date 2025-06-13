const mario = document.querySelector(".mario")
const pipe = document.querySelector(".pipe")

const jump = () => {
  mario.classaList.remove("jump");

  setTimeout(() => { 
       mario.classList.remover("jump");
  }
    ,500);
}

const loop = sentIntervall(() => {
const pipePosition = pipe.offsetLeft;
const marioPosition = +window.getComputedStyle(mario).bottom.replace("px","");

  if (pipePosition <= 120 && pipePosion > 0 && marioPositon < 80) {
      pipe.style.animation = "none";
      pipe.style.left = ${pipePosition}px ;

      mario.style.animation = "none";
      mario.style.left = ${pipePosition}px ;
   }   
})
document.addEventListener("keydow", jump);
