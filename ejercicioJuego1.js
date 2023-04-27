let pantala = document.querySelector("canvas");
let pincel = pantala.getContext('2d');
pincel.fillStyle = "lightgray";
pincel.fillRect(0, 0, 600, 400);
const colors = ['blue', 'red', 'green']
let indicadorCOlor = 0


function dibujarCirculo(evento) {
    let x = evento.pageX - pantala.offsetLeft;
    let y = evento.pageY - pantala.offsetLeft;

    pincel.fillStyle = colors[indicadorCOlor]
    pincel.beginPath();
    pincel.arc(x,y,10,0,2*3.14)
    pincel.fill();
    console.log(x + " " + y)

}

pantala.onclick = dibujarCirculo;


function alterarColor() {
    indicadorCOlor++;
    if (indicadorCOlor>=colors.length) {
        indicadorCOlor = 0
    }
    return false
}

pantala.oncontextmenu = alterarColor;