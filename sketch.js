// Declare variables
let windowWidth = 800;
let windowHeight = 800;
let song, analyser;
let flash = 0;
let score = 0;
let movingRect1, movingRect2, movingRect3;
let moving = false;
let showGame = true;
let startPress = false;
let hitLine = false;
let keyIndex = -1;
let scoreIncrement = false;
let pageIndex = 0;
let gameRun = false;

  function windowResized() {
    resizeCanvas(windowWidth, windowHeight);
    draw();
}

function preload() {
    song = loadSound('assets/jazz.mp3');
    img = loadImage('assets/p3.jpg');
}

  function setup() {
    createCanvas(windowWidth, windowHeight);
    textAlign(CENTER, CENTER);
    rectMode(CENTER);
    textSize(32); 

    analyser = new p5.Amplitude();
    analyser.setInput(song);

    //Droping Blocks
    movingRect1 = new Block(0.28 * windowWidth, 0.1 * windowWidth, 0.065 * windowWidth, 0.01 * windowHeight, color(170, 57, 46), random(3, 5));
    movingRect2 = new Block(0.45 * windowWidth, 0.4 * windowHeight, 0.06 * windowWidth, 0.01 * windowHeight, color(231, 206, 52), random(3));
    movingRect3 = new Block(0.7 * windowWidth, 0.3 * windowHeight, 0.083 * windowWidth, 0.01 * windowHeight, color(60, 88, 151), random(2, 5));

    //Change page index when song ends
    song.onended(() => {
        pageIndex++;
    });


  }

  function draw() {
    background(255);

    // Determine which page to show according to the page index
    if (pageIndex === 0) {
        pageOne();
    } else if (pageIndex === 1) {
        pageTwo();
    } else {
        pageThree();
    }
 }

 //Calling all functions in each page
    function pageOne() {
        background(255);
        gameStart();
        drawScore();
        drawLines();
        drawCircle();
        drawBlock();
        dropBlock();
        stroke(170, 57, 46);
        hitBlock(keyIndex);
  }

  function pageTwo() {

    if (!song.isPlaying()) {
        song.play();
    }

    background(0);
    fill(255);
    noStroke();
    text("s              d                    f ", 0.49 *windowWidth, 0.9 * windowHeight);
    drawScore();
    drawLines();
    drawSquare();
    drawBlock();
    dropBlock();
    stroke(255);
    hitBlock(keyIndex);
  }

  function pageThree() {
    image(img, 0, 0);
    noStroke();
    textSize(32);
    text(`Final score:`, 0.39 * windowWidth, 0.26 * windowHeight);
    text(`${score}`, 0.72 * windowWidth, 0.77 * windowHeight);
  }

  //A function to load first page
  function gameStart() {
    textSize(32);
    fill(60, 88, 151);
    noStroke();
    if (showGame) {
    text("Press Spacebar to start/pause game", 0.5 * windowWidth, 0.9 * windowHeight); 
} else if (startPress) {
    text("s              d                    f ", 0.49 *windowWidth, 0.9 * windowHeight);
  }
} 

function drawScore() {
    textSize(32);
    text(`Score: ${score}`, width / 2, 60);
}

  function playMusic() {
    if (song.isPlaying()) {
        song.stop();
    } else {
        song.play();
    }
}
 
function keyPressed() {
  
    if (keyCode === 32) {
    moving = !moving; //checking if the block is dropping
      playMusic();
      if(!gameRun) { 
        gameRun = true;
      } else {playMusic()}
      showGame = false;
      startPress = true;

    } else if (key === 's') {
        hitLine = true;
        keyIndex = 0;
        hitBlock(0);

    } else if (key === 'd') {
        hitLine = true;
        keyIndex = 1;
        hitBlock(1);

    } else if (key === 'f') {
      hitLine = true;
      keyIndex = 2;
      hitBlock(2);
    }
}

