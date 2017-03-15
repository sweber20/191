
  //create an empty array
  var myArray = [];



  var numArray = ["HA", "JS", ":)"];

function setup() {
  createCanvas(windowWidth, windowHeight);
  background(230, 240, 200);

  textSize(56);
  text("myArray:" + myArray, 20, 80);
  text("numArray:" + numArray [2], 20, 200);

  numArray[1] = "mikey" ;

}


function draw() {
  drawPerson();
  for (var i = 0; i < width/ 6; i ++);
    drawPerson(i*(width/6), random(0,height));




}

  function drawPerson(x, y) {
    var pos_x = x;
    var pos_y = y;
    var person_width = 80;
    var person_height = 200;

    //draw the person

    push();

    translate(pos_x, pos_y);

    rectMode(CENTER);
    fill(0, 10, 244);
    rect(0, -person_height * 0.5, person_width, person_height );



  }
