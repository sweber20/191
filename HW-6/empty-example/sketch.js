  var d_t_button = false;

var x = 100;
var y = 500;
var w = 600;
var h = 100;


function setup() {
  createCanvas(800, 800);

}


function draw() {
  var dotsX = random(0, 800);
  var dotsY = random(0, 800);
  var siz = random(0, 100);
  var col = random(0,300);

  var colt = {
    r: random(1, 300),
    g: random(20, 350),
    b: random(100, 255)

  };
  var col1 = random(250, 300);
  var colo = random (0, 100);
  //ellipse(45, 45, 45, 45);

  if (mouseX > x &&
     mouseX < x+w &&
      mouseY > y &&
       mouseY < y+h &&
        mouseIsPressed) {
          d_t_button = true;
           }

  else {
  d_t_button = false;
  }

  if (d_t_button) {





    background(0);
   stroke(100);

   push();
    fill(colt.r, 0, colt.b, 100);
   ellipse(dotsX, dotsY, siz, siz);
   ellipse(dotsY, dotsX, siz,siz);
   ellipse(siz + 400, siz + 400, dotsY, dotsX);
   ellipse(siz + 400, siz + 400, dotsX, dotsY);
   pop();

   frameRate(3);







  //dotsX = 36 + cos(33) * tan(45);
  //dotsY = ((9/17) % 37);
  //fill(col.r,col.g,col.b, 100);noStroke();ellipse(dotsX + 250, dotsY + 100, lat, vert);
  //ellipse(dotsX + 75, dotsY + 100, lat, vert);






 }
 else {
   background(45, 200, 300);
   stroke(250);
 }



  rect(x, y, w, h);

  text("DONT TOUCH", 100, 600);
  textSize(90);


}
