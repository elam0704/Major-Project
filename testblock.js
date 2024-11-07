function setup() {
    createCanvas(400, 400);
    movingRect = new Three(0.1 * windowWidth, 0.1 * windowHeight, 0.08 * windowWidth, 0.04 * windowHeight);

  }

  function draw() {
    background(220);

    for (i=0; i<10; i+=0.5) {
      movingRect.show();
      movingRect.move();
    }
  }

  class Three {
    constructor(x, y, r1, r2) {
      this.x = x;
      this.y = y;
      this.r1 = r1;
      this.r2 = r2;
      this.yspeed = random(0.1, 1);
    }

    move() {
      this.y = this.y + this.yspeed;
      if (this.y > height) {
        this.y = 0;
      }
    }

    show() {
      //fill(this.c);
      noStroke();
      fill(255,0,0);
      rect(this.x, this.y, this.r1, this.r2);
    }
  }