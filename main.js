function preload(){
    console.log("screen width is - "+screen.width);
}
function setup(){
    step1 = screen.width/2;
    step2 = step1 - 150;
    canvas = createCanvas(300,300);
    canvas.position(step2,400);

    video = createCapture(VIDEO);
    video.size(300,300);
    video.hide();
}
function draw(){
    image(video,0,0,300,300);
}