let angle = 0;
function setup() {
  createCanvas(600, 600);
  angleMode(DEGREES)
}
function draw() {
  background(255);
  fill(0);
  rect(200,200,200,200);

  translate(300, 300);

  rotate(angle);

  rotate(-60);
  fill(255,0,0);
  rect(-100,-100,200,200);

  angle = angle + 1;
}