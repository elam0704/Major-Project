let windowWidth = 800;
let windowHeight = 800;
var flash = 0;

  function windowResized() {
    resizeCanvas(windowWidth, windowHeight);
    draw();
}

  function setup() {
    createCanvas(windowWidth, windowHeight);
    textAlign(CENTER, CENTER);
    rectMode(CENTER);
    textSize(32); // Move textSize() here
  }

  function draw() {
    background(242, 242, 242);

    drawBackground();
    drawBlock();

  }

  function drawBackground () {
    flash = flash + 1


    stroke(231, 206, 52);
    strokeCap(SQUARE)

    // Full Length Horizontal Lines
    let xStarts = [0, 0, 0.85];
    let yPositions = [0.86, 0.95, 0.03];
    let horizontalStrokes = [16, 16, 18];
    let xLength = [1, 1, 0.42]

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

    // Blue Circle
    let bCircleX = [0.08, 0.14];
    let bCircleY = [0.089, 0.73];
    let bCircleR = [0.042, 0.095];
    let bCircleStroke = [8,18];

    if (flash % 50 === 0) {
    noFill();
    stroke(255); //Blue
    for (let i = 0; i < bCircleX.length; i++) {
        strokeWeight(bCircleStroke[i]);
        ellipse(bCircleX[i] * windowWidth, bCircleY[i] * windowHeight, bCircleR[i] * windowWidth);
    }
}
    else {
    noFill();
    stroke(60, 88, 151); //Blue
    for (let i = 0; i < bCircleX.length; i++) {
        strokeWeight(bCircleStroke[i]);
        ellipse(bCircleX[i]*windowWidth, bCircleY[i]*windowHeight,bCircleR[i]*windowWidth)
    }
    }

 // Red Circle
    let rCircleX = [0.098, 0.83, 0.885];
    let rCircleY = [0.46, 0.45, 0.3];
    let rCircleR = [0.068, 0.065, 0.04];
    let rCircleStroke = [16, 6, 11];

    if (flash % 20 === 0) {
    noFill();
    stroke(255);  //Red
    for (let i = 0; i < rCircleX.length; i++) {
        strokeWeight(rCircleStroke[i]);
        ellipse(rCircleX[i] * windowWidth, rCircleY[i] * windowHeight, rCircleR[i] * windowWidth);
    }
  } else {
    noFill();
    stroke(170, 57, 46);;  //Red
    for (let i = 0; i < rCircleX.length; i++) {
        strokeWeight(rCircleStroke[i]);
        ellipse(rCircleX[i] * windowWidth, rCircleY[i] * windowHeight, rCircleR[i] * windowWidth);
    }
  }
    // Yellow Circle
    let yCircleX = [0.11, 0.86, 0.88];
    let yCircleY = [0.25, 0.1, 0.68];
    let yCircleR = [0.075, 0.1, 0.096];
    let yCircleStroke = [18, 18, 14];

    if (flash % 15 === 0) {
    noFill();
    stroke(255);  //Yellow
    for (let i = 0; i < yCircleX.length; i++) {
        strokeWeight(yCircleStroke[i]);
        ellipse(yCircleX[i] * windowWidth, yCircleY[i] * windowHeight, yCircleR[i] * windowWidth);
    }
  } else {
    noFill();
    stroke(231, 206, 52);  //Yellow
    for (let i = 0; i < yCircleX.length; i++) {
        strokeWeight(yCircleStroke[i]);
        ellipse(yCircleX[i] * windowWidth, yCircleY[i] * windowHeight, yCircleR[i] * windowWidth);
    }
  }
  }

  function drawBlock() {
    noStroke();
    fill(170, 57, 46); //Red
    rect(0.3 * windowWidth, 0.1 * windowHeight, 0.07 * windowWidth, 0.11 * windowHeight);
    fill(231, 206, 52); //Yellow
    rect(0.45 * windowWidth, 0.45 * windowHeight, 0.06 * windowWidth, 0.22 * windowHeight);
    fill(60, 88, 151); //Blue
    rect(0.7 * windowWidth, 0.26 * windowHeight, 0.09 * windowWidth, 0.16 * windowHeight);
  }
