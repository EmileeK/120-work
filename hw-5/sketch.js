function setup(){

createCanvas( windowWidth, 900);

}

let eyeAngle = 330;
let whiteDot = 348;
let x = 330
let speed = .5;

function draw(){

background ('rgb(217, 217, 217)');
noCursor()

push()

// translate monkey to follow mouse.
translate (mouseX, mouseY);

// body of the monkey
fill('rgba(55, 32, 2, 0.99)')
ellipse( 300 , 450, 120, 175);

//  monkey head

ellipse(300, 310, 175, 175);

// monkey ears
stroke('rgba(55, 32, 2, 0.99)');
ellipse(210, 260, 60, 60);
ellipse(390, 260, 60, 60);

// monkeys eyes
push()
stroke('rgb(193, 193, 193)');
arc(258, 310, 90, 90, radians(eyeAngle - 165), radians(eyeAngle + 5));
// radians at 165 degrees and 334 degrees
arc(342, 310, 90, 90, radians(eyeAngle - 126), radians(eyeAngle + 15));
// radians at 204 degrees and 345 degrees
pop();

// monkey eyes
// right eye
fill('rgb(0, 0, 0)');
ellipse(255, 305, 40, 40);

// left eye
ellipse(343, 305, 40, 40);

// pupil
fill('rgb(255, 255, 255)');
ellipse(260, 310, 10, 10);

push()
// making the white pupil move from side to side
fill('rgb(255, 255, 255)');
ellipse(whiteDot, 310, 10, 10);

// a condition to make the ball turn around when it hits the x coordinate of 350
if ( whiteDot > 355) {
speed = -.5;
}
// a condition to make the ball turn around when the ball is less then 330
if (whiteDot < 330) {
  speed = .5
}
whiteDot = whiteDot + speed;

pop()

// mouth of the monkey
push();
// fill('rgba(55, 32, 2, 0.99)')
stroke('rgb(0, 0, 0)');


ellipse(300, 355, 80, 80);
fill('rgb(0, 0, 0)');
arc(300, 358, 50, 50, radians(eyeAngle + 30), radians(eyeAngle - 150));
// radians at 360 degrees and 180 degrees


//  nose
ellipse(290, 335, 10, 20)
ellipse(310, 335, 10, 20)
pop();

// tail
push();

noFill();
stroke('rgba(55, 32, 2, 0.99)')
strokeWeight(20)

arc(370, 450, 80, 80, radians(eyeAngle + 60), radians(eyeAngle - 220));
// radians at 390 degrees and 110 degrees

arc(445, 474, 80, 80, radians(eyeAngle - 140), radians(eyeAngle));
// radians at 190 degrees and 330 degrees
pop()


pop()
// end of monkey

}
