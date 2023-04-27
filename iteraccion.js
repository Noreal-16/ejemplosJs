let pantala = document.querySelector("canvas");
let pincel = pantala.getContext('2d');
pincel.fillStyle = "lightgray";
pincel.fillRect(0, 0, 600, 400);

function alerta(evento) {
    let x = evento.pageX - pantala.offsetLeft;
    let y = evento.pageY - pantala.offsetLeft;
    console.log(x + " " + y)
    alert("Dio click")

}

function dibujarCirculo(evento) {
    let x = evento.pageX - pantala.offsetLeft;
    let y = evento.pageY - pantala.offsetLeft;

    pincel.fillStyle = "blue"
    pincel.beginPath();
    pincel.arc(x,y,10,0,2*3.14)
    pincel.fill();
    console.log(x + " " + y)

}

pantala.onclick = dibujarCirculo;