function keyReleased() {
    hitLine = false;
    keyIndex = -1;
    scoreIncrement = false;
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

    let bCircleX = [0.08, 0.14, 0.098, 0.83, 0.885, 0.11, 0.86, 0.88]; //x-axis
    let bCircleY = [0.089, 0.73, 0.46, 0.45, 0.3, 0.25, 0.1, 0.68]; // y-axis
    let bCircleR = [0.042, 0.095, 0.068, 0.065, 0.04, 0.075, 0.1, 0.096]; //radius
    let bCircleStroke = [8, 18, 16, 6, 11, 18, 18, 14]; 
    let iColor = [color('#445897'),color('#445897'),color('#aa392e'),color('#aa392e '),color('#aa392e'),color('#e7ce34'),color('#e7ce34'),color('#e7ce34')];

    noFill();
    
    for (let i = 0; i < bCircleX.length; i++) {
        strokeWeight(bCircleStroke[i]);
        stroke(iColor[i]);
        ellipse(bCircleX[i] * windowWidth, bCircleY[i] * windowHeight, bCircleR[i] + rms * windowWidth); //rms = allow circle to react with the music
    }
}


 function drawSquare() {
    let rms = analyser.getLevel();

    let ySqrX = [0.11, 0.86, 0.88];
    let ySqrY = [0.25, 0.1, 0.68];
    let ySqr = [0.01, 0.02, 0.096];
    let iColor = [color('#445897'),color('#aa392e'),color('#aa392e '),color('#e7ce34')];
    let sqrStroke = [16, 6, 6, 12];

    for (let i = 0; i< ySqrX.length; i++) {
       strokeWeight(3);
       stroke(iColor[i]);
       strokeWeight(sqrStroke[i]);
       noFill();
       square(ySqrX[i] * windowWidth, ySqrY[i] * windowHeight, ySqr[i] + rms * windowWidth);
    }
 }

 //function for dropping blocks.
  function drawBlock() {

    noStroke();
    fill(170, 57, 46); //Red
    rect(0.28 * windowWidth, 0.1 * windowHeight, 0.07 * windowWidth, 0.11 * windowHeight);
    fill(231, 206, 52); //Yellow
    rect(0.45 * windowWidth, 0.45 * windowHeight, 0.06 * windowWidth, 0.22 * windowHeight);
    fill(60, 88, 151); //Blue
    rect(0.7 * windowWidth, 0.26 * windowHeight, 0.09 * windowWidth, 0.16 * windowHeight);
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

 if (movingRect1.missed() || movingRect2.missed() || movingRect3.missed()) {
    score -=50;
  }

  } else {
      movingRect1.show();
      movingRect2.show();
      movingRect3.show();
  }
  }

  //A double-line that would react when user pressed on the S D F keys for user feedback.
  function highlight() {
    if (hitLine) {
        strokeWeight(6);
        line(0 * windowWidth, 0.848 * windowHeight, 1 * windowWidth, 0.848 * windowHeight);
        line(0 * window, 0.873 * windowHeight, 1 * windowWidth, 0.873 * windowHeight);
    }
  }
  
  // The following code is inspired by https://editor.p5js.org/Alexvargas000/sketches/WkER5h9r9
  function hitBlock(keyIndex) {

    //Set up the hit range for dropping blocks.
    if (keyIndex === 0 && movingRect1.y >= 0.86 * windowHeight && movingRect1.y <= 0.88 * windowHeight && !scoreIncrement) {
    score += 100; //score system
    scoreIncrement = true;
    movingRect1.y = 0.95 * windowHeight; //once the user catches the dropping blocks within the range, the y position of the block will immediately set to the bottom of the screen (end of screen).
    movingRect1.hide();

  } else if (keyIndex === 1 && movingRect2.y >= 0.86 * windowHeight && movingRect1.y <= 0.88 * windowHeight && !scoreIncrement) {
    score += 100;
    scoreIncrement = true;
    movingRect2.y = 0.95 * windowHeight;
    movingRect2.hide();

  } else if (keyIndex === 2 && movingRect3.y >= 0.86 * windowHeight && movingRect1.y <= 0.88 * windowHeight && !scoreIncrement) {
    score += 100;
    scoreIncrement = true;
    movingRect3.y = 0.95 * windowHeight;
    movingRect3.hide();
  }
  highlight();
  }


  class Block {
    constructor(x, y, width, height, colorVal, yspeed) {
      this.x = x;
      this.y = y;
      this.width = width;
      this.height = height;
      this.colorVal = colorVal;
      this.yspeed = yspeed; 
      this.initialY = y;
      this.offScreen = true;
    }
  
    show() {
      fill(this.colorVal);
      rect(this.x, this.y, this.width, this.height);
  }
  
    move() {
        this.y += this.yspeed;
        if (this.y > 0.95 * windowHeight) {
            this.y = this.initialY;
        }
    }

    //miss range - when the dropping block reached the bottom yellow line, it will be considered a missed catch
    missed() {
        return this.y > 0.9467 * windowHeight; // the number needs to be set very specifically to stop multiple score deduction. 
    }
    
    hide() {
        this.offScreen = true;
    }
}