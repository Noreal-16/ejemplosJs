let canva = document.querySelector("canvas");
let pincel = canva.getContext('2d');

pincel.fillStyle = "white";
pincel.fillRect(0,0,600,400)

pincel.fillStyle = 'darkgreen'
pincel.fillRect(100, 50, 350,300);

pincel.fillStyle = 'black'
pincel.fillRect(150, 100, 90, 90)
pincel.fillRect(309, 100, 90, 90)
pincel.fillRect(240, 190, 70, 100)
pincel.fillRect(200, 240, 40, 110)
pincel.fillRect(309, 240, 40, 110)


