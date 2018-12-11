var song;
var fft;
var w;
var img;
var amp;



//  loading the the song to be played in the visualizer
// loading the image that is going to be the background
function preload(){
song = loadSound("Teamwork.mp3");
// song = loadSound("Make-It-Sweet.m4a");
img = loadImage("Record.JPG.png");

}

function setup(){
  // creating canvas size, the color for the dots that will be used later
  // what to use degrees when angles instead of radians
createCanvas(1000, 1000);
// image(img , 0, 0, 1000, 1000);
colorMode(HSB, 50);
angleMode(DEGREES);
song.play();
// fft = new p5.FFT(0.9, 128);
// using freqencies
fft = new p5.FFT(0.8, 64);
amp = new p5.Amplitude();


}

function draw(){
  // begining to draw the visualizer white a white background, then place the image over

background('255');

image(img , 0, 10, 1010,  1000);
var spectrum = fft.analyze();
// var vol = fft.getLevel();


noStroke();
translate(width / 2, height / 2);



beginShape();
for (var i = 0; i < spectrum.length; i++) {
  var angle = map(i, 0, spectrum.length, 0, 360);
  var amp = spectrum[i];
  var r = map(amp, 0, 256, 20, 150);

  var x = r * cos(angle);
  var y = r * sin(angle);
  strokeWeight(3);
  stroke(i, 255, 255);
// adding ellispse that will move with the frequency throughout the song.

  line(10, 10, x * 4.5 , y * 4.5);
  // rect(x * 2, y * 2, height - y);
  fill(i, 255, 255)
  ellipse(x * 2, y * 2, 8);
  ellipse(x * 3, y * 3, 10);
  rect(x * 4.5, y * 4.5, 12, 12);
  // fill('rgb(57, 166, 182)');


}
// adding white ellipses to the record player.
endShape();
rotate(PI)
stroke(255)
noFill();
ellipse(0 , 10, width /2 , height / 2);
ellipse(0 , 10, width / 1.5, height / 1.5);
//  everything works up to this point
// starting to add extra things
}
