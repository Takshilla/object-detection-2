img = "";

status = "";

function preload(){

img = loadImage("IMG-2887.jpg");

}

function setUp(){

canvas = createCanvas(640, 420);
canvas.center();
objectDetector = ml5.objectDetector('cocossd', modelLoaded);
document.getElementById(status).innerHTML = "Status : Detecting Object...";

}

function modelLoaded(){
    console.log("Model Loaded.");
    status = true;
    objectDetector.detect(img, gotResult);
}

function gotResult(error, results){

    if(error){
        console.error(error);
    }

    else{
        console.log(results);
    }
}