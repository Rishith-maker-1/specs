erX=0;
erY=0;

function preload() {
  specs = loadImage('image.png');
}

function setup() {
  canvas = createCanvas(300, 300);
  canvas.center();
  video = createCapture(VIDEO);
  video.size(300, 300);
  video.hide();

  poseNet = ml5.poseNet(video, modelLoaded);
  poseNet.on('pose', gotPoses);
}

function modelLoaded() {
  console.log('started');
}

function draw() {
    image(video, 0, 0, 300, 300);
    image(specs, erX, erY, 80, 30);
  }

function gotPoses(results)
{
    if(results.length > 0)
    {
    console.log(results);
    erX = results[0].pose.rightEye.x-15;
    erY = results[0].pose.rightEye.y-15;
    }
}

function take_snapshot(){    
  save('filtered.png');
}