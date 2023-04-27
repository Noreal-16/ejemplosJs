let pantala = document.querySelector("canvas");
let pincel = pantala.getContext('2d');
pincel.fillStyle = "lightgray";
pincel.fillRect(0, 0, 600, 400);
let radio = 10;
let xaleatorio;
let yaleatorio;


function diseniarCircunferencia(x, y, radio, color) {
    pincel.fillStyle = color
    pincel.beginPath();
    pincel.arc(x, y, radio, 0, 2 * Math.PI)
    pincel.fill()
}

function clearWindow() {
    pincel.clearRect(0, 0, 600, 400)
}

let x = 0;
let direccion = 1

function alearotio(maximo) {
    return Math.floor(Math.random() * maximo)
}





function actualizarPantalla() {
    clearWindow()
    if (x > 600) {
        direccion = -1;
    } else if (x < 0) {
        direccion = 1;
    }
    xaleatorio = alearotio(600)
    yaleatorio = alearotio(400)
    diseniarObjetivo(xaleatorio, yaleatorio)
    x = x + direccion
}


function diseniarObjetivo(x, y) {
    diseniarCircunferencia(x, y, radio + 20, "red")
    diseniarCircunferencia(x, y, radio + 10, "white")
    diseniarCircunferencia(x, y, radio, "red")
}



setInterval(actualizarPantalla, 1000)

function disparar(evento) {
    let x = evento.pageX - pantala.offsetLeft;
    let y = evento.pageY - pantala.offsetTop

    if ((x < xaleatorio + radio) &&
        (x > xaleatorio - radio) &&
        (y < yaleatorio + radio) &&
        (y > yaleatorio - radio)) {
        alert("tiro sertero")
    }

}

pantala.onclick = disparar