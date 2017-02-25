function setup() {

  createCanvas(600,700);

  //Variables to define elipse position
  var ellipseSize;

}
var posY = 100;
var posX = 100;

function draw()
{


// display current frame rate in the sketch

background(200, 40, 6);
  var currFrameRate;
  currFrameRate = frameRate();
  //text(currFrameRate, 100, 100);
  text(mouseX, 200, 180);


  //update posX everyframe
  //ellipse(posX, posY, 30, 30);

  posX = posX + 1;
  posY = posY + 1;


}
