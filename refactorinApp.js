function drawScuard(x, y, w, z, color) {
    let pantala = document.querySelector("canvas");
    let pincel = pantala.getContext('2d');
    pincel.fillStyle = color
    pincel.fillRect(x, y, w, z)

}

drawScuard(0, 0, 50, 50, "green");
drawScuard(50, 0, 50, 50, "red");
drawScuard(100, 0, 50, 50, "yellow");

for (let index = 0; index < 600; index = index + 50) {
    drawScuard(index, 50, 50, 50, "blue");
}

let scuard = 0;

while (scuard < 600) {
    drawScuard(scuard, 100, 50, 50, "yellow");
    scuard = scuard + 50;
}