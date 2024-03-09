const mario = document.querySelector('.mario');
const pipe = document.querySelector('.pipe');

const jump = () => {

    if (event.keyCode === 32) {

        mario.classList.add('jump');

        setTimeout(() => {

            mario.classList.remove('jump');

        }, 500);
    }
}

const loop = setInterval(() => {

    const pipePosition = pipe.offsetLeft;
    const marioPosition = +window.getComputedStyle(mario).bottom.replace('px', '')

    console.log(marioPosition)

    if (pipePosition <= 120 && pipePosition > 0 && marioPosition < 80) {

        pipe.style.animation = 'none'
        pipe.style.left = `${pipePosition}px`

        mario.style.animation = 'none'
        mario.style.bottom = `${marioPosition}px`

        mario.src = '/images/game-over.png'
        mario.style.width = '75px'
        mario.style.marginLeft = '50px'

        alert('você perdeu o jogo!')
        
        clearInterval(loop)
    }

}, 10);

document.addEventListener('keydown', jump)
const reset = document.getElementById('button').addEventListener("click", resetPagina)

function resetPagina() {
    alert('recomeçando o jogo.')
    window.location.reload()
}

const easy = document.getElementById('button-easy').addEventListener("click", modoEasy)
const medium = document.getElementById('button-medium').addEventListener("click", modoMedium)
const hard = document.getElementById('button-hard').addEventListener("click", modoHard)

function modoEasy(){
    pipe.style.animation = "1.5s"
    alert('o jogo foi alterado para o modo facil')
}

function modoMedium(){
    pipe.style.animation = "1s"
    alert('o jogo foi alterado para o modo medio')
}

function modoHard(){
    pipe.style.animation = "0.7s"
    alert('o jogo foi alterado para o modo dificil')
}