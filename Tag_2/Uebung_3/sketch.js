function setup() {
  createCanvas(800, 800);
}

function draw() {
  background(220);

noStroke();

//oben
triangle(100, 100, 200, 400, 300, 100);
//unten
triangle(200, 400, 100, 700, 300, 700);


}