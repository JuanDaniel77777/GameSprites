window.addEventListener("load", function(){


const canvas = document.getElementById('canvas1');
const ctx = canvas.getContext('2d');

const CANVAS_WIDTH = canvas.width = 600;
const CANVAS_HEIGHT = canvas.height = 600;

const playerImage = new Image();
playerImage.src = 'shadow_dog.png';

let frameX = 0;
let frameY = 0;
let frame = 0;
let repetitions = 6;
let timemove = 5;
let time = 0;
let back = false;

let x = 0;
let y = 0;

const spriteWidth = 575;
const spriteHeight = 523;

//Animaciones del perrito las cuales son 10, pero su inicializacion es desde la posicion 0 al 9
function animateTwo(key) {
    switch (key.toLowerCase()) {
        case 't':
            frameY = 0;
            repetitions = 6;
            break;
        case 'q':
            frameY = 1;
            repetitions = 6;
            break;
        case 'w':
            frameY = 2;
            repetitions = 6;
            break;
        case 'e':
            frameY = 3;
            repetitions = 8;
            break;
        case 'f':
            frameY = 4;
            repetitions = 10;
            break;
        case 'r':
            frameY = 5;
            repetitions = 4;
            break;
        case 'a':
            frameY = 6;
            repetitions = 6;
            break;
        case 's':
            frameY = 7;
            repetitions = 6;
            break;
        case 'd':
            frameY = 8;
            repetitions = 11;
            break;
        case 'g':
            frameY = 9;
            repetitions = 3;
            break;
    }
}

//en este windows.addEventListener lo que realiza es tener interaccion con el usuario desde el teclado
window.addEventListener('keydown', e => {
    console.log(e.key);
    animateTwo(e.key);
})

function animate() {
    ctx.clearRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);
    ctx.drawImage(playerImage, frameX * spriteWidth, frameY * spriteHeight,
        spriteWidth, spriteHeight,
        0, 0, spriteWidth, spriteHeight);
        if (time == timemove) {
            frameX++;
            timemove += 5;
        }
        time++;
        if (x > 499) {
            back = true;
        }
        if (x == 0) {
            back = false;
        }
        if (back) {
            x--;
        } else {
            x++;
        }
    if (frameX < repetitions) frame++;
    else frameX = 0;
    
    requestAnimationFrame(animate);
}

animate();
})