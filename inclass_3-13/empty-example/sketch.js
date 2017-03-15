



function setup() {
  createCanvas(800,600);
  background(34, 131, 157);


var size_w = random(20,80);
var size_h = random (20, 80);

  dude = {

    loc_x: random(width),
    loc_y: random(height),
    body_color: color(147, 56, 143),
    size_w: random(48),
    size_h: random(60),
    eye_x: this.size_w * 0.165,
    eye_y: this.size_h * 0.33 * -1,
    eye_size: this.size_W * 0.25


  };

}






function display() {



push();

translate(this.loc_x, this.loc_y);

fill(this.body_color);

fill(255);

ellipse(0, 0, this.size_w, this.size_h);

ellipse(-this.eye_x, this.eye_y, this.eye_size, this.eye_size);
ellipse(this.eye_x, this.eye_y, this.eye_size, this.eye_size);

pop();



}



function draw() {
  dude.display();


}
