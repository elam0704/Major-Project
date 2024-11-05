function setup() {
  createCanvas(windowWidth, windowHeight)
  noLoop();
}
function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
  draw();
}

function draw() {
  background(242, 242, 242);

  stroke(231, 206, 52);
  strokeCap(SQUARE);

  // Full Length Horizontal Lines
  let yPositions = [0.03, 0.168, 0.36, 0.445, 0.575, 0.64, 0.873, 0.963, 0.70, 0.798, 0.904, 0.745, 0.813, 0.744];
  let horizontalStrokes = [20, 22, 20, 18, 20, 20, 20, 20, 20, 20, 20, 20, 20, 30];
  let xStarts = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0.07, 0.85, 0.85];
  let xLength = [1, 1, 1, 1, 1, 1, 1, 1, 0.07, 0.07, 0.07, 0.55, 0.97, 0.97];

  for (let i = 0; i < yPositions.length; i++) {
      strokeWeight(horizontalStrokes[i]);
      line(xStarts[i] * windowWidth, windowHeight * yPositions[i], windowWidth * xLength[i], windowHeight * yPositions[i]);

  }

  // Full Length Vertical lines
  let xPositions = [0.032, 0.07, 0.125, 0.233, 0.549, 0.59, 0.85, 0.89, 0.93, 0.97, 0.59, 0.661, 0.93, 0.93];
  let verticalStrokes = [22, 22, 22, 22, 25, 23, 23, 24, 24, 24, 23, 26, 23, 23];
  let verticalHeight = [0.355, 1, 1, 1, 1, 0.355, 1, 0.36, 0.12, 1, 1, 0.65, 0.45, 0.82];
  let yStarts = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0.45, 0.45, 0.178, 0.63]

  for (let i = 0; i < xPositions.length; i++) {
      strokeWeight(verticalStrokes[i]);
      line(windowWidth * xPositions[i], yStarts[i] * windowHeight, windowWidth * xPositions[i], windowHeight * verticalHeight[i]);
  }

  // Blue Circle
  let bCircleX = [0.032, 0.043, 0.043, 0.07, 0.07, 0.07, 0.125, 0.125, 0.125, 0.125, 0.125, 0.385, 0.965];
  let bCircleY = [0.22, 0.7, 0.8, 0.36, 0.445, 0.575, 0.17, 0.52, 0.575, 0.875, 0.965, 0.873, 0.36];
  let bCircleR = 0.03 * windowWidth;

  fill(60, 88, 151);  //blue
  noStroke();

  for (let i = 0; i < bCircleX.length; i++) {
      ellipse(bCircleX[i]*windowWidth, bCircleY[i]*windowHeight,bCircleR);
  }

// Red Circle
  let rCircleX = [0.85, 0.85, 0.97, 0.97, 0.88];
  let rCircleY = [0.445, 0.576, 0.576, 0.715, 0.95];
  let rCircleR = 0.03 * windowWidth;

  fill(170, 57, 46);  //red
  noStroke();

  for (let i = 0; i < rCircleX.length; i++) {
      ellipse(rCircleX[i] * windowWidth, rCircleY[i] * windowHeight, rCircleR);
  }
  // Grey Circle
  let gCircleX = [0.18, 0.18, 0.18, 0.458, 0.767, 0.278];
  let gCircleY = [0.3, 0.403, 0.82, 0.52, 0.5, 0.1];
  let gCircleR = 0.045 * windowWidth;

  fill(219, 221, 213);  //Grey
  noStroke();

  for (let i = 0; i < gCircleX.length; i++) {
      ellipse(gCircleX[i] * windowWidth, gCircleY[i] * windowHeight, gCircleR)
  }

  // Blue Square
  let bRectX = [0.024, 0.024, 0.117, 0.117, 0.117, 0.117, 0.145, 0.225, 0.225, 0.225, 0.225, 0.225, 0.225, 0.225, 0.225, 0.275,
      0.36, 0.48, 0.582, 0.73, 0.78, 0.842, 0.842, 0.842, 0.922, 0.962 ];
  let bRectY = [0.015, 0.08, 0.08, 0.323, 0.37, 0.626, 0.015, 0.08, 0.21, 0.346, 0.433, 0.56, 0.732, 0.859, 0.95, 0.155,
      0.627, 0.627, 0.345, 0.627, 0.627, 0.015, 0.155, 0.345, 0.015, 0.155 ];
  let bRect = 0.018 * windowWidth;

  fill(60, 88, 151);  //blue
  noStroke();

  for (let i = 0; i < bRectX.length; i++) {
      square(bRectX[i] * windowWidth, bRectY[i] * windowHeight,bRect);
  }

  // Red Square
  let rRectX = [0.024, 0.038, 0.062, 0.133, 0.21, 0.225, 0.42, 0.582, 0.541, 0.842, 0.842, 0.842, 0.842, 0.842, 0.864, 0.882, 0.87, 0.922, 0.922,
      0.962, 0.962, 0.962, 0.962, 0.962
  ];

  let rRectY = [0.155, 0.345, 0.627, 0.347, 0.155, 0.627, 0.627, 0.155, 0.345, 0.22, 0.5, 0.627, 0.733, 0.859, 0.10, 0.155, 0.345, 0.43, 0.63,
      0.04, 0.1, 0.29, 0.43, 0.94
   ];

  let rRect = 0.018 * windowWidth;

  fill(170, 57, 46);;  //red
  noStroke();

  for (let i = 0; i < rRectX.length; i++) {
      square(rRectX[i] * windowWidth, rRectY[i] * windowHeight, rRect);
      console.log(i)
  }

  // Rectangle
  noFill();
  stroke(60, 88, 151);
  strokeWeight(4);
  rect(0.28 * windowWidth, 0.48 * windowHeight, 0.04 * windowWidth, 0.08 * windowHeight);
  rect(0.62 * windowWidth, 0.174 * windowHeight, 0.06 * windowWidth, 0.18 * windowHeight);
  stroke(170, 57, 46);
  rect(0.251 * windowWidth, 0.04 * windowHeight, 0.055 * windowWidth, 0.11 * windowHeight);
  rect(0.74 * windowWidth, 0.45 * windowHeight, 0.055 * windowWidth, 0.15 * windowHeight);
  stroke(231, 206, 52);
  rect(0.43 * windowWidth, 0.38 * windowHeight, 0.055 * windowWidth, 0.2 * windowHeight);

  

}


