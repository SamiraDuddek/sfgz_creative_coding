function setup() {
  createCanvas(1000,800);
}

function draw() {
  background(220);


noStroke();

//Quadrat Mitte 
quad(400, 400, 500, 500, 400, 600, 300, 500);

stroke(51);
//Quadrat Klein oben 
quad(400, 410, 440, 450, 400, 490, 360, 450);

//Quadrat Klein links
quad(310, 500, 350, 540, 390, 500, 350, 460);

//Quadrat Klein unten
quad(400, 510, 440, 550, 400, 590, 360, 550);

//Quadrat Klein rechts
quad(450, 460, 490, 500, 450, 540, 410, 500);

//fill(51);

//Linke Seite 

beginShape();
vertex(400, 400);
vertex(300, 500);
vertex(400, 600);
vertex(400, 640);
vertex(260, 500);
vertex(400, 360);
endShape(CLOSE);

//Rechte Seite

beginShape();
vertex(400, 400);
vertex(500, 500);
vertex(400, 600);
vertex(400, 640);
vertex(540, 500);
vertex(400, 360);
endShape(CLOSE);

}