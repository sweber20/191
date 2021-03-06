


function Star(init_X, init_Y, size, acc) {
  this.x = init_X;
  this.y = init_Y;
  this.size = size;
  this.velocity = {x: 0, y: 0}
  this.speed = 2
  this.maxSpeed = map(acc, 0.1, 0.05, 50, 30);
  this.acceleration = acc

}

Star.prototype.display = function () {


push()
translate(this.x,this.y);
fill(255);
  ellipse( 0,  0, this.size , this.size );


  this.velocity.y += this.acceleration
  this.y = this.y + this.velocity.y;
  if (this.y >height) {
    this.y = 0;
    this.x =  random(width);


}
if (this.velocity.y > this.maxSpeed) {
  this.velocity.y = this.maxSpeed;
  this.acceleration = -this.acceleration
}

this.velocity.y = constrain(this.velocity.y, 0.01, this.maxSpeed);

pop()



};
