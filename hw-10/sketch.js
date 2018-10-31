let monkey = [];
let t = 5;

function setup(){
    createCanvas(windowWidth, 750);

    // create random movements for the monkey
  for ( var i = 0; i < 30; i++) {

  // Giving monkey array the max distance it can go and how big the monkey
  // will get in the finished code
monkey.push(
{
period: { x: random(30, 200), y: random(30, 200) },
maxSize: random(5),
maxDist: {
x: random(width/2),
y: random(height/2)
},
pos: {
x: random(width),
y: random(height)
} }
);
}
}

function draw() {
  // set background to green
  background('rgb(86, 103, 1)');

  //number of monkeys to be drawn according to mouse y position
  let drawAmount = map(mouseY, 0, width, 1, monkey.length);
  for (let y = 0 ; y < drawAmount ; y++) {
  // function to draw monkeys later on in the code
      drawMonkey(monkey[y], t);
  }
// time increment.
    t++;

}

// new function that will help draw the monkey.
function drawMonkey(monkey, time) {


  let x = tanPos(monkey.period.x, time/4);
  let y = tanPos(monkey.period.x, time/4);

// defining where the monkeys are going to the upper left corner of the page and how fast
  let pos_x = x * monkey.maxDist.x / monkey.pos.x;
  let pos_y = x * monkey.maxDist.y / monkey.pos.y;


monkeyCartoon(
pos_x, pos_y, x / monkey.maxSize, y / monkey.maxSize);
}


// defining new function
function monkeyCartoon(pos_x, pos_y, scale_x, scale_y){
    push();

// - postion monkey
  translate(pos_x, pos_y) ;
  scale(scale_x/2, scale_y/2);

// - draw monkey
  let eyeAngle = 330;
  let whiteDot = 348;
  let x = 330


  // body of the monkey
  fill('rgba(55, 32, 2, 0.99)');
  ellipse(300, 310, 175, 175);
  stroke('rgba(55, 32, 2, 0.99)');
  ellipse(210, 260, 60, 60);
  ellipse(390, 260, 60, 60);
  push();
  stroke('rgb(193, 193, 193)');
  arc(258, 310, 90, 90, radians(eyeAngle - 165), radians(eyeAngle + 5));
  arc(342, 310, 90, 90, radians(eyeAngle - 126), radians(eyeAngle + 15));
  pop();
  // monkey eyes
  fill('rgb(0, 0, 0)');
  ellipse(255, 305, 40, 40);
  ellipse(343, 305, 40, 40);
  fill('rgb(255, 255, 255)');
  ellipse(260, 310, 10, 10);
  push()
  fill('rgb(255, 255, 255)');
  ellipse(whiteDot, 310, 10, 10);
  pop()
  // Monkey Face
  push();
  fill(random(10, 255))
  stroke('rgb(0, 0, 0)');
  ellipse(300, 355, 80, 80);
  fill('rgb(0, 0, 0)');
  arc(300, 358, 50, 50, radians(eyeAngle + 30), radians(eyeAngle - 150));
  ellipse(290, 335, 10, 20);
  ellipse(310, 335, 10, 20);
  pop();

  pop()

        pop();
  }


function tanPos( timeScale, time ) {
    let zoo = tan( PI * (timeScale/time)/10 );
    return zoo;
}
