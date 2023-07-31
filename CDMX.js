

function setup() {
    canvas = createCanvas(640, 420);
    canvas.center();
    image.size(640,420);
    objectDetector=ml5.objectDetector("cocossd",modelloaded);
    document.getElementById("h3").innerHTML="Estatus: Detectando Objetos :D"
}