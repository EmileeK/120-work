class Square{

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
      this.x = this.x + random(-5, 5);
      this.y = this.y + random(-5, 5);
      this.k = this.k - random(-5, 5);

    }
    colorChange(){
      this.col = color(random(255),random(255),random(255));
    }
   intersects(other) {
      var d = dist(this.k, this.y, other.k, other.y);
      if (d < this.w + other.w) {
          return true;
      } else {
         return false;
      }
      }

  show() {
      stroke(this.col);
      strokeWeight(4);
      noFill();
      rect(this.k * 2, this.y, this.h, this.h/2, 15);
      ellipse(this.k, this.j, this.w *2);
    }
}
