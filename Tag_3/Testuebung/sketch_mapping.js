let color = 0;
let kreis = 0;

function setup() {
  createCanvas(600, 255);
  noStroke();
}

function draw() {
  
  
  //console.log(m);
  

 
  color = map(mouseX,0, 600, 0, 255);
  background(17,37,color);
  
  fill(255-mouseX);
  
  kreis = map(mouseX,0, 600, 0, 175);
  fill(34,kreis,133);
  ellipse(width/2, height/2, 255, 255);
}