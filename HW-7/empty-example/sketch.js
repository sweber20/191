var dude = {

//head
  // fill_1: color(200, 100, 100),
  // head:   ellipse( 200, 45, 150, 90),
  // neck: rect(175, 90, 45, 45),
  //
  // el
  //


};


function setup() {

}

function draw() {
  createCanvas(1000,1000);
  background (180,28,146);

  jeff();

  jeff2();

  // HEAD
  // push();
  // fill(200,100,100);
  // ellipse( 200, 45, 150, 90);
  //
  // // NECK
  // rect(175, 90, 45, 45);
  // pop();
  //
  // // EYES
  // ellipse( 150, 35, 35, 35);
  // ellipse( 250, 35, 35, 35);
  // push();
  // fill(42,36,15);
  // rect(239, 21, 20, 20);
  // rect(139, 21, 20, 20);
  // pop();
  //
  // // MOUTH
  // line(150, 60, 250, 60);
  //
  // // NOSE
  // triangle(175, 35,205,45,215,35);
  //
  // // TORSO
  // fill(100,100,300);
  // rect(150, 100, 100,175);
  //
  // // ARMS L--->R
  // line(20,175,150,175);
  // line(250,175,380,175);
  //
  // // LEGS L---->R
  // line(170, 275, 165, 400);
  // line(230, 275, 235, 400);



}

function jeff() {

  push();
  fill(200,100,100);
  ellipse( 200, 45, 150, 90);

  // NECK
  rect(175, 90, 45, 45);
  pop();

  // EYES
  ellipse( 150, 35, 35, 35);
  ellipse( 250, 35, 35, 35);
  push();
  fill(42,36,15);
  rect(239, 21, 20, 20);
  rect(139, 21, 20, 20);
  pop();

  // MOUTH
  line(150, 60, 250, 60);

  // NOSE
  triangle(175, 35,205,45,215,35);

  // TORSO
  fill(100,100,300);
  rect(150, 100, 100,175);

  // ARMS L--->R
  line(20,175,150,175);
  line(250,175,380,175);

  // LEGS L---->R
  line(170, 275, 165, 400);
  line(230, 275, 235, 400);






}


function jeff2() {

  fill(0);
  ellipse( 800, 45, 150, 90);

  // NECK
  rect(775, 90, 45, 45);
  pop();

  // EYES
  ellipse( 750, 35, 35, 35);
  ellipse( 850, 35, 35, 35);
  push();
  fill(42,36,15);
  rect(839, 21, 20, 20);
  rect(739, 21, 20, 20);
  pop();

  // MOUTH
  line(750, 60, 850, 60);

  // NOSE
  triangle(775, 35,805,45,815,35);

  // TORSO
  fill(0);
  rect(750, 100, 100,175);

  // ARMS L--->R
  line(620,175,750,175);
  line(850,175,980,175);

  // LEGS L---->R
  line(770, 275, 165, 400);
  line(830, 275, 235, 400);




}
