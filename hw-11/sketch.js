let squares = [];

function setup() {
    createCanvas(windowWidth, 800);
    // defining the amount of onjects in the sketch.. 20 shapes
    for( let i = 0; i < 20; i++) {
    let b = new Tri(width/2, height/2, random(10, 50));
    squares.push(b);
    }
  }



function draw() {
    background('rgb(90, 235, 39)');
    // defining the class to show in the sketch
    for (let i = 0; i < squares.length; i++) {
        squares[i].move();
        squares[i].colorChange();
        squares[i].show();


    }
  }
