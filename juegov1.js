let pantala = document.querySelector("canvas");
let pincel = pantala.getContext('2d');
pincel.fillStyle = "lightgray";
pincel.fillRect(0, 0, 600, 400);


function diseniarCircunferencia(x, y, radio) {
    pincel.fillStyle = 'blue'
    pincel.beginPath();
    pincel.arc(x, y, radio, 0, 2 * Math.PI)
    pincel.fill()
}

function clearWindow() {
    pincel.clearRect(0, 0, 600, 400)
}

let x = 0;
let direccion = 1

function actualizarPantalla() {
    clearWindow()
    if (x > 600) {
        direccion= -1;
    } else if (x < 0) {
        direccion = 1;
    }
    diseniarCircunferencia(x, 20, 10)
    x = x + direccion


}
setInterval(actualizarPantalla, 10)


