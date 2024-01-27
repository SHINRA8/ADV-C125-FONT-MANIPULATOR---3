NameX=0;
NameY=0;

function setup(){
    video = createCapture(VIDEO);
    video.size(550,500)

    canvas = createCanvas(550,550)
    Canvas.position(560,150)

    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotPoses);
}

function modelLoaded(){
    console.log('PoseNet Is initialized!')
}

function gotPoses(results){
    if(result.length > 0)
    {
        console.log(results);
        NameX = results[0].pose.Name.X;
        NameY = results[0].pose.Name.Y;
        console.log("NameX = " + NameX +"NameY = " + NameY);
    }
}
function draw()
{
    background('#969A97');
    fill('#F90093');
    stroke('#F90093');
    square(NameX, NameY, 100);
}

function textSize()
{
    text(your_name, 10, 50)
    
}