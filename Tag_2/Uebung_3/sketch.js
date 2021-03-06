function setup() {
  createCanvas(800, 800);
}

function draw() {
  background(220);

  noFill();

  for (let kreis = 10; kreis < width /2; kreis = kreis + 90 *0.3) {

    strokeWeight(10);
    stroke(204, 190, 187);
    circle(mouseX, mouseY, kreis);
    

    stroke(72, 88, 88);
    circle(405, 400, kreis);
    
    stroke(242, 164, 118);
    circle(400, 405, kreis);
    
    stroke(135, 107, 103);
    circle(395, 400, kreis);   

  }
}
