function setup() {
  createCanvas(500, 500);
    background(247, 253, 242);
      // fill(240, 0, 198);
        // stroke(0, 255, 0);
          // strokeWeight(16);


          // The head
          // push()
          translate(250, 250);
            ellipse(0, 0, 300, 120);
              fill(0, 255, 0);




            translate(0, -30);
            ellipse(-20, 0, 30, 20);
            ellipse(20, 0, 30, 20);
            // pop()

            // the mouth
            push();
            line(-80, 40, 80, 20);
            pop();

            // the nose
            push();
            triangle(0, -30, 0, 10, 50, 40);


      // fill(0, 0, 198);
        // stroke(0, 0, 0);
          // strokeWeight(16);
            // ellipse(250, 250, 300, 120);

      // fill(0, 100, 0);
        // stroke(0, 0, 150);
          // strokeWeight(16);
            // ellipse(350, 350, 300, 120);



}
