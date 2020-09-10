function setup() {
  createCanvas(600, 700);
}

function draw() {
  background(220);

  noStroke();

 /*4-eck unten*/
 fill(191, 168, 163, 150);
 quad(300, 250, 500, 440, 300, 650, 100, 450 );

 /*4-eck oben*/
 fill(191, 168, 163, 90);
 quad(300, 50, 450, 200, 300, 350, 150, 200);

 /*Kreis oben links*/
 fill(72, 88, 89, 150);
 circle(150, 200, 150);

 /*Kreis Oben links klein*/
 fill(72, 88, 89);
 circle(200, 298, 100);

 /* 4-eck rechts klein*/
 fill(89, 55, 47, 150);
 quad(350, 220, 420, 290, 350, 360, 280, 290);

 /*Kreis gross rechts*/
 fill(72, 88, 89);
 circle(500, 440, 250);

 /*Kreis klein rechts*/
 fill( 242, 164, 119);
 circle(410, 530, 100);

 /*Linie 1*/
 stroke(242, 164, 119);
 strokeWeight(4);

 line(0, 495, 450, 55);
 line(50, 160, 360, 450);
 
 }









