var song;
var fft;
var w;
var img;
// var amp; //vid
// var  volhistory = []; //vid

// function toggleSong() {
//   if (song.isPlaying()) {
//     song.pause();
//   } else {
//     song.play();
//   }
// }


function preload(){
song = loadSound("Teamwork.mp3");
// song = loadSound("Make-It-Sweet.m4a");
img = loadImage("LondonEye.JPG");

}

function setup(){
createCanvas(1000, 700);
// image(img , 0, 0, 1000, 700);
colorMode(HSB, 100);
angleMode(DEGREES);
song.play();
// amp = new p5.Amplitude(); // vid
// volhistory.push(vol); // vid
// fft = new p5.FFT(0.9, 128);
fft = new p5.FFT(0.8, 64);
w = width / 64
}

function draw(){
background('rgb(0, 0, 0)');

// image(img , -25, 40, 1100, 700);
var spectrum = fft.analyze();
// var vol = amp.getLevel();

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
  // rotateZ(millis() / 1000)
  line(10, 10, x * 2 , y * 2);
  // rect(x * 2, y * 2, height - y);
  fill(i, 255, 255)
  ellipse(x * 2, y * 2, 8);
  ellipse(x * 3, y * 3, 10);
  ellipse(x * 4, y * 4, 12);
  // fill('rgb(57, 166, 182)');


}
endShape();
//  everything works up to this point
// starting to add extra things

// push()
// beginShape();
// noFill();
// for( var i = 0; i < volhistory.length; i++); // vid
// for (var i = 0; i < 360 , i++){
//   var r = 100;
//
//   var x = r * cos(angle);
//   var y = r * sin(angle);
//   vertex(x,y);
//
//
//
// ellipse(0, 0, width / 1.5 , height / 1.5);
//
// }
// endShape()
// pop()
}
