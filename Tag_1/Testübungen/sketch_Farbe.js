let circleX = 20;

let farbe = 0; 
let farbezwei = 0;
let bgColor = 0; 

function setup() {
  createCanvas(400, 400);

  farbe = color(32, 38, 38);
  farbezwei = color(72, 88, 89);
  bgColor = random(255);
}


function draw() {
 background(bgColor);

 circleX = circleX + 1;

 fill(farbezwei);
  ellipse( circleX, 250, 50);

   if (mouseIsPressed) {
    bgColor = color(random(255), random(255), random(255));
	}
}