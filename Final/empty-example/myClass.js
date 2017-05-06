


function Gsq(init_X, init_Y, size, color) {
  this.x = init_X;
  this.y = init_Y;
  this.size = size;
  this.color = color;

  // this.alpha =
  // this.buzzer = ellipse(this.x, this.y, 75, 75)
  this.imPressed = false
  this.simonpressed = false



}

Gsq.prototype.frame = function () {
  this.display();
  this.buttonPressed();
  // this.btWhenPressed();
}


Gsq.prototype.display = function () {


push();


if ( this.imPressed || this.simonpressed ){
  fill(255);

} else {
fill(this.color);
}
translate(this.x, this.y);
rect(0, 0, 100,100);

// rect(width / 2 + 400 ,height / 2 - 150 ,100,300);

pop();





};

Gsq.prototype.btWhenPressed = function (){
fill(255)





}

Gsq.prototype.buttonPressed = function (){
  if (
    mouseIsPressed &&
    mouseX > this.x &&
    mouseX < this.x + 100 &&
    mouseY > this.y &&
    mouseY < this.y + 100
  ) {
    // true
    // console.log("button pressed");
    this.imPressed = true
    return true;

  }
  else{
    this.imPressed = false
    return false;
}





}
