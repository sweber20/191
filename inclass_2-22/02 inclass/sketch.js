var result;
var textPos_X;
var textPos_Y;
function setup() {
  createCanvas(800,600);
  textPos_X = width * 0.5;
  textPos_Y = height * 0.5;
  frameRate(2);
}
var ex = 0;
var expos = ex;

result = 200;
  function draw() {
    // modulo is the remainder of long division

    //ellipse(ex,textPos_Y,20,20);
  //ex += 10;
  //expos = ex % width;
//  ex += 0.01;
  //result = ceil ( ex );


    //result = result / denom;
    background(40, 70, 245);
    textSize(36);
    fill(255);

    text(result, textPos_X, textPos_Y);






}
