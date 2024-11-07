let windowWidth = 800;
let windowHeight = 800;
let song, analyser;
let score = 0;
let movingRect1, movingRect2, movingRect3;
let moving = false;

  function windowResized() {
    resizeCanvas(windowWidth, windowHeight);
    draw();
}

function preload() {
    song = loadSound('assets/jazz.mp3');
}

  function setup() {
    createCanvas(windowWidth, windowHeight);
    textAlign(CENTER, CENTER);
    rectMode(CENTER);
    textSize(32); // Move textSize() here

    analyser = new p5.Amplitude();
    analyser.setInput(song);

    dropTime = (height - 100) / 5; //5 is the speed of the notes

    movingRect1 = new Block(0.3 * windowWidth, 0.1 * windowWidth, 0.065 * windowWidth, 0.01 * windowHeight, color(170, 57, 46));
    movingRect2 = new Block(0.45 * windowWidth, 0.4 * windowHeight, 0.06 * windowWidth, 0.01 * windowHeight, color(231, 206, 52));
    movingRect3 = new Block(0.7 * windowWidth, 0.3 * windowHeight, 0.083 * windowWidth, 0.01 * windowHeight, color(60, 88, 151));


  }

  function draw() {
    background(242, 242, 242);

    gameStart();
    drawBackground();
    drawBlock();

    dropBlock();
  }

  function gameStart() {
    background(0);
    textSize(32);
    fill(255);
    text("Press Spacebar to start the game", 0.5 * windowWidth, 0.9 * windowHeight);
  }

  function playMusic() {
    if (song.isPlaying()) {
        song.stop();
    } else {
        song.loop();
    }
}

//   function gameStart() {
//     if (song.isPlaying()) {
//         song.stop();
//     } else {
//         song.loop();
//     }
// }
 
