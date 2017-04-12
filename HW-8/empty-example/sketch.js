var stars = []
var xR = 350
var xT2 = 375
var xTT1 = 400
var xTT2 = 360
var xTT3 = 390

function setup() {
createCanvas(windowWidth,windowHeight);
  for (var i = 0; i < 50; i++) {
    var size = random(5, 10);
    var acc = map(size, 5, 10, 0.1, 0.05);
    stars.push( new Star(random(width), random(height),  size, acc   ))
}
}


function draw() {

  push();
  background(0);
  fill(32, 55, 108);
  rect(xR,200, 50, 200);
  xR += random(-0.5, 0.5);

  pop();

  push();
  fill(255);
  triangle(xR,200,xTT1,200,xT2,150);
    // xR += random(-1, 1);
    // xTT1 += random(-1, 1);
    // xT2 += random(-1, 1);
  pop();

  push();
  fill(200,20,20);
  triangle(xT2, 400,xTT2, 450,xR,400);
  triangle(xT2, 400,xTT3, 450,xTT1,400);
  // xR += random(-1, 1);
  // xTT1 += random(-1, 1);
  // xT2 += random(-1, 1);
  // xTT2 += random (-1, 1);

  pop();


    for (var i = 0; i < stars.length; i++) {
     stars[i].display()

}



}
