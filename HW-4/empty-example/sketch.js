function setup() {

}


  var mercer = 1;

function draw() {


  var prototype = 0;
  createCanvas(400, 400);
  prototype = mouseX;
  background (prototype * 2/3);


// MISC independant movement

  frameRate(60);
// HEAD

  push();
  fill(200, 100, 100);
  ellipse(mercer, 45, 150, 90);
  mercer = (mercer + 10) % width;
  pop();


// EYES
  ellipse( 150, mouseY , 35, 35);
  ellipse( 250, mouseY, 35, 35);
  push();
  fill(42,36,15);
  rect(239, 21, 20, 20);
  rect(139, 21, 20, 20);
  pop();

// MOUTH
  line(mouseX, 60, 250, 60);

// NOSE
  triangle(175, 35,205,45,215,35);


// ARMS L--->R
  line(25,35,125,45);
  line(275,45,375,35);

// LEGS L---->R
  line(190, 90, 175, 200);
  line(210, 90, 235, 200);

  ellipse(200, 250, width, 25);


}