function keyPressed() {
    let keyIndex;
    if (keyCode === 32) {
    moving = !moving;
      playMusic();
    }
  
//     } else if (key === 's') {
//       keyIndex = 0;
//     } else if (key === 'd') {
//       keyIndex = 1;
//     } else if (key === 'f') {
//       keyIndex = 2;
//     }
  
//     if (keyIndex !== undefined ) {
//       activeKey[keyIndex] = true;
//     }
//   }

//   function draw() {
//     background(242, 242, 242);

//     gameStart();
//     drawBackground();
//     drawBlock();
   }
  
  function drawBackground () {
    // flash = flash + 1


    drawScore();
    drawLines();
    drawCircle();
  }

  function drawLines() {
    stroke(231, 206, 52);
    strokeCap(SQUARE)

    // Full Length Horizontal Lines
    let xStarts = [0, 0, 0.85];
    let yPositions = [0.86, 0.95, 0.03];
    let horizontalStrokes = [16, 16, 18];
    let xLength = [1, 1, 0.42];

    for (let i = 0; i < yPositions.length; i++) {
        strokeWeight(horizontalStrokes[i]);
        line(xStarts[i] * windowWidth, windowHeight * yPositions[i], windowWidth * xLength[i], windowHeight * yPositions[i]);

    }

    // Full Length Vertical lines
    let xPositions = [0.04, 0.075, 0.87, 0.91];
    let yStarts = [0, 0.36, 0, 0.15];
    let verticalStrokes = [18, 18, 18, 18];
    let verticalHeight = [0.38, 0.78, 0.35, 0.43];

    for (let i = 0; i < xPositions.length; i++) {
        strokeWeight(verticalStrokes[i]);
        line(windowWidth * xPositions[i], yStarts[i] * windowHeight, windowWidth * xPositions[i], windowHeight * verticalHeight[i]);
    }
  }

    function drawCircle() {
        let rms = analyser.getLevel();

    // Blue Circle
    let bCircleX = [0.08, 0.14];
    let bCircleY = [0.089, 0.73];
    let bCircleR = [0.042, 0.095];
    let bCircleStroke = [8, 18];

     //Flashing effect is inspired by https://editor.p5js.org/doubleshow/sketches/BJdU6tFSM
//     if (flash % 50 === 0) {
//     noFill();
//     stroke(255); //Blue
//    for (let i = 0; i < bCircleX.length; i++) {
 //       strokeWeight(bCircleStroke[i]);
 //       ellipse(bCircleX[i] * windowWidth, bCircleY[i] * windowHeight, bCircleR[i] * windowWidth);
    
// }
//     else {
    noFill();
    stroke(60, 88, 151); //Blue
    for (let i = 0; i < bCircleX.length; i++) {
        strokeWeight(bCircleStroke[i]);
        ellipse(bCircleX[i] * windowWidth, bCircleY[i] * windowHeight, bCircleR[i] + rms * windowWidth);
    }
   // }

 // Red Circle
    let rCircleX = [0.098, 0.83, 0.885];
    let rCircleY = [0.46, 0.45, 0.3];
    let rCircleR = [0.068, 0.065, 0.04];
    let rCircleStroke = [16, 6, 11];

//     if (flash % 20 === 0) {
//     noFill();
//     stroke(255);  //Red
//     for (let i = 0; i < rCircleX.length; i++) {
//         strokeWeight(rCircleStroke[i]);
//         ellipse(rCircleX[i] * windowWidth, rCircleY[i] * windowHeight, rCircleR[i] * windowWidth);
//     }
//   } else {
    noFill();
    stroke(170, 57, 46);  //Red
    for (let i = 0; i < rCircleX.length; i++) {
        strokeWeight(rCircleStroke[i]);
        ellipse(rCircleX[i] * windowWidth, rCircleY[i] * windowHeight, rCircleR[i] + rms * windowWidth);
    }
  // }

    // Yellow Circle
    let yCircleX = [0.11, 0.86, 0.88];
    let yCircleY = [0.25, 0.1, 0.68];
    let yCircleR = [0.075, 0.1, 0.096];
    let yCircleStroke = [18, 18, 14];

//     if (flash % 15 === 0) {
//     noFill();
//     stroke(255);  //Yellow
//     for (let i = 0; i < yCircleX.length; i++) {
//         strokeWeight(yCircleStroke[i]);
//         ellipse(yCircleX[i] * windowWidth, yCircleY[i] * windowHeight, yCircleR[i] * windowWidth);
//     }
//   } else {
    noFill();
    stroke(231, 206, 52);  //Yellow
    for (let i = 0; i < yCircleX.length; i++) {
      strokeWeight(yCircleStroke[i]);
      circle(yCircleX[i] * windowWidth, yCircleY[i] * windowHeight, yCircleR[i] + rms * windowWidth);
      fill(170, 57, 46);
      circle(yCircleX[i] * windowWidth, yCircleY[i] * windowHeight, yCircleR[i] + rms * windowWidth);
    }
  }
 // }

  function drawBlock() {

    console.log ('drawblock');
    noStroke();
    fill(170, 57, 46); //Red
    rect(0.3 * windowWidth, 0.1 * windowHeight, 0.07 * windowWidth, 0.11 * windowHeight);
    fill(231, 206, 52); //Yellow
    rect(0.45 * windowWidth, 0.45 * windowHeight, 0.06 * windowWidth, 0.22 * windowHeight);
    fill(60, 88, 151); //Blue
    rect(0.7 * windowWidth, 0.26 * windowHeight, 0.09 * windowWidth, 0.16 * windowHeight);
  }

  function drawScore () {
    fill(255);
    textSize(32);
    text(`Score: ${score}`, width / 2, 60);
  }

  //dropBlock() is by ChatGPT, so that the rectangles doesn't drop in a pile. However, the reason why the rectangle did not drop as desired is also because I did not define the background.
  //I still decided to keep this code because it is cleaner and I like the effect better than the one I did before.
  function dropBlock() {

    if (moving) {
      movingRect1.show();
      movingRect1.move();
  
      movingRect2.show();
      movingRect2.move();
  
      movingRect3.show();
      movingRect3.move();
  } else {
      movingRect1.show();
      movingRect2.show();
      movingRect3.show();
  }
  }
  
  class Block {
    constructor(x, y, width, height, colorVal) {
      this.x = x;
      this.y = y;
      this.width = width;
      this.height = height;
      this.colorVal = colorVal;
      this.yspeed = random(3,5) //yspeed;
      this.initialY = y;
    }
  
    show() {
      fill(this.colorVal);
      rect(this.x, this.y, this.width, this.height);
  }
  
    move() {
        this.y += this.yspeed;
        if (this.y > 0.86 * windowHeight) {
            this.y = this.initialY;
        }
    }
  }