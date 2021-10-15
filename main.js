function preload() {

}

function setup() {
   canvas = createCanvas(480,480);
   canvas.position(560,5);
   video = createCapture(VIDEO);
   video.size(550,500);

   poseNet = ml5.poseNet(video, modelLoaded);
   poseNet.on('pose', gotPoses);
}

function modelLoaded() {
   console.log("PoseNet has been initialized!");
}

function draw() {
   background("#269B45");
}

function gotPoses(error,results) {

}