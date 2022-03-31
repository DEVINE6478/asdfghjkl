video="";
status="";

function setup()
{
    canvas=createCanvas(480, 380);
    canvas.center();
    video.hide();
}

function preload()
{
  video=createVideo('video.mp4');


}

function draw()
{
    image(video,0,0,480,380);

}

function start()
{
 objectDetetor=ml5.objectDetetor('cocossd',modelLoaded);
 document.getElementById("status").innerHTML="status:detectingObjects";
}