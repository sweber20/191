//var randy = random(0);
  var dotsX = random(0, 400);
  var dotsY = random(0, 400);
  var glob = {


  x: 25,
  y: 150
};



function setup() {
  createCanvas(400, 400);
  background(180);

}


function draw() {
    //col.r = 0;
  //  col.g = random(0,100);
  //  co.b = random(0,300);

  var col = {
    r: random(1, 67),
    g: random(20, 350),
    b: random(100, 255)
  };
  var vert = random(0, 100);
  var lat = random(0, 100);

  //EYES
  push();
    dotsX = 36 + cos(33) * tan(45);
    dotsY = ((9/17) % 37);
  fill(col.r,col.g,col.b, 100);
  noStroke();
  ellipse(dotsX + 250, dotsY + 100, lat, vert);
  ellipse(dotsX + 75, dotsY + 100, lat, vert);
  dotsX = dotsX + 22 * 6;
  dotsY = dotsY * 345 ^ 4;
  frameRate(0.75);
  //cos(67);
  //tan(45)
  pop();

  //mouth
  push();
  noStroke();
  fill(col.r,col.g,col.b, 100);
  rect(50,250, 300, 100);

  pop();

  push();
  fill(70,245,45,60);
  rect(50, 250, 300, 25);
  rect(50, 325, 300, 25);
  pop();
}
