let pantala = document.querySelector("canvas");
let pincel = pantala.getContext('2d');
pincel.fillStyle = "lightgray";
pincel.fillRect(0, 0, 600, 400);

function dibujarCirculo(x, y, radio, color) {

    pincel.fillStyle = color;
    pincel.beginPath();
    pincel.arc(x, y, radio, 0, 2*3.14);
    pincel.fill();
}

dibujarCirculo(300,200,5,'yellow')
dibujarCirculo(310,200,5,'green')
dibujarCirculo(290,200,5,'blue')
dibujarCirculo(300,210,5,'gray')
dibujarCirculo(300,190,5,'black')