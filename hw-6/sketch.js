
let box = {};
boxPos1 = 20
boxPos2 = 100

// first quad() color stroke
let col_e = 0;
let col_r = 10;
let col_b = 0;


function setup(){
// create canvas (windowWidth, 700)
createCanvas(windowWidth, 700);

background('rgb(148, 148, 148)');

frameRate(3);
};


function draw() {

col_r += random(0, 10);
col_b += random(0, 10);

col_r = col_r % 255;
col_b = col_b % 255;

// varible updates
boxPos1 = width * round(abs(-.4));

noFill();
stroke( col_e, col_r, 255 + col_b );

let line_size = random( 10, width-10 );
map( 200, 0, 100, 0, width);
quad( boxPos1, height/2, line_size, line_size );

let a_col = 50;
let c_col = 100;
let f_col = 50;

let line2_size = random(30, width-10);

a_col += random( 0, 190);
c_col += random( 0, 100);

a_col = a_col % 255;
c_col = c_col % 255;
noFill();
stroke(f_col, a_col, 255 - c_col);
quad(width/2, line2_size, line_size, line2_size);

a_col += random(0, 230);
c_col += random(0, 100);


a_col = a_col % 255;
c_col = c_col % 255;

let line3_size = random(50, width-10)
noFill();
stroke(f_col, c_col, 255- a_col);
quad(width/4, line3_size, line2_size, line3_size)

}
