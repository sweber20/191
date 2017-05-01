var stars = []
var xR = 350
var xT2 = 375
var xTT1 = 400
var xTT2 = 360
var xTT3 = 390

function setup() {
createCanvas(windowWidth,windowHeight);
  for (var i = 0; i < 1; i++) {
    var size = random(5, 10);
    var acc = map(size, 5, 10, 0.1, 0.05);
    stars.push( new Star2(random(width), random(height),  size, acc   ))
}

}


function draw() {

  push();
  background(0);

  pop();

  push()
  fill(32,100,200);
  rect(0, height - 100 ,width, 100);
  pop;


    for (var i = 0; i < stars.length; i++) {
     stars[i].display()
     stars[i].move()

}



}
