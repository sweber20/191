


function Star2(init_X, init_Y, size, acc) {
  this.x = init_X;
  this.y = init_Y;
  this.size = size;
  this.velocity = {x: 0, y: 0}
  this.speed = 2
  this.maxSpeed = map(acc, 0.1, 0.05, 50, 30);
  this.acceleration = acc
  this.canMove = true

}

Star2.prototype.display = function () {


push();
translate(this.x,this.y);
fill(255);
  ellipse( 0,  0, this.size , this.size );
  fill(20,180,200);
pop();
}


  Star2.prototype.move = function () {


   if (this.canMove){
   this.velocity.y += this.acceleration

  this.y = this.y + this.velocity.y;
   if (this.y >height - 100) {
//     this.y = 0;
  this.velocity.y = 0
  this.canMove = false

//
//
}
if (this.velocity.y > this.maxSpeed) {
  this.velocity.y = this.maxSpeed;
  this.acceleration = -this.acceleration
}



 if (this.y >= height) {
     this.y = height - this.velocity.y;
     this.velocity.y *= -1;
 } else if (this.y <= 0) {
     this.y = 1 + this.velocity.y;
     this.velocity.y *= -1;
 }

this.velocity.y = constrain(this.velocity.y, 0.01, this.maxSpeed);



}


};
