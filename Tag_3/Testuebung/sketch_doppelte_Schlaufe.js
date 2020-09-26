function setup() {
  createCanvas(800, 800);
}

function draw() {
  background(220);

  noFill();




 // for (let kreis = 10; kreis < width /2; kreis = kreis + 90 *0.3) {

for (let x = 0; x <= width; x+=20){
  for (let y = 0; y<= height; y+= 40){


    strokeWeight(10);
    stroke(204, 190, 187);
    circle(x, y, 10);
    

    stroke(72, 88, 88);
    circle(x, y, 10);
    
    stroke(242, 164, 118);
    circle(x, y, 10);
    
    stroke(135, 107, 103);
    circle(x, y, 10);  

  }
}  