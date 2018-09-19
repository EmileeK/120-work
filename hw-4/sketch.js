function setup() {
  // create canvas of 500px by 500px
  createCanvas( 700,800 );

  // set background color for the portrait
background( 'rgb(188, 218, 7)' );
}

function draw() {
// main sandbox for portrait
push();
// translate grid to make the center (0,0)
translate( 400,400 );

// sandbox for arms and hands
push();
// arms
// left arm
translate(25,25);
stroke( 'rgba(124, 5, 5, 0.99)' );
strokeWeight( 40 );
line( -150, -15, -255, -100 );
line( -250, -105, -190, -170 );


// left hand
stroke('rgba(254, 219, 96, 1)');
strokeWeight(40);
point(-177, -182);

// right arm
rotate(PI);
stroke( 'rgba(124, 5, 5, 0.99)' );
strokeWeight( 40 );
line( -135, -19, -240, -98 );
line( -245, -105, -220, -170 );



// right handsstroke
stroke('rgba(254, 219, 96, 1)');
strokeWeight(40);
point(-215, -185);

// end of sandbox for hands and arms.
pop();

// sandbox for body
push();
fill('rgba(124, 5, 5, 0.99)');
rect( 150, -85, -275, 360);

// black stripes for maroon sweater
fill('rgb(0, 0, 0)');
rect( 150, -85,-275, 30);
rect( 150, -25, -275, 30);
rect( 150, 35, -275, 30);
rect( 150, 95, -275, 30);
rect( 150, 155, -275, 30);
rect( 150, 215, -275, 30);

// end sandbox for body
pop();

// sandbox for legs
push();
fill('rgb(2, 83, 129)');
translate (-92, 286);
stroke('rgb(2, 83, 129)');
strokeWeight(20);
triangle( 100, -0, -25, 0, -60, 200);

scale(-1,1);
triangle( -220, -0, -110, 0 , -60, 200);

// end sandbox for legs
pop();

// sandbox for head
push();

fill('rgba(254, 219, 96, 1)');
ellipse(10, -150, 220, 170);

// left eye
push();
fill('rgb(255, 255, 255)');
ellipse( -35, -170, 50, 30);
fill('rgb(73, 52, 17)');
ellipse( -35, -170, 25, 30);
fill('rgb(0, 0, 0)');
ellipse( -35, -170, 15, 15);

// right eye

fill('rgb(255, 255, 255)');
ellipse(55, -170, 50, 30);
fill('rgb(73, 52, 17)');
ellipse( 55, -170, 25, 30);
fill('rgb(0, 0, 0)');
ellipse( 55, -170, 15, 15);


// hair
fill('rgba(48, 20, 1, 0.94)');
stroke('rgba(48, 20, 1, 094)');
strokeWeight(15);
arc( 10, -195, 176, 78, PI, TWO_PI);
line(96, -205, 96, 10);
line(100, -202, 100, 10);
line(105, -196, 105, 10);
line(108, -190, 108, 10);
line(113, -185, 113, 10);
line(117, -176, 117, 10);
line(122, -170, 122, 10);
line (-76, -205, -76, 10);
line(-78, -202, -78, 10);
line(-81, -196, -81, 10);
line(-84, -192, -84, 10);
line(-87, -187, -87, 10);
line(-90, -183, -90, 10);
line(-93, -178, -93, 10);
line(-97, -174, -97, 10);
line(-100, -168, -100, 10);

// bangs for hair
line(10, -230, 10, -200);
line(25, -230, 25, -200);
line(40, -230, 40, -200);
line(55, -225, 55, -200);
line(70, -222, 70, -200);
line(85, -215, 85, -200);
line(-5, -230, -5, -200);
line(-20, -230, -20, -200);
line(-35, -227, -35, -200);
line(-50, -220, -50, -200);
line(-65, -215, -65, -200);

// end sandbox for hair
pop();
 // mouth
 push();

fill('rgb(0, 0, 0)');
arc( 10, -120, 70, 70, 0, PI);

// end sandbox for mouth.
 pop();

// end sandbox for head
pop();
// end of main sandbox for portrait
pop();
}
