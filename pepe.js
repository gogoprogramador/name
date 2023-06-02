
narizx=0;
narizy=0;

bocacracketsuda=""
cabello=""
function preload () {
    bocacracketsuda=loadImage ("rata.png")
    cabello=loadImage("cabello_payasudo.png")
}

function setup () {
    canvas=createCanvas (300,300);
canvas.center ();
video=createCapture(VIDEO);
video.size(300,300);
video.hide()
poseNet=ml5.poseNet(video,modelocargado)
poseNet.on ("pose",gotposes)

}

function modelocargado() {
console.log ("poseNet esta inicialisado")
}

function gotposes(result) {
    if(result.length>0) {
        console.log (result) 
        narizx=result[0].pose.nose.x;
        narizy=result[0].pose.nose.y;
    }
}

function draw() {
    image(video,0,0,300,300)
    fill("red")
    circle (narizx,narizy,40)
    image(bocacracketsuda,narizx-60,narizy-20,120,115)
    image(cabello,narizx-100,narizy-200,200,200)
}

function take_snapshot () {
    save("nose.png")
}