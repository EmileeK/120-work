
function setup() {
	createCanvas(windowWidth, 600);
}

function draw() {
	background(255);


//  assigned varibles numbers for the lines below
	for (let y = 22; y <= height; y += 25) {
		for (let x = 42; x <= width; x += 25) {
			line(x,y-42 , x-42, y);
			line(x-22, y, x, y-22);

// set up variables for the random color choices the ellipse later in the code
			let a_color = 0;
			let b_color = 255;
			let c_color = 0;
// assigned a_color and b_color a random variables
			a_color = random(45, 190);
			b_color = random(80, 30);

			a_color = a_color % 255
			b_color = b_color % 255

// gave the ellipse a fill color the variable that were declared above
			fill(c_color, b_color, 255 - a_color);
			ellipse(x, x+y, 60, 60);

		}
	}
}
