  var bool = true;



function setup() {


  createCanvas(400, 400);
  frameRate(2);






}

function draw() {


  background(255);


// if statement is true, do everything between the mustache brackets
  if (!bool) {
    text("this was true!!", 40, 40);
  } else {
    text("NOOOOOOO", 80, 80);
  }
// "!" this means not
  bool = !bool;
//more operators "<" ">" for less than or greater than
//two equal signs "==" is equal to
//3 vertical equal signs (not these)"===" is equal and same

}
