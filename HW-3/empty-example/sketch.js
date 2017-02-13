function setup() {

}

function draw() {
  createCanvas(400,400);
  background (100);

  // HEAD
  ellipse( 200, 45, 150, 90);

  // NECK
  rect(175, 90, 45, 45);

  // EYES
  ellipse( 150, 35, 35, 35);
  ellipse( 250, 35, 35, 35);

  // MOUTH
  line(150, 60, 250, 60);

  // NOSE
  triangle(175, 35,205,45,215,35);

  // TORSO
  rect(150, 100, 100,175);

  // ARMS L--->R
  line(20,175,150,175);
  line(250,175,380,175);

  // LEGS L---->R
  line(170, 275, 165, 400);
  line(230, 275, 235, 400);



}
