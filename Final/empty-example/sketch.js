//things i still need:
//resize to fit window
//sounds?
//title


var bt1 = []
var buttColors = ['rgba(255, 227, 20, 200)', 'rgba(255, 62, 137, 200)', 'rgba(30, 215, 0, 200)', 'rgba(255, 63, 33, 200)'];
var placeholder = [];
var simonsTurn = true;
var correctPress = false;
var simonNum = -1;
var gameOver = false
var score = 0


function setup() {
  createCanvas(windowWidth,windowHeight);
  for (var i = 0; i < 4; i++) {
    var size = random(5, 10);
    // var acc = map(size, 5, 10, 0.1, 0.05);
    // bt1.push( new Gsq(i *200 + 50, 300, size, buttColors[i]))
  }

  bt1.push( new Gsq(200, 200, size, 'rgba(255, 227, 20, 200)'))
  bt1.push( new Gsq(300, 200, size, 'rgba(255, 62, 137, 200)'))
  bt1.push( new Gsq(200 , 300, size, 'rgba(30, 215, 0, 200)'))
  bt1.push( new Gsq(300, 300, size, 'rgba(255, 63, 33, 200)'))
  placeholder.push(floor(random(4)));
}


function draw() {

  push();
  background(0);
  // frameCount()
  pop();


  // execute simons turn
  if (simonsTurn) {

    background(255)
    for (var i = 0; i < bt1.length; i++) {
      bt1[i].frame()
    }

    // execute players turn
  } else {

    for (var i = 0; i < bt1.length; i++) {
      bt1[i].frame()


      console.log("button: " + placeholder[simonNum]);
      if (bt1[i].buttonPressed() && i == placeholder[simonNum]){
        correctPress = true;
        console.log(i + ' - correct press');
      }


    }

    stroke(0,255,0);
    text(placeholder.length, 50, 50);


    //  if (gameOver)
    // if (!correctPress)
    // {
    //   score = 0
    //   placeholder.lenth = 0
    // }
  }

  if (frameCount %  120 == 0){

    background(255);

    if (!simonsTurn) {

      if ( correctPress) {
        simonNum++
        console.log(simonNum);
        correctPress = false
        console.log("Keep Going: " + simonNum);
      } else {
        gameOver = true;
        console.log("Game Over");
      }
    }

    console.log("why")
    console.log(placeholder)
    console.log(simonNum)

    if (gameOver) {
      placeholder = [];
      simonsTurn = true;

      gameOver = false;
      // simonpressed = true
      simonNum = -1
      addsquare()
    } else {
      if (simonNum >= 0 && simonNum < placeholder.length && simonsTurn) {
        bt1[placeholder[simonNum]].simonpressed = false;
      }
      simonNum = ( simonNum + 1 );
      if (simonNum >= 0 && simonNum < placeholder.length && simonsTurn) {
        bt1[placeholder[simonNum]].simonpressed = true;
      }
      console.log(simonNum)
      if (simonNum >= placeholder.length && simonsTurn) {
        simonsTurn = false;
        simonNum = 0;
      }

      else if (simonNum>= placeholder.length && !simonsTurn && !gameOver) {
        simonsTurn = true;
        simonNum = -1;
        addsquare()
      }
    }

  }


}


function addsquare(){
  placeholder.push(floor(random(4)))
}
