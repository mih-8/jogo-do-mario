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
