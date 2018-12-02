class Tri{

constructor(x,y,r) {
      this.x = x;
      this.k = random(x);
      this.y = random(y);
      this.j = random(y);
      this.w = r;
      this.h = r * 2;
      this.col= 0;
      // this.col = color(random(255),random(255),random(255));
    }

  move() {
      this.x = this.x + random(-10, 5);
      this.y = this.y + random(-5, 5);
      this.k = this.k - random(-5, 5);

    }
    colorChange(){
      this.col = color(random(255),random(255),0);
    }


  show() {
      // frameRate(4);
      stroke(this.col);
      strokeWeight(4);
      noFill();
      quad(this.k * 2, this.y, this.h, this.h, this.h * 4, this.x * 2 );

    }
}
