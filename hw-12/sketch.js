
let squares = [];

function setup() {
    createCanvas(windowWidth, 800);
    // defining the amount of onjects in the sketch.. 20 shapes
    for( let i = 0; i < 20; i++) {
    let b = new Square(width/2, height/2, random(10, 50));
    squares.push(b);
    }
  }



function draw() {
    background('rgb(39, 235, 178)');
    // defining the class to show in the sketch
    for (let i = 0; i < squares.length; i++) {
        squares[i].move();
        squares[i].show();

    // Getting the shapes to change color when they touch..
    for ( let k = 0; k < squares.length; k++){
      // if (i =! k ; squares[i] this.intersects(squares[k]));
      squares[i].colorChange();
      squares[k].colorChange();

    }
    }
  }
